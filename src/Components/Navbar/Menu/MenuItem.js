import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    display: "flex",
    transition: { y: { stiffness: 1000, velocity: -100 } },
  },
  closed: {
    y: 50,
    opacity: 0,
    display: "none",
    transition: { y: { stiffness: 1000, velocity: -100 } },
  },
};

const links = ["/", "/products", "/about", "/contact"];
const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#4400FF"];
const titles = ["Home", "Nos Produits", "A Propos de nous", "Contact"];

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" style={style} />
      <Link className="text-placeholder" to={links[i]}>
        {titles[i]}
      </Link>
    </motion.li>
  );
};
