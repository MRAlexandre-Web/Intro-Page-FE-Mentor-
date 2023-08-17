import React, { useState } from "react";
import "../index.css";
import logo from "../assets/logo.svg";
import MenuPopup from "./MenuPopup";
import FeatureOption from "./FeatureOption";
import CompanyOption from "./CompanyOption";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const displayMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <nav className="bg-white p-3 text-slate-600 sm:mt-2 sm:flex sm:text-sm">
        <div className="flex justify-between items-center">
          <img src={logo} alt="Snap logo" />
          <svg
            width="32"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
            onClick={displayMenu}
            className=" sm:hidden"
          >
            <g fill="#151515" fillRule="evenodd">
              <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
            </g>
          </svg>
        </div>
        <div className="hidden md:flex items-center justify-between md:flex-grow">
          <div className="flex ml-10 gap-4">
            <FeatureOption />
            <CompanyOption />
            <p>Careers</p>
            <p>About</p>
          </div>
          <div className="flex gap-4 items-center">
            <a href="#">Login</a>
            <button className="border border-black py-2 px-4 rounded-xl">
              Register
            </button>
          </div>
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
