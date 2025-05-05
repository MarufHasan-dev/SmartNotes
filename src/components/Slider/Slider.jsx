import Slider from "react-infinite-logo-slider";
import logo1 from "../../assets/LogoBanner/logo1.svg";
import logo2 from "../../assets/LogoBanner/logo2.svg";
import logo3 from "../../assets/LogoBanner/logo3.svg";
import logo4 from "../../assets/LogoBanner/logo4.svg";

const Component = () => {
  return (
    <Slider width="170px" duration={40}>
      <Slider.Slide>
        <img src={logo1} alt="any" className="w-[87px]" />
      </Slider.Slide>
      <Slider.Slide>
        <img src={logo2} alt="any2" className="w-[87px]" />
      </Slider.Slide>
      <Slider.Slide>
        <img src={logo1} alt="any3" className="w-[87px]" />
      </Slider.Slide>
      <Slider.Slide>
        <img src={logo3} alt="any3" className="w-[87px]" />
      </Slider.Slide>
      <Slider.Slide>
        <img src={logo4} alt="any" className="w-[87px]" />
      </Slider.Slide>
      <Slider.Slide>
        <img src={logo2} alt="any2" className="w-[87px]" />
      </Slider.Slide>
      <Slider.Slide>
        <img src={logo4} alt="any3" className="w-[87px]" />
      </Slider.Slide>
      <Slider.Slide>
        <img src={logo3} alt="any3" className="w-[87px]" />
      </Slider.Slide>
    </Slider>
  );
};

export default Component;
