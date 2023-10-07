import "./Dropdown.scss";
import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { x: 10, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delayChildren: 0.3 },
  },
};

const item = {
  hidden: { x: 25, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const Dropdown = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="dropdown w-95 h-100 flex jc-se ais wrap bg-white pos-abs"
    >
      <motion.a
        variants={item}
        className="pointer dropdown-items flex jc-se aic w-30 h-30 no-decoration clr-black"
      >
        <img src="https://get.ru/upload/iblock/56e/aoa6f93l5se6m6lghnszplsfb0w3v2zw.jpg" />
        <h5 className="desc">Tous les produits</h5>
      </motion.a>
      <motion.a
        variants={item}
        className="pointer dropdown-items flex jc-se aic w-30 h-30 no-decoration clr-black"
      >
        <img src="https://get.ru/upload/iblock/56e/aoa6f93l5se6m6lghnszplsfb0w3v2zw.jpg" />
        <h5 className="desc">Tous les produits</h5>
      </motion.a>
      <motion.a
        variants={item}
        className="pointer dropdown-items flex jc-se aic w-30 h-30 no-decoration clr-black"
      >
        <img src="https://get.ru/upload/iblock/56e/aoa6f93l5se6m6lghnszplsfb0w3v2zw.jpg" />
        <h5 className="desc">Tous les produits</h5>
      </motion.a>
      <motion.a
        variants={item}
        className="pointer dropdown-items flex jc-se aic w-30 h-30 no-decoration clr-black"
      >
        <img src="https://get.ru/upload/iblock/56e/aoa6f93l5se6m6lghnszplsfb0w3v2zw.jpg" />
        <h5 className="desc">Tous les produits</h5>
      </motion.a>
    </motion.div>
  );
};

export default Dropdown;
