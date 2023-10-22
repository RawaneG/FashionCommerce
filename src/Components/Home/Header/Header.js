import "./Header.scss";
import React from "react";
import Navbar from "../../Navbar/Navbar.js";

const Header = () => {
  return (
    <div className="first-slide vh-100">
      <Navbar />
      <section className="text-center pos-rel clr-white flex column circle aic jc-se">
        <div className="first-child">
          <h1 className="w-100 animate-fade-out-down [animation-timeline:scroll()] [animation-range:0px_300px]">
            Organic, plant-based cosmetics.
          </h1>
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
