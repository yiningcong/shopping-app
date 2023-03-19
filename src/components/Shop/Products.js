import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import NotFound from "../../img/NotFound.svg";

// const data = {
//   id: `${Date.now()}`,
//   title: title,
//   imageURL: imageAsset,
//   category: category,
//   qty: 1,
//   price: price,
// };

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {props.foodItems.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            imageURL={item.imageURL}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
