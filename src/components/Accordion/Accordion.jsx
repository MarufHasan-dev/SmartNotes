import React, { useState } from "react";
import AccordionItem from "../AccordionItem/AccordionItem";
import { faqItems } from "../../utils/constants";

function Accordion() {
  const [openQuestion, setOpenQuestion] = useState(-1);

  return (
    <div className="max-w-[800px] mx-auto flex flex-col gap-y-5">
      {faqItems.map((item) => {
        return (
          <AccordionItem
            item={item}
            key={item.id}
            openQuestion={openQuestion}
            setOpenQuestion={setOpenQuestion}
          />
        );
      })}
    </div>
  );
}

export default Accordion;
