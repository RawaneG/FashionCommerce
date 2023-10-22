import "./App.scss";
import React from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation, Routes, Route } from "react-router-dom";
import { Footer, Home, Shop, Navbar } from "./Components";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? null : <Navbar />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Shop />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
