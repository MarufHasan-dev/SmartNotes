import React from "react";
import "./Hero.css";
import arrow from "../../assets/arrow.svg";
import abstractShapes from "../../assets/abstract-shapes.png";

function Hero() {
  return (
    <section className="hero flex justify-between gap-4 max-w-[1440px] h-[590px] px-[152px] py-[54px]">
      <div className="max-w-[636px] flex justify-center flex-col">
        <h1 className="font-bold text-accent text-[59px] font-[DM_Sans] leading-[106%] tracking-[-3px] mb-4">
          <span className="text-transparent bg-clip-text bg-linear-64 from-secondary-100 to-secondary-300">
            Intelligent {""}
          </span>
          cloud-based {""}
          <span className="text-transparent bg-clip-text bg-linear-64 from-secondary-100 to-secondary-300">
            note-taking {""}
          </span>
          and collaboration tool
        </h1>
        <p className="text-primary-500 font-[DM_Sans] leading-[150%] mb-[50px]">
          Experience the power of smart note-taking and transform the way you
          work today.
        </p>
        <div className="relative w-[434px]">
          <input
            className="bg-accent text-[#333333] font-[DM_Sans] max-w-[434px] w-full h-[68px] rounded-lg py-[28px] px-6 placeholder:text-primary-300"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
          <button className="text-reg absolute top-1.5 right-1.5 text-reg navigation_cta w-[135px] h-[56px] flex justify-center items-center gap-x-2 bg-linear-25 from-[rgba(1,115,115,1)] to-[rgba(170,217,209,1)] text-primary-400 rounded-lg cursor-pointer hover:scale-102 transition-transform ease-in-out duration-200">
            Sing up{" "}
            <img
              className="w-[24px] h-[24px] border border-primary-300 rounded-[5px]"
              src={arrow}
              alt="arrow icon"
            />
          </button>
        </div>
      </div>
      <div className="content-center">
        <img src={abstractShapes} alt="abstract shapes" />
      </div>
    </section>
  );
}

export default Hero;
