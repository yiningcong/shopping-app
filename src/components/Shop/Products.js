import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import React from "react";

const DUMMY_PRODUCT = [
  {
    id: "p1",
    price: 6,
    title: "My first book",
    description: "My first book I write",
  },
  {
    id: "p2",
    price: 5,
    title: "My second book",
    description: "My second book I write",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
