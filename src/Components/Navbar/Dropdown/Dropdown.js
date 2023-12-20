import "./Dropdown.scss";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const container = {
  hidden: { x: 10, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delayChildren: 0.3, staggerChildren: 0.2 },
  },
};
const item = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
const categories = [
  {
    id: 1,
    href: "/products",
    img: "https://get.ru/upload/iblock/56e/aoa6f93l5se6m6lghnszplsfb0w3v2zw.jpg",
    name: "Category 1",
  },
  {
    id: 2,
    href: "/products",
    img: "/img/Shoes.png",
    name: "Category 2",
  },
  {
    id: 3,
    href: "/products",
    img: "/img/Shoe.png",
    name: "Category 3",
  },
  {
    id: 4,
    href: "/products",
    img: "/img/Shoes.png",
    name: "Category 4",
  },
  {
    id: 5,
    href: "/products",
    img: "/img/Shoe.png",
    name: "Category 5",
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
      {categories.map((category) => (
        <motion.li
          variants={item}
          key={category.id}
          className="pointer dropdown-items flex jc-se aic w-30 h-30 no-decoration clr-black"
        >
          <img src={category.img} alt={category.name} />
          <Link to={category.href} className="desc link--black pos-rel">
            {category.name}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Dropdown;
