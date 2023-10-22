import React from "react";
import Men from "./Men/Men.js";
import Women from "./Women/Women.js";
import Quote from "./Quote/Quote.js";
import Header from "./Header/Header.js";
import Social from "./Social/Social.js";
import AboutUs from "./AboutUs/AboutUs.js";
import transition from "../../transition.js";
import Products from "./Products/Products.js";

const Home = () => {
  return (
    <section className="min-vh-100 bg-white">
      <Header />
      <Products />
      <AboutUs />
      <Quote />
      <Men />
      <Women />
      <Social />
    </section>
  );
};

export default transition(Home);
