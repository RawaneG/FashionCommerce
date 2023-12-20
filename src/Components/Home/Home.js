import React from "react";
import Quote from "./Quote/Quote.js";
import Social from "./Social/Social.js";
import transition from "../../transition.js";
import Header from "./Header/Header.js";
import AboutUs from "./AboutUs/AboutUs.js";
import Products from "./Products/Products.js";

const Home = () => {
  return (
    <section className="min-vh-100 bg-white">
      <Header />
      <Products />
      <AboutUs />
      <Quote />
      <Social />
    </section>
  );
};

export default transition(Home);
