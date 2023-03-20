import React from "react";
import Delivery from "../../img/delivery.png";
import HeroBg from "../../img/heroBg.png";
import I1 from "../../img/i1.png";
import F1 from "../../img/f1.png";
import C3 from "../../img/c3.png";
import Fi1 from "../../img/fi1.png";

const HomeContainer = () => {
  const heroData = [
    {
      id: 111,
      name: "Icecream",
      decp: "Chocolate & vanilla",
      price: "5.25",
      imageSrc: I1,
    },
    {
      id: 222,
      name: "Strawberries",
      decp: "Fresh Strawberries",
      price: "10.25",
      imageSrc: F1,
    },
    {
      id: 333,
      name: "Chicken Kebab",
      decp: "Mixed Kebab Plate",
      price: "8.25",
      imageSrc: C3,
    },
    {
      id: 444,
      name: "Fish Kebab",
      decp: "Mixed Fish Kebab",
      price: "5.25",
      imageSrc: Fi1,
    },
  ];

  return (
    <div className="px-0 w-full mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
      <div className="flex flex-col items-center sm:px-5 md:flex-row">
        <div className="items-start justify-center w-full h-full py-6 px-0 mb-6 md:mb-0 md:w-1/2">
          <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
            <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
              <p className="text-base text-textColor font-semibold">
                Fast Delivery
              </p>
              <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
                <img
                  src={Delivery}
                  className="w-full h-full object-contain"
                  alt="delivery"
                />
              </div>
            </div>

            <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
              Food Delivery in
              <span className="text-textColor text-[3rem] lg:text-[5rem]">
                Your City
              </span>
            </p>

            <p className="pt-12 pb-12 text-base text-textColor text-center md:text-left md:w-[80%]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              velit eaque fugit distinctio est nam voluptatum architecto.
            </p>

            {/* <button
                type="button"
                className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
              >
                Order Now
              </button> */}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="block">
            <img
              src={HeroBg}
              className="object-cover rounded-lg max-h-64 sm:max-h-max btn- w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* other pictures */}
      <p className="pt-10 text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600">
        Our top menues
      </p>
      <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16 ">
        {heroData &&
          heroData.map((n) => (
            <div
              key={n.id}
              className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 md:col-span-4 xl:col-span-3"
            >
              <img
                src={n.imageSrc}
                className=" object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"
              />
              <p
                className="bg-headingColor flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
              rounded-full uppercase inline-block"
              >
                <span className="text-xs text-red-600">$</span> {n.price}
              </p>
              <a className="text-lg font-bold sm:text-xl md:text-2xl">
                {n.name}
              </a>
              <p className="text-sm ">{n.decp}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomeContainer;
