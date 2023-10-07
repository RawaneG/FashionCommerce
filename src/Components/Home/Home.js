import React from "react";
import Quote from "./Quote/Quote.js";
import AboutUs from "./AboutUs/AboutUs.js";
import Products from "./Products/Products.js";
import Categories from "./Categories/Categories.js";

const Home = () => {
  return (
    <section className="min-vh-100 bg-white">
      <Products />
      <AboutUs />
      <Quote />
      <Categories />
    </section>
  );
};

export default Home;
