import React from "react";
import "./Header.css";
import NavBar from "./NavBar";

function Header() {
  return (
    <header>
      <div className=" flex items-center">
        <div className="relative">
          <img
            className="w-12 h-12 md:w-16 md:h-16 mr-2 md:mr-4 filter drop-shadow-lg"
            src="src/assets/logop2.png"
            alt="Logo du site"
          />
        </div>
        <h1 className="text-5xl md:text-7xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-700">
          Life is not so strange
        </h1>
      </div>
      <NavBar />
    </header>
  );
}

export default Header;
