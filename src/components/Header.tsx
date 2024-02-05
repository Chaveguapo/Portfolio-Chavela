import "./Header.css";
import { useState } from "react";

export default function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  function toggleNav() {
    setIsNavVisible(!isNavVisible);
  }

  return (
    <header className="header ">
      <ul className="header__menu">
        <li>
          <a href="#hero" className="header__link">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="header__link">
            About
          </a>
        </li>
        <li>
          <a href="#work" className="header__link">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" className="header__link">
            Contact
          </a>
        </li>
        <li>
          <button className="header__resume btn">Resume</button>
        </li>
        <li>
          <span className="material-icons header__sun">light_mode</span>
        </li>
      </ul>

      {/*Aria Expande->> Indicates whether a grouping element that is the accessibility child of or is controlled by this element is expanded or collapsed.*/}

      <button
        onClick={toggleNav}
        className="header__bars"
        aria-expanded={isNavVisible}
      >
        <span className="material-icons header__bars">menu</span>
      </button>

      {/*  // <------- Start Mobile Navigation------->*/}

      <div
        id="burger"
        className={`mobile_nav ${isNavVisible ? "mobile__nav-show" : ""}`}
      >
        <nav>
          <ul className="mobile_nav-menu">
            <button
              onClick={toggleNav}
              className="mobile__nav-close"
              aria-expanded={isNavVisible}
            >
              <span className="material-icons header__bars">close</span>
            </button>
            <li>
              <a className="mobile_nav-link" onClick={toggleNav} href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="mobile_nav-link" onClick={toggleNav} href="#about">
                About
              </a>
            </li>

            <li>
              <a className="mobile_nav-link" onClick={toggleNav} href="#work">
                Work
              </a>
            </li>
            <li>
              <a
                className="mobile_nav-link"
                onClick={toggleNav}
                href="#contact"
              >
                Contact
              </a>
            </li>
            <li>
              <button className="mobile_nav-btn btn">Resume</button>
            </li>
          </ul>
          <button>
            <span className="material-icons mobile_nav-sun">light_mode</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
