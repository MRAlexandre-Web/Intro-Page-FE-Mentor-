import React, { useState } from "react";

const MenuPopup = () => {
  const [isPopupVisible, setPopupVisible] = useState(true); // close opposite function of menu//

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div>
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
      {/* Terciary to show items of menu, will contain FeatureOption and CompanyOption*/}
      {/* Div containing login and Register button */}
    </div>
  );
};

export default MenuPopup;
