import ctaAbstract from "../assets/cta-shapes.png";
import arrow from "../assets/arrow.svg";
import fullCircleGradient from "../assets/full-circle-gradient.png";

function CTA() {
  return (
    <section className="relative py-20 text-accent flex flex-row justify-center gap-12">
      <div className="max-w-[500px] content-center">
        <h2 className="font-bold text-accent text-5xl font-dm leading-[120%] mb-4">
          Unlock the Full Potential of{" "}
          <span className="text-transparent bg-clip-text bg-linear-64 to-secondary-100 from-secondary-300">
            SmartNotes
          </span>
        </h2>
        <p className="font-dm leading-[150%] text-primary-500 text-base mb-10">
          Ready to streamline your workflow and boost your productivity? Start
          your free trial of SmartNotes today and experience the power of smart
          note-taking.
        </p>
        <button className="w-[266px] h-16 flex justify-center items-center gap-x-4 bg-linear-25 from-[rgba(1,115,115,1)] to-[rgba(170,217,209,1)] text-primary-400 rounded-lg cursor-pointer hover:scale-105 transition-transform ease-in-out duration-200">
          <span className="font-dm font-bold text-lg leading-[20%] text-primary-400">
            Sign Up for Free
          </span>
          <img
            className="navigation_arrow w-[32px] h-[32px] border border-primary-300 rounded-[5px]"
            src={arrow}
            alt="arrow"
          />
        </button>
      </div>
      <img className="max-w-[375px]" src={ctaAbstract} alt="abstrack" />
      <img
        className="opacity-40 absolute -top-40 left-0 ov -z-10"
        src={fullCircleGradient}
        alt="circle gradient"
      />
    </section>
  );
}

export default CTA;
