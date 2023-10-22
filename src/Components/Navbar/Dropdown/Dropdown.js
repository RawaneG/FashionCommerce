import "./Dropdown.scss";
import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { x: 10, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delayChildren: 0.3, staggerChildren: 0.2 },
  },
};
const item = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
const products = [
  {
    id: 1,
    img: "https://get.ru/upload/iblock/56e/aoa6f93l5se6m6lghnszplsfb0w3v2zw.jpg",
    name: "Product 1",
  },
  {
    id: 2,
    img: "https://get.ru/upload/iblock/56e/aoa6f93l5se6m6lghnszplsfb0w3v2zw.jpg",
    name: "Product 2",
  },
  {
    id: 3,
    img: "https://get.ru/upload/iblock/56e/aoa6f93l5se6m6lghnszplsfb0w3v2zw.jpg",
    name: "Product 3",
  },
  {
    id: 4,
    img: "https://get.ru/upload/iblock/56e/aoa6f93l5se6m6lghnszplsfb0w3v2zw.jpg",
    name: "Product 4",
  },
  {
    id: 5,
    img: "https://get.ru/upload/iblock/56e/aoa6f93l5se6m6lghnszplsfb0w3v2zw.jpg",
    name: "Product 5",
  },
];
const Dropdown = () => {
  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      variants={container}
      className="dropdown w-95 h-100 flex jc-se ais wrap bg-white pos-abs"
    >
      {products.map((product) => (
        <motion.li
          variants={item}
          key={product.id}
          className="pointer dropdown-items flex jc-se aic w-30 h-30 no-decoration clr-black"
        >
          <img src={product.img} alt={product.name} />
          <a href="" className="desc">
            {product.name}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Dropdown;
