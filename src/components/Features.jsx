import { features } from "../utils/constants";

function Features() {
  return (
    <section id="features" className="py-[70px]">
      <div className="text-center pb-11">
        <h2 className="font-bold text-accent text-5xl font-dm leading-[120%] mb-6 text-center">
          Discover the Power of{" "}
          <span className="text-transparent bg-clip-text bg-linear-86 to-secondary-100 from-secondary-300">
            SmartNotes
          </span>
        </h2>
        <p className="font-dm leading-[150%] text-primary-500 w-[410px] text-center inline-block">
          SmartNotes is packed with innovative features designed to
          revolutionize the way you take notes, collaborate with others, and
          stay organized.
        </p>
      </div>
      <div className="text-accent mt-11 relative grid place-content-center grid-cols-4 gap-y-5 gap-x-6 max-w-[1152px] mx-auto">
        {features.map((obj, i) => {
          return (
            <div
              className={`p-8 border border-[rgba(4,140,128,0.5)] rounded-xl ${
                i <= 1 ? "col-span-2" : "col-span-1"
              }`}
              key={i}
            >
              <img
                className="w-8 h-8 border border-[rgba(4,140,128,0.5)] rounded-[5px] p-1.5 mb-5"
                src={obj.image}
                alt={obj.heading}
              />
              <p className="font-dm font-bold text-xl leading-[150%] text-accent mb-1.5">
                {obj.heading}
              </p>
              <p className="font-dm leading-[150%] text-primary-500">
                {obj.description}
              </p>
            </div>
          );
        })}
        <div className="absolute top-[32%] left-[32%] bg-center bg-no-repeat bg-[url(././assets/features/radial-gradient-features.png)] h-80 w-80 z-10"></div>
      </div>
    </section>
  );
}

export default Features;
