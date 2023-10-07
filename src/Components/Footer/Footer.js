import "./Footer.scss";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white min-vh-100">
      <article className="text-center fweight-bold">LOGO</article>
      <section className="lists m-auto w-80 flex jc-se aic text-center">
        <div className="store">
          <h6 className="kurona fsize-11 fweight-400 spacing uppercase">
            Store
          </h6>
          <a href="#" className="footer-link no-decoration d-block clr-black">
            All Products
          </a>
          <a href="#" className="footer-link no-decoration d-block clr-black">
            Body
          </a>
          <a href="#" className="footer-link no-decoration d-block clr-black">
            Hair
          </a>
          <a href="#" className="footer-link no-decoration d-block clr-black">
            Hands
          </a>
        </div>
        <div className="contact">
          <h6 className="kurona fsize-11 fweight-400 spacing uppercase">
            Contact
          </h6>
          <a href="#" className="footer-link no-decoration d-block clr-black">
            All Products
          </a>
          <a href="#" className="footer-link no-decoration d-block clr-black">
            Body
          </a>
          <a href="#" className="footer-link no-decoration d-block clr-black">
            Hair
          </a>
          <a href="#" className="footer-link no-decoration d-block clr-black">
            Hands
          </a>
        </div>
        <div className="info">
          <h6 className="kurona fsize-11 fweight-400 spacing uppercase">
            Info
          </h6>
          <a href="#" className="footer-link no-decoration d-block clr-black">
            All Products
          </a>
          <a href="#" className="footer-link no-decoration d-block clr-black">
            Body
          </a>
          <a href="#" className="footer-link no-decoration d-block clr-black">
            Hair
          </a>
          <a href="#" className="footer-link no-decoration d-block clr-black">
            Hands
          </a>
        </div>
      </section>
      <div className="actual-footer flex jc-se aic">
        <div className="intel w-50 text-center flex jc-se aic">
          <div>@ Copyright</div>
          <div>
            Made by <b>Rawane Sow</b>
          </div>
        </div>
        <div className="social w-50 text-center flex jc-se aic">
          <div className="twitter">Twitter</div>
          <div className="whatsapp">Whatsapp</div>
          <div className="instagram">Facebook</div>
          <div className="instagram">Instagram</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
