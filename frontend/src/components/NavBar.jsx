import { Link } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      setIsNavOpen((prev) => !prev);
    }
  };

  return (
    <div className="flex justify-between mt-4 mr-4">
      <nav>
        <section className="mobile-menu flex md:hidden">
          <div
            className="burger-icon space-y-2"
            onKeyDown={handleKeyDown}
            onClick={() => setIsNavOpen((prev) => !prev)}
            role="button"
            tabIndex={0}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-white" />
            <span className="block h-0.5 w-8 animate-pulse bg-white" />
            <span className="block h-0.5 w-8 animate-pulse bg-white" />
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            {" "}
            <div
              className="cross-icon absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
              onKeyDown={handleKeyDown}
              role="button"
              tabIndex={-1}
            >
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="menu-mobile-open flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-white my-8 uppercase">
                <Link to="/">Accueil</Link>
              </li>
              <li className="border-b border-white my-8 uppercase">
                <Link to="/leaderboard">Classement</Link>
              </li>
              <li className="border-b border-white my-8 uppercase">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className="desktop-menu hidden space-x-8 md:flex">
          <li className="li-navbar">
            <Link to="/">Accueil</Link>
          </li>
          <li className="li-navbar">
            <Link to="/leaderboard">Classement</Link>
          </li>
          <li className="li-navbar">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
