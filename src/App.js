import Cart from "./components/Cart/Cart";

import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";
import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import MainContainer from "./components/Layout/MainContainer";
import MainHeader from "./components/Layout/MainHeader";

let isInitial = true;

function App() {
  const toggleCart = useSelector((state) => state.showCart.cartIsShown);
  //state.cart instead of state.cart.items!
  const cart = useSelector((state) => state.cart);
  const hasNotification = useSelector(
    (state) => state.showCart.showNotification
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
    // console.log(cart.totalQuantity);
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  const cartIsClicked = cart.changed;

  return (
    <Fragment>
      <MainHeader />
      <main className="mt-8 md:mt-10 px-4 md:px-10 py-2 w-full">
        <Routes>
          <Route path="/*" element={<MainContainer />} />
        </Routes>
      </main>

      <AnimatePresence mode="wait">
        {toggleCart && <Cart />}
        <Products />
      </AnimatePresence>
      {hasNotification && cartIsClicked && (
        <Notification
          status={hasNotification.status}
          title={hasNotification.title}
          message={hasNotification.message}
        />
      )}
    </Fragment>
  );
}

export default App;
