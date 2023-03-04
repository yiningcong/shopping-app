import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleCartActions } from "../../store/toggle-cart-slice";
import React from "react";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const showCartHandler = () => {
    dispatch(toggleCartActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
