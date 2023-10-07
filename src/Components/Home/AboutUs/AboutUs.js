import "./AboutUs.scss";
import React from "react";

const AboutUs = () => {
  return (
    <section className="aboutUs flex jc-se bg-white">
      <div className="story-text text-center w-40 min-vh-100 flex column aic jcc m0 p0">
        <h3 className="heading-one fweight-400">
          Organic, plant-based cosmetics
        </h3>
        <p>
          Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <a
          href="#"
          className="our-story flex jcc aic text-center kurona uppercase no-decoration spacing-1 fstyle-normal fsize-11 m-auto clr-black"
        >
          Our Story
        </a>
      </div>
      <div className="story-picture min-vh-100 w-30 flex jcc aic">
        <img
          src="https://assets.website-files.com/5c6b1e202671cc709f08d49e/5e31f213f7056175b99fccb1_tall-3-p-500.jpeg"
          className="img-fluid rounded-top w-95 pos-rel"
        />
        <div className="round-circle circle pos-abs"></div>
      </div>
    </section>
  );
};

export default AboutUs;
