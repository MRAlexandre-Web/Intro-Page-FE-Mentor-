import React, { useState } from "react";
import "../index.css";
import logo from "../assets/logo.svg";
import MenuPopup from "./MenuPopup";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const displayMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <nav className="bg-white p-3">
        <div className="flex justify-between">
          <img src={logo} alt="Snap logo" />
          <svg
            width="32"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
            onClick={displayMenu}
          >
            <g fill="#151515" fillRule="evenodd">
              <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
            </g>
          </svg>
        </div>
      </nav>
      {menuVisible ? (
        <div className=" absolute z-50">
          <MenuPopup
            menuVisible={menuVisible}
            setMenuVisible={setMenuVisible}
          />
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
