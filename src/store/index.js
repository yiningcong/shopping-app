// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import toggleCartSlice from "./toggle-cart-slice";

const store = configureStore({
  reducer: { cart: cartSlice.reducer, showCart: toggleCartSlice.reducer },
});

export default store;
