function FAQ({ children }) {
  return (
    <section className="text-accent py-24">
      <div className="text-center pb-18">
        <h2 className="font-bold text-accent text-5xl font-dm leading-[120%] mb-4 text-center">
          Frequently Asked{" "}
          <span className="text-transparent bg-clip-text bg-linear-86 to-secondary-100 from-secondary-300">
            Questions
          </span>
        </h2>
        <p className="font-dm leading-[150%] text-primary-500 max-w-[800px] inline-block">
          We've compiled a list of the most frequently asked questions about
          SmartNotes to help you get the information you need. If you have any
          other questions, feel free to reach out to our support team.
        </p>
      </div>
      {children}
    </section>
  );
}

export default FAQ;
