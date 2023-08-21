import React from "react";
import MobileImg from "../assets/images/image-hero-mobile.png";
import DeskImg from "../assets/images/image-hero-desktop.png";
import Footer from "./Footer";
import "../index.css";

const Body = () => {
  return (
    <div className="sm:flex flex-row-reverse justify-center sm:mt-8 lg:w-3/4 lg:h-1/2 m-auto">
      <img src={MobileImg} alt="Hero image" className="mt-2 md:hidden" />
      <img
        src={DeskImg}
        alt="Hero image"
        className="mt-2 hidden md:block w-2/5 h-2/5 lg:h-1/3"
      />
      <div className=" text-center mt-9 flex flex-col gap-3 pb-5 sm:justify-center sm:gap-10 sm:text-left sm:w-1/2 sm:mr-5 sm:pt-1 lg:pt-10">
        <h1 className="text-3xl font-bold md:hidden">Make remote work</h1>
        <h1 className=" hidden md:block font-bold text-5xl lg:text-6xl">
          Make
          <br />
          remote work
        </h1>
        <p className="font-medium w-screen mx-1 text-zinc-500 sm:w-full  lg:w-2/3">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="m-auto sm:ml-0 my-4 bg-black text-white p-3 w-36 rounded-xl hover:bg-white hover:text-black hover:border hover:border-black transition-all duration-300">
          Learn more
        </button>
        <Footer />
      </div>
    </div>
  );
};

export default Body;
