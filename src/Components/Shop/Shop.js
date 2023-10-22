import "./Shop.scss";
import React from "react";
import transition from "../../transition.js";
import { motion } from "framer-motion";

const Shop = () => {
  const phrases = ["Découvrez nos ", "variétés de produits"];

  const animate = { opacity: 1, scale: 1 };
  const initial = { opacity: 0, scale: 0 };

  const transition = {
    type: "inertia",
    velocity: 100,
  };

  const transition1 = {
    duration: 0.8,
    delay: 1.1,
    ease: [0, 0.71, 0.2, 1.01],
  };

  return (
    <div className="shop_hero min-vh-100 flex column">
      {/* <div className="categories mx-auto flex justify-evenly w-10/12 h-96">
        <motion.img
          src="/img/Shoes.png"
          className="object-contain border-2 rounded-lg border-black w-2/6 h-auto"
          initial={initial}
          whileInView={animate}
          transition={transition}
        />
        <div className="flex column items-center w-3/6">
          <div className="up flex items-center justify-around w-full h-1/2">
            <motion.img
              src="/img/Shoes.png"
              className="object-contain border-2 rounded-lg w-2/6 h-full border-black"
              initial={initial}
              whileInView={animate}
              transition={transition}
            />
            <motion.img
              src="/img/Shoes.png"
              className="object-contain border-2 rounded-lg w-2/6 h-full border-black"
              initial={initial}
              whileInView={animate}
              transition={transition}
            />
          </div>
          <div className="down flex items-end justify-center w-5/6 h-1/2">
            <motion.img
              src="/img/Shoes.png"
              className="object-contain border-2 rounded-lg w-full h-5/6 border-black"
              initial={initial}
              whileInView={animate}
              transition={transition}
            />
          </div>
        </div>
        <motion.img
          src="/img/Shoes.png"
          className="object-contain border-2 rounded-lg w-1/6 h-auto border-black"
          initial={initial}
          whileInView={animate}
          transition={transition}
        />
      </div> */}
      <motion.div className="w-11/12 flex justify-evenly items-center mx-auto">
        <motion.div className="phrases overflow-hidden flex column items-start justify-between h-50 text-white">
          <MaskText phrases={phrases} />
          <motion.button
            className="mt-12 text-2xl font-extra-bold border-2 border-white rounded py-4 px-6"
            initial={{ y: "100%" }}
            whileInView={{ y: "0%", transition: { delay: 1.4, duration: 1 } }}
          >
            Explorer
          </motion.button>
        </motion.div>
        <motion.div
          className="hero-div flex justify-center pos-rel"
          initial={{ y: 0 }}
          animate={{
            transition: { delay: 0.2, ...transition },
          }}
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
            animate={{
              y: 10,
              transition: { delay: 0.2, ...transition },
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

function MaskText({ phrases }) {
  return phrases.map((phrase, index) => (
    <div key={index} className="lineMask overflow-hidden">
      <motion.h1
        className="mt-12 text-6xl font-extra-bold"
        initial={{ y: "100%" }}
        whileInView={{ y: "0%", transition: { delay: 1.4, duration: 1 } }}
      >
        {phrase}
      </motion.h1>
    </div>
  ));
}

export default transition(Shop);
