import React from "react";
import arrow from "../../assets/colored-arrow.svg";
import arrowRight from "../../assets/colored-arrow-right.svg";

function AccordionItem({ item, openQuestion, setOpenQuestion }) {
  const { question, answerHeading, answer, id } = item;
  const open = openQuestion === id;
  const handleQuestionClick = (id) => {
    openQuestion === id ? setOpenQuestion(-1) : setOpenQuestion(id);
    console.log(id);
  };
  console.log(open);

  return (
    <div>
      <button
        onClick={() => handleQuestionClick(id)}
        className="flex w-full justify-between border-1 border-secondary-200/60 rounded-lg py-4 px-7.5 cursor-pointer"
      >
        <p className="font-[DM_Sans] text-xl leading-[140%] text-accent font-bold">
          {question}
        </p>
        <img
          className={`border-secondary-200/70 w-[32px] h-[32px] border rounded-lg transition-transform duration-300 ${
            open && `rotate-90`
          }`}
          src={arrow}
          alt="arrow icon"
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? `max-h-50 opacity-100 mt-5` : `max-h-0 opacity-0 mt-0`
        }`}
      >
        <div className="flex flex-row bg-accent border-1 border-secondary-200/60 rounded-2xl gap-6.5 p-7.5">
          <div className="flex w-full gap-5 flex-col">
            <p className="font-[DM_Sans] text-xl leading-[140%] text-primary-400 font-bold">
              {answerHeading}
            </p>
            <p className="font-[DM_Sans] text-base text-[#333333] leading-[150%] text-justify">
              {answer}
            </p>
          </div>
          <img
            className="border-secondary-200/70 w-[32px] h-[32px] border rounded-lg"
            src={arrowRight}
            alt="arrow icon"
          />
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
