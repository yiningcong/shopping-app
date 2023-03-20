import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleCartActions } from "../../store/toggle-cart-slice";
import React, { useState, useEffect } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";

const CartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const showCartHandler = () => {
    dispatch(toggleCartActions.toggleCart());
  };

  useEffect(() => {
    if (cartQuantity === 0) return;
    setBtnIsHighlighted(true);
    //为了解决只在最开始的时候动画出现一次
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 3000);
    //0.3s后才把btnIsHighlighted变成FALSE，只有变成FALSE以后才不会有bump的效果
    //如果不这么做，那就会0.3s以后按下button才会弹,0.3s以内按下button没有反应
    return () => {
      clearTimeout(timer);
    };
  }, [cartQuantity]);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  return (
    <motion.button
      initial={{ opacity: 0, y: 0, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 1.2, transition: { duration: 0.2 } }}
      whileHover={{ scale: 1.2 }}
      className="flex items-center bg-headingColor text-white rounded-full px-4 py-1 hover:bg-successMsg duration-300"
      onClick={showCartHandler}
    >
      <span className="flex items-center w-full h-8 mr-2">
        <MdShoppingBasket />
      </span>
      <span>Cart</span>
      <span className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
        <div className={btnClasses}>
          <p className="text-xs text-white font-semibold">{cartQuantity}</p>
        </div>
      </span>

      {/* <motion.div
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
        </motion.div> */}
    </motion.button>
  );
};

export default CartButton;
