import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import React from "react";

const Cart = (props) => {
  // item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}

  const cartItems = useSelector((state) => state.cart.items);
  // const totalPrice = useSelector((state) => state.cart.totalQuantity);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            //we need key outside of item
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
          // <CartItem
          //   key={item.id}
          //   title={item.name}
          //   quantity={item.quantity}
          //   total={totalPrice}
          //   price={item.price}
          //   onAdd={addItemHandler}
          //   onRemove={removeItemHandler}
          // />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
