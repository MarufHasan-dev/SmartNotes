import check from "../../assets/check.png";
import LightArrow from "../../assets/colored-arrow.svg";
import DarkArrow from "../../assets/arrow.svg";

function PricingTile({
  planPeriod,
  darkMode,
  plan,
  planIcon,
  planPrice,
  bullets,
  CallToAction,
}) {
  const bg = darkMode ? "bg-primary-400" : "bg-primary-50";
  const price =
    planPeriod === "/ monthly" ? `$${planPrice}` : `$${planPrice * 12 * 0.75}`;

  return (
    <div
      className={`${bg} basis-[357px] font-[DM_Sans] text-accent flex flex-col gap-6 py-10 px-8 rounded-[10px] border-2 border-secondary-200`}
    >
      <div className="flex gap-2 items-center">
        <img
          className="box-border border-[1px] border-secondary-200/60 rounded-[4px] p-[2px] w-[25px] h-[25px]"
          src={planIcon}
          alt="plan icon"
        />
        <p className="text-secondary-200 text-sm">{plan}</p>
      </div>
      <div className="flex items-baseline gap-1">
        <h2
          className={`${
            darkMode ? "text-primary-50" : "text-primary-400"
          } text-5xl leading-[120%] font-bold`}
        >
          {planPrice ? price : "Custom"}
        </h2>
        {planPrice ? (
          <p className={darkMode ? "text-secondary-200" : "text-[#333333]"}>
            {planPeriod === "/ monthly" ? "/ month" : "/ year"}
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="flex gap-1.5 flex-col">
        {bullets.map((bullet, i) => {
          return (
            <div className="flex gap-2 items-center" key={i}>
              <img className="w-[17px]" src={check} alt="check" />
              <p
                className={`${
                  darkMode ? "text-primary-500" : "text-[#333333]"
                }`}
              >
                {bullet}
              </p>
            </div>
          );
        })}
      </div>
      <div>
        <button
          className={`w-full h-[60px] flex justify-center items-center gap-x-2 text-primary-400 rounded-lg cursor-pointer hover:scale-105 transition-transform ease-in-out duration-200 border-[1px] border-secondary-200 ${
            darkMode
              ? "bg-linear-25 from-[rgba(1,115,115,1)] to-[rgba(170,217,209,1)]"
              : "bg-accent"
          }`}
        >
          <span className="text-primary-400 text-lg">{CallToAction}</span>
          <img
            className={`${
              darkMode ? "border-primary-300/50" : "border-secondary-200/80"
            } w-[24px] h-[24px] border rounded-[5px]`}
            src={darkMode ? DarkArrow : LightArrow}
            alt="arrow"
          />
        </button>
        <p className="mt-2 text-center text-xs leading-[150%] text-primary-200/70">
          No credit card required
        </p>
      </div>
    </div>
  );
}

export default PricingTile;
