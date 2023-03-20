import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import EmptyCart from "../../img/emptyCart.svg";
import { motion } from "framer-motion";
import { toggleCartActions } from "../../store/toggle-cart-slice";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const allTotalPrice = useSelector((state) => state.cart.allTotalPrice);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(toggleCartActions.toggleCart());
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed top-0 right-0 w-full md:w-375 h-screen bg-primary drop-shadow-md flex flex-col z-[101]"
    >
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div whileTap={{ scale: 0.75 }}>
          <MdOutlineKeyboardBackspace
            className="text-textColor text-3xl"
            onClick={toggleCartHandler}
          />
        </motion.div>
        <p className="text-textColor text-lg font-semibold">Cart</p>
      </div>

      {/* information about cart */}

      {cartItems && cartItems.length > 0 ? (
        <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col overflow-y-scroll">
          {/* cart Items section */}
          <div className="w-full h-500 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
            {/* cart Item */}
            <ul>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={{
                    id: item.id,
                    title: item.name,
                    quantity: item.quantity,
                    total: item.totalPrice,
                    price: item.price,
                  }}
                />
              ))}
            </ul>
          </div>

          {/* cart total section */}
          <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Sub Total</p>
              <p className="text-gray-400 text-lg">$ total</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Delivery</p>
              <p className="text-gray-400 text-lg">$ {allTotalPrice}</p>
            </div>

            <div className="w-full border-b border-gray-600 my-2"></div>

            <div className="w-full flex items-center justify-between">
              <p className="text-gray-200 text-xl font-semibold">Total</p>
              <p className="text-gray-200 text-xl font-semibold">
                $ {allTotalPrice + 2.5}
              </p>
            </div>

            {user ? (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg"
                onClick={toggleCartHandler}
              >
                Check Out
              </motion.button>
            ) : (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg"
              >
                Login to check out
              </motion.button>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <img src={EmptyCart} className="w-300" alt="" />
          <p className="text-xl text-textColor font-semibold">
            Add some items to your cart
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default Cart;
