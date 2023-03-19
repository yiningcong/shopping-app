import MenuContainer from "./MenuContainer";
import HomeContainer from "./HomeContainer";
import Cart from "../Cart/Cart";
import { AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import Notification from "../UI/Notification";
import { sendCartData, fetchCartData } from "../../store/cart-actions";
import { Fragment, useEffect } from "react";
import { getAllFoodItems } from "../../store/item-actions";

let isInitial = true;

const MainContainer = () => {
  let foodItems = [];

  const toggleCart = useSelector((state) => state.showCart.cartIsShown);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const hasNotification = useSelector(
    (state) => state.showCart.showNotification
  );

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      foodItems.push(data);
      console.log(foodItems);
    });
  };

  useEffect(() => {
    fetchData();
    dispatch(fetchCartData());
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
      {hasNotification && cartIsClicked && (
        <Notification
          status={hasNotification.status}
          title={hasNotification.title}
          message={hasNotification.message}
        />
      )}
      <HomeContainer />
      {foodItems && <MenuContainer foodItems={foodItems} />}
      <AnimatePresence mode="wait">{toggleCart && <Cart />}</AnimatePresence>
    </Fragment>
  );
};

export default MainContainer;
