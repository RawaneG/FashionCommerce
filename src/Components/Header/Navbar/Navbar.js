import "./Navbar.scss";
import Example from "./Example";
import React, { useState } from "react";
import Dropdown from "./Dropdown/Dropdown.js";

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);

  function handleClick() {
    showMenu === false ? setshowMenu(true) : setshowMenu(false);
  }

  return (
    <nav className="navBar m0 flex aic jc-se clr-white navClicked">
      <div className="w-25 flex jc-sa aic">
        <label className="hamburger pointer flex jcc aic">
          <input type="checkbox" />
          <Example />
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
      <div className="header-icons w-25 flex jc-sa aic">
        <span className="pointer">Panier ( 0 )</span>
        <i className="fas fa-magnifying-glass pointer"></i>
      </div>
      {showMenu ? <Dropdown /> : null}
    </nav>
  );
};

export default Navbar;
