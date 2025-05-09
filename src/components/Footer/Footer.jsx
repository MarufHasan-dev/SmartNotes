import facebook from "../../assets/footer/facebook.svg";
import linkedin from "../../assets/footer/linkedin.svg";
import twitter from "../../assets/footer/twitter.svg";
import youtube from "../../assets/footer/youtube.svg";
import logo from "../../assets/logo.svg";
import arrow from "../../assets/colored-arrow.svg";

function Footer() {
  return (
    <section className="flex flex-col gap-22 pt-20 border-t border-solid border-[rgba(4,140,129,0.3)] text-accent items-center">
      <div className="max-w-[1184px] px-4 w-full flex flex-row gap-25 justify-between items-center">
        <div className="flex flex-col justify-between h-40">
          <div className="flex flex-row gap-2 select-none">
            <img
              className="w-9.5 h-9.5 pointer-events-none"
              src={logo}
              alt="logo"
            />
            <h3 className="font-[DM_Sans] font-bold text-3xl text-accent">
              SmartNotes
            </h3>
          </div>
          <div className="relative">
            <input
              className="bg-accent h-12 w-[290px] border-1 border-secondary-200 rounded-lg text-[#333333] text-sm leading-[150%] font-[DM_Sans] pl-4 pr-15"
              type="email"
              placeholder="your email here"
            />
            <button className="cursor-pointer absolute right-4 top-2 transition-transform hover:scale-110">
              <img
                className="border-secondary-200/70 w-[32px] h-[32px] border rounded-lg"
                src={arrow}
                alt="arrow"
              />
            </button>
          </div>
        </div>
        <div className="flex flex-row max-w-[762px] justify-between w-full flex-wrap">
          <div className="flex flex-col gap-0.5">
            <h5 className="font-[DM_Sans] font-bold text-accent leading-[150%] text-lg pb-0.5">
              Product
            </h5>
            <a
              className="font-[DM_Sans] text-base leading-[150%] text-primary-500 transition transition-color hover:text-secondary-200"
              href="#"
            >
              About
            </a>
            <a
              className="font-[DM_Sans] text-base leading-[150%] text-primary-500 transition transition-color hover:text-secondary-200"
              href="#"
            >
              Features
            </a>
            <a
              className="font-[DM_Sans] text-base leading-[150%] text-primary-500 transition transition-color hover:text-secondary-200"
              href="#"
            >
              Pricing
            </a>
            <a
              className="font-[DM_Sans] text-base leading-[150%] text-primary-500 transition transition-color hover:text-secondary-200"
              href="#"
            >
              Integrations
            </a>
            <a
              className="font-[DM_Sans] text-base leading-[150%] text-primary-500 transition transition-color hover:text-secondary-200"
              href="#"
            >
              FAQs
            </a>
          </div>
          <div className="flex flex-col gap-0.5">
            <h5 className="font-[DM_Sans] font-bold text-accent leading-[150%] text-lg pb-1">
              Company
            </h5>
            <a
              className="font-[DM_Sans] text-base leading-[150%] text-primary-500 transition transition-color hover:text-secondary-200"
              href="#"
            >
              Our Story
            </a>
            <a
              className="font-[DM_Sans] text-base leading-[150%] text-primary-500 transition transition-color hover:text-secondary-200"
              href="#"
            >
              Team
            </a>
            <a
              className="font-[DM_Sans] text-base leading-[150%] text-primary-500 transition transition-color hover:text-secondary-200"
              href="#"
            >
              Careers
            </a>
            <a
              className="font-[DM_Sans] text-base leading-[150%] text-primary-500 transition transition-color hover:text-secondary-200"
              href="#"
            >
              Press
            </a>
            <a
              className="font-[DM_Sans] text-base leading-[150%] text-primary-500 transition transition-color hover:text-secondary-200"
              href="#"
            >
              Contect Us
            </a>
          </div>
          <div className="flex flex-col gap-0.5">
            <h5 className="font-[DM_Sans] font-bold text-accent leading-[150%] text-lg pb-1">
              Resources
            </h5>
            <a
              className="font-[DM_Sans] text-base leading-[150%] text-primary-500 transition transition-color hover:text-secondary-200"
              href="#"
            >
              Blog
            </a>
            <a
              className="font-[DM_Sans] text-base leading-[150%] text-primary-500 transition transition-color hover:text-secondary-200"
              href="#"
            >
              Webinars
            </a>
            <a
              className="font-[DM_Sans] text-base leading-[150%] text-primary-500 transition transition-color hover:text-secondary-200"
              href="#"
            >
              Case Studies
            </a>
            <a
              className="font-[DM_Sans] text-base leading-[150%] text-primary-500 transition transition-color hover:text-secondary-200"
              href="#"
            >
              Templates
            </a>
            <a
              className="font-[DM_Sans] text-base leading-[150%] text-primary-500 transition transition-color hover:text-secondary-200"
              href="#"
            >
              Help Center
            </a>
          </div>
          <div className="flex flex-col gap-0.5">
            <h5 className="font-[DM_Sans] font-bold text-accent leading-[150%] text-lg pb-1">
              Legal
            </h5>
            <a
              className="font-[DM_Sans] text-base leading-[150%] text-primary-500 transition transition-color hover:text-secondary-200"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="font-[DM_Sans] text-base leading-[150%] text-primary-500 transition transition-color hover:text-secondary-200"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="font-[DM_Sans] text-base leading-[150%] text-primary-500 transition transition-color hover:text-secondary-200"
              href="#"
            >
              Cookie Policy
            </a>
            <a
              className="font-[DM_Sans] text-base leading-[150%] text-primary-500 transition transition-color hover:text-secondary-200"
              href="#"
            >
              Acceptable Use
            </a>
            <a
              className="font-[DM_Sans] text-base leading-[150%] text-primary-500 transition transition-color hover:text-secondary-200"
              href="#"
            >
              Refund Policy
            </a>
          </div>
        </div>
      </div>
      <div className="bg-secondary-200 w-full">
        <div className="flex flex-row h-19 justify-between items-center max-w-[1152px]  px-2 mx-auto">
          <p className="font-[DM_Sans] text-primary-400 text-sm leading-[150%]">
            @2025 SmartNotesI. All Rights Reserved.{" "}
            <a
              className="underline"
              href="https://github.com/MarufHasan-dev"
              target="blank"
            >
              @marufhasan-dev
            </a>
          </p>
          <div
            className="flex
          flex-row gap-2.5"
          >
            <a href="#">
              <img className="w-10 h-10" src={facebook} alt="facebook" />
            </a>
            <a href="#">
              <img className="w-10 h-10" src={linkedin} alt="linkedin" />
            </a>
            <a href="#">
              <img className="w-10 h-10" src={twitter} alt="twitter" />
            </a>
            <a href="#">
              <img className="w-10 h-10" src={youtube} alt="youtube" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
