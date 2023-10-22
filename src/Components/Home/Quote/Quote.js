import "./Quote.scss";
import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Quote = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const bottomShadowValue = useTransform(
    scrollYProgress,
    [1, 0],
    ["200%", "0%"]
  );

  const imageValue = useTransform(scrollYProgress, [1, 0], ["0%", "200%"]);

  const topShadowValue = useTransform(scrollYProgress, [1, 0], ["200%", "0%"]);

  return (
    <section className="quote flex jc-se aic clr-white" ref={containerRef}>
      <div className="img-container min-vh-100 w-30">
        <motion.div className="img-inner" style={{ translateX: imageValue }}>
          <motion.div
            className="bottom-shadow"
            style={{ translateX: bottomShadowValue }}
          />
          <div className="flex items-center justify-center">
            <motion.img
              src="https://assets.website-files.com/5c6b1e202671cc709f08d49e/5e31f2132639f8834004accf_tall-1.jpg"
              className="img-fluid rounded-top w-100 pos-rel"
              alt="a green plant"
            />
            <motion.div className="round-circle-left circle pos-abs" />
          </div>
          <motion.div
            className="top-shadow"
            style={{ translateX: topShadowValue }}
          />
        </motion.div>
      </div>
      <div className="quote-text text-center w-45 min-vh-100 flex column aic jcc m0 p0">
        <blockquote className="p0">
          “Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain. Wash your spirit clean.”
        </blockquote>
        <div className="author uppercase fweight-400 fstyle-normal fsize-11 spacing-1 kurona">
          – john muir
        </div>
      </div>
    </section>
  );
};

export default Quote;
