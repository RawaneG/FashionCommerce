import "./Footer.scss";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = () => {
  const footer = useRef(null);

  const footerTitles = [
    { id: 1, name: "Hair", links: ["Body", "Hair", "Hair", "Products"] },
    { id: 2, name: "Info", links: ["Body", "Hair", "Hair", "Products"] },
    { id: 3, name: "Contact", links: ["Body", "Hair", "Hair", "Products"] },
  ];
  const socials = [
    { id: 1, icon: "fab fa-twitter", name: "Twitter" },
    { id: 2, icon: "fab fa-whatsapp", name: "Whatsapp" },
    { id: 3, icon: "fab fa-facebook", name: "Facebook" },
    { id: 4, icon: "fab fa-instagram", name: "Instagram" },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(footer.current, {
      y: 0,
      scrollTrigger: {
        trigger: ".body",
        start: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <footer className="footer bg-white min-vh-100" ref={footer}>
      <article className="text-center fweight-bold">LOGO</article>
      <section className="lists m-auto w-80 flex jc-se aic text-center">
        {footerTitles.map((title) => {
          return (
            <div key={title.id}>
              <motion.h6 className="kurona fsize-11 fweight-400 spacing uppercase">
                {title.name}
              </motion.h6>
              {title.links.map((link, index) => {
                return (
                  <a
                    href="#"
                    key={index}
                    className="footer-link no-decoration d-block clr-black pos-rel link--black"
                  >
                    {link}
                  </a>
                );
              })}
            </div>
          );
        })}
      </section>
      <div className="actual-footer flex jc-se aic">
        {socials.map((social) => {
          return (
            <div
              key={social.id}
              className="social w-50 text-center flex jc-se aic"
            >
              <div className="twitter cursor-pointer">
                <i className={social.icon}></i>
              </div>
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
