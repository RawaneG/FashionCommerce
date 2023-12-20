import "./Shop.scss";
import React from "react";
import { motion } from "framer-motion";
import transition from "../../transition.js";

const Shop = () => {
  const initial = { opacity: 0, scale: 0 };
  const animate = { opacity: 1, scale: 1 };
  const transition = { type: "inertia", velocity: 100 };
  const phrases = ["Découvrez nos ", "variétés de produits"];
  const transition1 = { duration: 0.8, delay: 1.1, ease: [0, 0.71, 0.2, 1.01] };

  return (
    <div className="shop_hero min-vh-100 flex column main-color">
      <motion.div className="w-11/12 flex justify-evenly items-center mx-auto">
        <motion.div className="phrases overflow-hidden flex column items-start justify-between h-50 text-white">
          <MaskText phrases={phrases} />
          <motion.button
            className="mt-12 text-2xl font-extra-bold border-2 border-white rounded py-4 px-6"
            initial={{ y: "100%" }}
            animate={{ y: "0%", transition: { delay: 1.2, duration: 1 } }}
          >
            Explorer
          </motion.button>
        </motion.div>
        <motion.div
          className="hero-div flex justify-center pos-rel"
          initial={{ y: 0 }}
          animate={{ transition: { delay: 0.2, ...transition } }}
        >
          <motion.div
            className="hero-circle rounded-full  w-96 h-96 pos-abs"
            initial={initial}
            animate={animate}
            transition={transition1}
          />
          <motion.img
            src="/img/Shoes.png"
            initial={{ scale: 1 }}
            animate={{ y: 10, transition: { delay: 0.2, ...transition } }}
          />
        </motion.div>
      </motion.div>
      <div className="w-100 h-100">Okay</div>
    </div>
  );
};

export function MaskText({ phrases }) {
  return phrases.map((phrase, index) => (
    <div key={index} className="overflow-hidden">
      <motion.h1
        className="mt-10 text-4xl font-extra-bold"
        initial={{ y: "100%" }}
        animate={{ y: "0%", transition: { delay: 1.2, duration: 1 } }}
      >
        {phrase}
      </motion.h1>
    </div>
  ));
}

export default transition(Shop);
