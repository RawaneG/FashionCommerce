import "./Products.scss";
import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { x: 10, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delayChildren: 0.3, staggerChildren: 0.3 },
  },
};

const item = {
  hidden: { y: -25, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Products = () => {
  return (
    <section>
      <header className="w-90 flex jc-sb aic">
        <h2 className="key-product fweight-400">Produits en Vedette</h2>
        <a
          href="#"
          className="shop-all kurona uppercase no-decoration clr-black fsize-11 fweight-400 fstyle-normal spacing-1"
        >
          Shop all
        </a>
      </header>
      <motion.article
        initial="hidden"
        whileInView="visible"
        variants={container}
        className="w-90 m-auto flex jc-sb"
      >
        <motion.div variants={item}>
          <div className="product">
            <img
              src="../img/product_1.png"
              alt="product_1"
              height={425}
              width={340}
              className="pointer"
            />
            <h4 className="product_name text-center fweight-400 fstyle-normal spacing-1">
              Rejuvenating Cleanser
            </h4>
            <div className="product_price text-center uppercase kurona fsize-11 fweight-400 fstyle-normal spacing-1">
              CFA 100.00 XOF
            </div>
          </div>
        </motion.div>
        <motion.div variants={item}>
          <div className="product">
            <img
              src="../img/product_2.png"
              alt="product_2"
              height={425}
              width={340}
              className="pointer"
            />
            <h4 className="product_name text-center fweight-400 fstyle-normal spacing-1">
              Rejuvenating Cleanser
            </h4>
            <div className="product_price text-center uppercase kurona fsize-11 fweight-400 fstyle-normal spacing-1">
              CFA 100.00 XOF
            </div>
          </div>
        </motion.div>
        <motion.div variants={item}>
          <div className="product">
            <img
              src="../img/product_3.png"
              alt="product_3"
              height={425}
              width={340}
              className="pointer"
            />
            <h4 className="product_name text-center fweight-400 fstyle-normal spacing-1">
              Rejuvenating Cleanser
            </h4>
            <div className="product_price text-center uppercase kurona fsize-11 fweight-400 fstyle-normal spacing-1">
              CFA 100.00 XOF
            </div>
          </div>
        </motion.div>
      </motion.article>
    </section>
  );
};

export default Products;
