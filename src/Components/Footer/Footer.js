import "./Footer.scss";
import React from "react";

const Footer = () => {
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
  return (
    <footer className="bg-white min-vh-100">
      <article className="text-center fweight-bold">LOGO</article>
      <section className="lists m-auto w-80 flex jc-se aic text-center">
        {footerTitles.map((title) => {
          return (
            <div key={title.id}>
              <h6 className="kurona fsize-11 fweight-400 spacing uppercase">
                {title.name}
              </h6>
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
        <div className="intel w-50 text-center flex jc-se aic">
          <div>
            Made by{" "}
            <b className="pos-rel link--black cursor-pointer">Rawane Sow</b>
          </div>
        </div>
        {socials.map((social) => {
          return (
            <div
              key={social.id}
              className="social w-50 text-center flex jc-se aic"
            >
              <div className="twitter pos-rel link--black cursor-pointer">
                {social.name}
              </div>
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
