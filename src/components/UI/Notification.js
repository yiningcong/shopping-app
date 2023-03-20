import React from "react";
import { motion } from "framer-motion";

const Notification = (props) => {
  const message = {
    error: "Error while uploading : Try AGain 🙇",
    success: "Item edited successfully 😊",
    empty: "Please provide all information required 🙇",
  };

  return (
    <section className="fixed z-50 bottom-2 right-2">
      {props.status !== "success" && props.status !== "" && (
        <motion.p
          positionTransition
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          className="w-full p-2 rounded-lg text-center text-lg font-semibold bg-orange-500 text-white"
        >
          {message[props.status]}
        </motion.p>
      )}

      {props.status == "success" && (
        <motion.p
          positionTransition
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          className="w-full p-2 rounded-lg text-center text-lg font-semibold bg-successMsg text-white"
        >
          {message[props.status]}
        </motion.p>
      )}
    </section>
  );
};

export default Notification;
