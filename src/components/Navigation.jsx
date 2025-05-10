import logo from "../assets/logo.svg";
import arrow from "../assets/arrow.svg";

function Navigation() {
  return (
    <nav className="mx-auto max-w-[1440px] navigation py-[24px] px-[96px] flex box-border justify-between">
      <div className="navigation_logo-section flex items-center gap-x-2 select-none">
        <img
          src={logo}
          alt="logo"
          className="navigation_logo pointer-events-none"
        />
        <h3 className="navigation_name font-dm font-bold leading-[140%] text-2xl text-primary-100 m-0">
          SmartNotes
        </h3>
      </div>
      <ul className="navigation_link-section m-0 p-0 flex items-center gap-x-[56px]">
        <li>
          <a
            href="#features"
            className="text-primary-100 hover:text-secondary-200 transition-colors"
          >
            Features
          </a>
        </li>
        <li>
          <a
            href="#pricing"
            className="text-primary-100 hover:text-secondary-200 transition-colors"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="#support"
            className="text-primary-100 hover:text-secondary-200 transition-colors"
          >
            Support
          </a>
        </li>
      </ul>
      <button className="w-[167px] h-[56px] flex justify-center items-center gap-x-2 bg-linear-25 from-[rgba(1,115,115,1)] to-[rgba(170,217,209,1)] text-primary-400 rounded-lg cursor-pointer hover:scale-105 transition-transform ease-in-out duration-200">
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
