import doubleQuote from "../assets/double-quote.svg";

function Testimonial({ quote, author, company }) {
  return (
    <section className="py-16 text-accent">
      <div className="m-auto max-w-[484px] font-dm relative">
        <h5 className="font-bold text-2xl leading-[140%] tracking-[-1%] mb-8 text-center pt-6">
          {quote}
        </h5>
        <div className="flex gap-4 flex-row justify-center">
          <p className="leading-[150%]">{author}</p>
          <p className="text-primary-200">{company}</p>
        </div>
        <img
          className="absolute top-0 left-0 w-[38px] h-6"
          src={doubleQuote}
          alt="double qoute"
        />
      </div>
    </section>
  );
}

export default Testimonial;
