import React from "react";
import "./Page.css";

function Page({ children }) {
  return <div className="mx-auto px-4 max-w-[1472px] w-full">{children}</div>;
}

export default Page;
