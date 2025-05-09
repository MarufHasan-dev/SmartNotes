import React from "react";

function Header({ children }) {
  return (
    <header className="border-b border-solid border-[rgba(4,140,129,0.3)]">
      {children}
    </header>
  );
}

export default Header;
