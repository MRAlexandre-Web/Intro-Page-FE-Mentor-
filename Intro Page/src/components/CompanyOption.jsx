import React, { useState } from "react";

const CompanyOption = () => {
  const [isVisible, setVisible] = useState(false);

  const handleVisability = () => {
    setVisible(!isVisible);
  };

  return (
    <>
      <div className=" flex items-center" onClick={handleVisability}>
        <p className=" mr-2 transition-colors duration-200 ease-in-out hover:text-slate-900">
          Company
        </p>
        {isVisible ? (
          <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
            <path
              stroke="#686868"
              strokeWidth="1.5"
              fill="none"
              d="m1 5 4-4 4 4"
            />
          </svg>
        ) : (
          <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
            <path
              stroke="#686868"
              strokeWidth="1.5"
              fill="none"
              d="m1 1 4 4 4-4"
            />
          </svg>
        )}
      </div>
      {isVisible ? (
        <div className="mx-4 my-3 text-slate-600 sm:absolute sm:left-56 sm:w-28 sm:h-28 sm:mt-9 sm:p-3 sm:pl-5 sm:rounded-xl bg-white sm:shadow-xl">
          <ul>
            <li>History</li>
            <li>Our Team</li>
            <li>Blog</li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default CompanyOption;
