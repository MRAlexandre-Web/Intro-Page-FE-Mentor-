import React, { useState } from "react";
import "../index.css";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white p-3">
        <div className="flex justify-between">
          <img src={logo} alt="Snap logo" />
          <svg width="32" height="18" xmlns="http://www.w3.org/2000/svg">
            <g fill="#151515" fillRule="evenodd">
              <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
            </g>
          </svg>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
