import React, { useState } from "react";
import FeatureOption from "./FeatureOption";
import "../index.css";

const MenuPopup = ({ menuVisible, setMenuVisible }) => {
  // props for state control of menue and close menue
  const [isPopupVisible, setPopupVisible] = useState(true); // close opposite function of menu//

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      {isPopupVisible && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-100"
          onClick={togglePopup}
        />
      )}
      <div
        className={`fixed inset-y-0 right-0 w-1/2 h-screen transform transition-transform duration-300 bg-white p-5 ${
          isPopupVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <svg
            width="26"
            height="26"
            xmlns="http://www.w3.org/2000/svg"
            onClick={togglePopup}
          >
            <g fill="#151515" fillRule="evenodd">
              <path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z" />
              <path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z" />
            </g>
          </svg>
        </div>
        {isPopupVisible ? (
          <>
            <div>
              <ul>
                <li>
                  <FeatureOption />
                </li>
                <li>Company</li>
                <li>Careers</li>
                <li>About</li>
              </ul>
            </div>
            <div>
              <a href="#">Login</a>
              <button>Register</button>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default MenuPopup;
