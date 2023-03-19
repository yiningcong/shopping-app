import React from "react";
import { motion } from "framer-motion";

const Notification = (props) => {
  const message = {
    error: "Error while uploading : Try AGain 🙇",
    success: "Data edited successfully 😊",
    empty: "Please provide all information required 🙇",
  };

  return (
    <section>
      {props.status !== "success" && props.status !== "" && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full p-2 rounded-lg text-center text-lg font-semibold bg-orange-500 text-white"
        >
          {message[props.status]}
        </motion.p>
      )}

      {props.status == "success" && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full p-2 rounded-lg text-center text-lg font-semibold bg-successMsg text-white"
        >
          {message[props.status]}
        </motion.p>
      )}
    </section>
  );
};

export default Notification;
