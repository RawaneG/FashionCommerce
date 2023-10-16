import "./Navbar.scss";
import Menu from "./Menu/Menu.js";
import React, { useState } from "react";
import Dropdown from "./Dropdown/Dropdown.js";
import ShoppingCart from "./ShoppingCart/ShoppingCart.js";

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  const handleClick = () =>
    showMenu === false ? setshowMenu(true) : setshowMenu(false);

  const [shoppingCartOpen, setShoppingCartOpen] = useState(false);
  const handleShoppingCartToggle = () =>
    setShoppingCartOpen((prevOpen) => !prevOpen);

  return (
    <nav className="navBar m0 flex aic jc-se clr-white navClicked">
      <div className="w-25 flex jc-sa aic">
        <label className="hamburger pointer flex jcc aic">
          <input type="checkbox" />
          <Menu />
        </label>
        <span className="flex jc-se aic w-50 pointer" onClick={handleClick}>
          <span>Catalogue</span>
          {!showMenu ? (
            <i className="fas fa-caret-down"></i>
          ) : (
            <i className="fas fa-caret-up"></i>
          )}
        </span>
      </div>
      <div className="w-50 flex jcc aic">
        <span>LOGO</span>
      </div>
      <div
        className="header-icons w-25 flex jc-sa aic"
        onClick={handleShoppingCartToggle}
      >
        <span className="pointer">Panier ( 0 )</span>
        <i className="fas fa-magnifying-glass pointer"></i>
      </div>
      {showMenu ? <Dropdown /> : null}
      <ShoppingCart
        state={shoppingCartOpen}
        toggleShoppingCart={handleShoppingCartToggle}
      />
    </nav>
  );
};

export default Navbar;
