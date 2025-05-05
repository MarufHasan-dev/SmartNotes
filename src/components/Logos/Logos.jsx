import React from "react";
import "./Logos.css";
import Myslider from "../Slider/Slider";

const Logos = () => {
  return (
    <section className="overflow-hidden px-[33px] py-6 relative content-center items-center h-[82px]">
      <Myslider />
      <div className="absolute left-0 top-0 bg-gradient-to-r to-transparent from-[rgb(8,8,8)] w-[50%] h-full"></div>
      <div className="absolute right-0 top-0 bg-gradient-to-l to-transparent from-[rgb(8,8,8)] w-[50%] h-full"></div>
    </section>
  );
};

export default Logos;
