import React, { useEffect, useRef, useState } from "react";

import NotFound from "../../img/NotFound.svg";
import ProductItem from "./ProductItem";

const Products = ({ foodItems }) => {
  return (
    <section className="w-full flex items-center gap-3 my-12 scroll-smooth overflow-x-hidden flex-wrap justify-center">
      {foodItems ? (
        foodItems.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            imageURL={item.imageURL}
          />
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} className="h-340" />
          <p className="text-xl text-headingColor font-semibold my-2">
            Items Not Available
          </p>
        </div>
      )}
    </section>
  );
};

export default Products;
