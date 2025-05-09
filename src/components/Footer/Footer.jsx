import facebook from "../../assets/footer/facebook.svg";
import linkedin from "../../assets/footer/linkedin.svg";
import twitter from "../../assets/footer/twitter.svg";
import youtube from "../../assets/footer/youtube.svg";
import logo from "../../assets/logo.svg";
import arrow from "../../assets/colored-arrow.svg";

function Footer() {
  return (
    <section className="flex flex-col gap-22 pt-20 border-t border-solid border-[rgba(4,140,129,0.3)] text-accent">
      <div>
        <div>
          <div>
            <img src={logo} alt="logo" />
            <h3>SmartNotes</h3>
          </div>
          <div>
            <input type="email" />
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div></div>
      </div>
      <div className=" bg-secondary-200">
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
