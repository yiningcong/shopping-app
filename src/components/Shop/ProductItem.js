import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";

const ProductItem = (props) => {
  const { title, price, imageURL, id } = props;
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(cartActions.addItem({ id, title, price }));
    console.log(id);
  };

  return (
    <div
      key={id}
      className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
    >
      <div className="w-full flex items-center justify-between">
        <motion.div
          className="w-40 h-40 -mt-8 drop-shadow-2xl"
          whileHover={{ scale: 1.2 }}
        >
          <img src={imageURL} alt="" className="w-full h-full object-contain" />
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.75 }}
          className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
          onClick={addItemHandler}
        >
          <MdShoppingBasket className="text-white" />
        </motion.div>
      </div>

      <div className="w-full flex flex-col items-end justify-end -mt-8">
        <p className="text-textColor font-semibold text-base md:text-lg">
          {title}
        </p>

        <div className="flex items-center gap-8">
          <p className="text-lg text-headingColor font-semibold">
            <span className="text-sm text-red-500">$</span> {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
