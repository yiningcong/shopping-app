import React, { useEffect, useState } from "react";
import { categories } from "../AddFood/DataInfo";
import { motion } from "framer-motion";
import Products from "../Shop/Products";

const MenuContainer = (props) => {
  return (
    <div>
      <p>hello</p>
      <Products foodItems={props.foodItems} />
    </div>
  );
};
export default MenuContainer;
