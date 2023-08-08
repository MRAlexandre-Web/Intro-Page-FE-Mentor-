import React from "react";
import MobileImg from "../assets/images/image-hero-mobile.png";
import Footer from "./Footer";
import "../index.css";

const Body = () => {
  return (
    <>
      <img src={MobileImg} alt="Hero image" className="mt-2" />
      <div className=" text-center mt-9 flex flex-col gap-3">
        <h1 className="text-3xl font-bold">Make remote work</h1>
        <p className="font-medium text-zinc-500">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="m-auto my-4 bg-black text-white p-3 w-36 rounded-xl hover:bg-white hover:text-black hover:border hover:border-black transition-all duration-300">
          Learn more
        </button>
        <Footer />
      </div>
    </>
  );
};

export default Body;
