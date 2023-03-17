import {
  MdFastfood,
  MdCloudUpload,
  MdDelete,
  MdAttachMoney,
  MdFoodBank,
} from "react-icons/md";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Loader from "../UI/Loader";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../../firebase.config";
import { categories } from "./dataInfo";
import { saveItem } from "../../store/item-actions";

const AddFoodForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [price, setPrice] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setStatus("error");
        setIsLoading(false);
        setTimeout(() => {
          setStatus("");
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setIsLoading(false);
          setStatus("success");
          setTimeout(() => {
            setStatus("");
          }, 4000);
        });
      }
    );
  };

  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      setStatus("success");
      setTimeout(() => {
        setStatus("");
      }, 4000);
    });
  };

  const saveDetails = () => {
    setIsLoading(true);
    try {
      if (!title || !imageAsset || !price || !category) {
        setStatus("empty");
        setTimeout(() => {
          setStatus("");
          setIsLoading(false);
        }, 4000);
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title,
          imageURL: imageAsset,
          category: category,
          qty: 1,
          price: price,
        };
        saveItem(data);
        setIsLoading(false);
        setStatus("success");
        setTimeout(() => {
          setStatus("");
        }, 4000);
      }
    } catch (error) {
      console.log(error);
      setStatus("error");
      setIsLoading(false);
      setTimeout(() => {
        setStatus("");
      }, 4000);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-[90%] bg-white bg-transparent md:w-[50%] border-2 border-secondHeadingColor rounded-lg p-8 flex flex-col items-center justify-center gap-8">
        {status !== "success" && status !== "" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full p-2 rounded-lg text-center text-lg font-semibold bg-orange-500 text-white"
          >
            {"Error while uploading : Try AGain 🙇"}
          </motion.p>
        )}

        {status == "success" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full p-2 rounded-lg text-center text-lg font-semibold bg-successMsg text-white"
          >
            Data edited successfully 😊
          </motion.p>
        )}

        <div className="w-full py-2 border-b-2 border-secondHeadingColor flex items-center gap-2">
          <MdFastfood className="text-xl text-textColor" />
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Food Name"
            className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-secondHeadingColor text-textColor"
          />
        </div>

        <div className="w-full">
          <MdFoodBank className="text-xl text-textColor mb-2" />
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="outline-none w-full text-base border-2 border-secondHeadingColor p-2 rounded-md cursor-pointer text-headingColor"
          >
            <option
              value="other"
              className="bg-white text-headingColor font-medium"
            >
              Select Category
            </option>
            {categories &&
              categories.map((item) => (
                <option
                  key={item.id}
                  className="text-base capitalize bg-white text-headingColor"
                  value={item.urlParamName}
                >
                  {item.name}
                </option>
              ))}
          </select>
        </div>

        <div className="group flex justify-center items-center flex-col border-4 border-dotted border-secondHeadingColor w-full h-225 md:h-340 cursor-pointer rounded-lg">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!imageAsset ? (
                <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                    <MdCloudUpload className="text-textColor text-4xl hover:text-headingColor opacity-60" />
                    <p className="text-textColor hover:text-headingColor font-medium opacity-80">
                      Click here to upload
                    </p>
                  </div>
                  <input
                    type="file"
                    name="uploadimage"
                    accept="image/*"
                    onChange={uploadImage}
                    className="w-0 h-0"
                  />
                </label>
              ) : (
                <div className="relative h-full">
                  <img
                    src={imageAsset}
                    alt="uploaded image"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md  duration-500 transition-all ease-in-out"
                    onClick={deleteImage}
                  >
                    <MdDelete className="text-white" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-b-2 border-secondHeadingColor flex items-center gap-2">
            <MdAttachMoney className="text-textColor text-2xl" />
            <input
              type="text"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-secondHeadingColor text-textColor"
            />
          </div>
        </div>

        <div className="flex items-center w-full">
          <button
            type="button"
            className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-textColor px-12 py-2 rounded-lg text-lg text-white font-bold"
            onClick={saveDetails}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddFoodForm;
