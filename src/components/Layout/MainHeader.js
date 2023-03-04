import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import React from "react";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import Logo from "../../img/logo.png";
import Avatar from "../../img/avatar.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase.config";

const MainHeader = (props) => {
  const provider = new GoogleAuthProvider();
  const firebaseAuth = getAuth(app);
  const login = async () => {
    const result = await signInWithPopup(firebaseAuth, provider);
    console.log(result);
    const user = result.user;

    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
  };

  return (
    <header className="fixed top-0 z-50 w-screen p-3 px-4 md:p-4 md:px-16 bg-primary">
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between ">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} className="w-12 object-cover" alt="logo" />
          <p className="text-textColor text-xl font-bold">Food</p>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-24">
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </li>
          </ul>

          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
            <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">1</p>
            </div>
            <CartButton />
          </div>

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={Avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              alt="userprofile"
              onClick={login}
            />
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="flex md:hidden w-full h-full bg-blue-500 p-4"></div>
    </header>
  );
};

export default MainHeader;
