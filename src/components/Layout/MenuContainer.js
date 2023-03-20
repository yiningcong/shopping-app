import React, { useEffect, useState } from "react";
import { categories } from "../AddFood/DataInfo";
import { motion } from "framer-motion";
import Products from "../Shop/Products";
import { IoFastFood } from "react-icons/io5";
import { getAllFoodItems } from "../../store/item-actions";
import Loader from "../UI/Loader";

const MenuContainer = (props) => {
  const [filter, setFilter] = useState("pizza");
  const [isLoading, setIsLoading] = useState(false);
  const [foodItems, setFoodItems] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    await getAllFoodItems().then((data) => {
      setFoodItems(data);
      console.log(foodItems);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section
      className="px-0 w-full mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl"
      id="menu"
    >
      <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
        Our Hot Dishes
      </p>

      <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
        {categories &&
          categories.map((category) => (
            <motion.div
              whileTap={{ scale: 0.75 }}
              key={category.id}
              className={`group ${
                filter === category.urlParamName ? "bg-cartNumBg" : "bg-card"
              } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg `}
              onClick={() => setFilter(category.urlParamName)}
            >
              <div
                className={`w-10 h-10 rounded-full shadow-lg ${
                  filter === category.urlParamName ? "bg-white" : "bg-cartNumBg"
                } group-hover:bg-white flex items-center justify-center`}
              >
                <IoFastFood
                  className={`${
                    filter === category.urlParamName
                      ? "text-textColor"
                      : "text-white"
                  } group-hover:text-textColor text-lg`}
                />
              </div>

              <p
                className={`text-sm ${
                  filter === category.urlParamName
                    ? "text-white"
                    : "text-textColor"
                } group-hover:text-white`}
              >
                {category.name}
              </p>
            </motion.div>
          ))}
      </div>

      <div className="w-full">
        <Products
          isLoading={isLoading}
          foodItems={foodItems?.filter((n) => n.category == filter)}
        />
      </div>
    </section>
  );
};
export default MenuContainer;
