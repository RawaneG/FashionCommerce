import "./AboutUs.scss";
import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutUs = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const bottomShadowValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "0%"]
  );

  const imageValue = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);

  const topShadowValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-25%", "100%"]
  );

  return (
    <section className="aboutUs flex jc-se bg-white" ref={containerRef}>
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
      <div className="img-container">
        <motion.div className="img-inner" style={{ translateX: imageValue }}>
          <motion.div
            className="bottom-shadow"
            style={{ translateX: bottomShadowValue }}
          />
          <div className="flex items-center justify-center">
            <motion.img
              src="https://assets.website-files.com/5c6b1e202671cc709f08d49e/5e31f213f7056175b99fccb1_tall-3-p-500.jpeg"
              className="img-fluid rounded-top w-95 pos-rel"
              alt="a green plant"
            />
            <motion.div className="round-circle circle pos-abs" />
          </div>
          <motion.div
            className="top-shadow"
            style={{ translateX: topShadowValue }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
