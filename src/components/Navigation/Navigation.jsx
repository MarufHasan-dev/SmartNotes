import React from "react";
import "./Navigation.css";
import logo from "../../assets/logo.svg";
import arrow from "../../assets/arrow.svg";

function Navigation() {
  return (
    <nav className="navigation py-[24px] px-[96px] flex box-border border-b border-solid border-[rgba(4,140,129,0.3)] justify-between">
      <div className="navigation_logo-section flex items-center gap-x-2 select-none">
        <img src={logo} alt="logo" className="navigation_logo  " />
        <h3 className="navigation_name font-[DM_Sans] font-bold leading-[140%] text-2xl text-primary-100 m-0">
          SmartNotes
        </h3>
      </div>
      <ul className="navigation_link-section m-0 p-0 flex items-center gap-x-[56px]">
        <li>
          <a href="" className="text-reg navigation_link text-primary-100">
            Features
          </a>
        </li>
        <li>
          <a href="" className="text-reg navigation_link text-primary-100">
            Pricing
          </a>
        </li>
        <li>
          <a href="" className="text-reg navigation_link text-primary-100">
            Support
          </a>
        </li>
      </ul>
      <button className="text-reg navigation_cta w-[167px] h-[56px] flex justify-center items-center gap-x-2 bg-linear-25 from-[rgba(1,115,115,1)] to-[rgba(170,217,209,1)] text-primary-400 rounded-lg cursor-pointer hover:scale-102 transition-transform ease-in-out duration-200">
        Get Started
        <img
          src={arrow}
          alt="arrow"
          className="navigation_arrow w-[24px] h-[24px] border border-primary-300 rounded-[5px]"
        />
      </button>
    </nav>
  );
}

export default Navigation;
