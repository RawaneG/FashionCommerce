import React from "react";
import Men from "./Men/Men.js";
import Women from "./Women/Women.js";
import Quote from "./Quote/Quote.js";
import AboutUs from "./AboutUs/AboutUs.js";
import Products from "./Products/Products.js";

const Home = () => {
  return (
    <section className="min-vh-100 bg-white">
      <Products />
      <AboutUs />
      <Quote />
      <Men />
      <Women />
    </section>
  );
};

export default Home;
