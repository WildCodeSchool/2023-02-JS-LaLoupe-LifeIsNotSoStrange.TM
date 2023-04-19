import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <h1 className="gameTitle">Life is not so strange</h1>
      <img
        className="w-12 h-12 absolute top-0 left-0"
        src="src/assets/logop2.png"
        alt="Logo du site"
      />
    </header>
  );
}
export default Header;
