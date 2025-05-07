import React, { useState } from "react";
import "./Pricing.css";
import PricingTile from "../PricingTile/PricingTile";
import { pricingData } from "../../utils/constants";

function Pricing() {
  const [planPeriod, setPlanPeriod] = useState("/ monthly");

  function planPeriodToggle() {
    planPeriod === "/ monthly"
      ? setPlanPeriod("/ yearly")
      : setPlanPeriod("/ monthly");
  }

  return (
    <section className="py-24">
      <div className="text-center">
        <h2 className="font-bold text-accent text-5xl font-[DM_Sans] leading-[120%] mb-6 text-center">
          <span className="text-transparent bg-clip-text bg-linear-86 to-secondary-100 from-secondary-300">
            Pricing
          </span>{" "}
          & Plans
        </h2>
        <p className="font-[DM_Sans] leading-[150%] text-primary-500/70 w-[410px] text-center inline-block">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </div>
      <div className="flex gap-3.5 justify-center py-10 h-[113px] items-center">
        <p className="font-[DM_Sans] text-accent text-[18px] leading-[150%]">
          Monthly
        </p>
        <label className="block relative h-[33px] w-[65px] rounded-[18px] bg-primary-500">
          <input
            className="opacity-0 w-0 h-0 peer"
            type="checkbox"
            name="toggle"
            id="toggle"
          />
          <span
            className="absolute block top-0 left-0 right-0 bottom-0 rounded-3xl before:absolute before:top-[6px] before:left-[6px] before:bg-white before:w-[21px] before:h-[21px] before:rounded-full transition duration-400 before:transition before:duration-400 peer-checked:bg-secondary-200 peer-checked:before:translate-x-[32px]"
            onClick={planPeriodToggle}
          ></span>
        </label>
        <p className="font-[DM_Sans] text-primary-500 text-[18px] leading-[150%]">
          Yearly
        </p>
        <span className="font-[DM_Sans] text-primary-400 text-[14px] leading-[150%] py-[2.5px] px-4 bg-linear-66 to-secondary-100 from-secondary-300 rounded-[13px]">
          Save 25%
        </span>
      </div>
      <div className="flex gap-10 justify-center">
        {pricingData.map((tile, i) => {
          return <PricingTile {...tile} planPeriod={planPeriod} key={i} />;
        })}
      </div>
    </section>
  );
}

export default Pricing;
