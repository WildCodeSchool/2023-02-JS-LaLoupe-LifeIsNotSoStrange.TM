import React from "react";
import "./Header.css";
import NavBar from "./NavBar";

function Header() {
  return (
    <header className="flex">
      <img
        className="w-12 h-12 top-0 left-0"
        src="src/assets/logop2.png"
        alt="Logo du site"
      />
      <h1 className="gameTitle m-auto md:text-left">Life is not so strange</h1>
      <NavBar />
    </header>
  );
}
export default Header;
