import "./Header.scss";
import gsap from "gsap";
import React, { useEffect } from "react";
import SplitType from "split-type";
import { motion } from "framer-motion";
import Navbar from "../../Navbar/Navbar.js";

const Header = () => {
  
  const myText = new SplitType("#myText");

  gsap.to(".char", {
    y: 0,
    delay: 1,
    stagger: 0.05,
    duration: 0.1,
  });

  return (
    <div className="first-slide vh-100">
      <Navbar />
      <section className="text-center pos-rel clr-white flex column circle aic jc-se">
        <div className="first-child">
          <motion.h1
            id="myText"
            className="w-100 animate-fade-out-down [animation-timeline:scroll()] [animation-range:0px_300px]"
          >
            Organic, plant-based cosmetics.
          </motion.h1>
          <a
            href="#"
            className="explore animate-fade-out-down [animation-timeline:scroll()] [animation-range:0px_300px] flex jcc aic text-center w-15 kurona uppercase no-decoration spacing-1 fstyle-normal fsize-11 m-auto clr-white"
          >
            Explore
          </a>
        </div>
        <div className="second-child animate-fade-out-down [animation-timeline:scroll()] [animation-range:0px_300px]">
          <i className="fas fa-computer-mouse pointer circle"></i>
        </div>
      </section>
    </div>
  );
};

export default Header;
