import "./Header.css";
import { useState, useEffect } from "react";

export default function Header() {
  const [isNavVisible, setIsNavVisible] = useState<boolean>(false);

  const [isDark, setIsDark] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem("isDarkTheme");

    return storedTheme ? JSON.parse(storedTheme) : true;
  });

  useEffect(() => {
    const className = "dark__theme";
    document.body.classList.toggle(className, isDark);
    localStorage.setItem("isDarkTheme", JSON.stringify(isDark));
  }, [isDark]);

  function toggleNav() {
    setIsNavVisible(!isNavVisible);
  }

  function toggleDarkTheme() {
    setIsDark(!isDark);
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
          <a
            className="header__resume btn"
            href="https://drive.google.com/file/d/1NXUvXuhEbrYCddo-7MQC6enZLttTyYjK/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
        <li>
          <span
            className="material-icons header__sun"
            onClick={toggleDarkTheme}
          >
            {isDark ? "light_mode" : "dark_mode"}
          </span>
        </li>
      </ul>

      {/*Aria Expanded->> Indicates whether a grouping element that is the accessibility child of or is controlled by this element is expanded or collapsed.*/}

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
              <a
                className="header__resume btn"
                href="https://drive.google.com/file/d/11HKpJadCEp92-Kp8yWTFOYvlcimS3K3b/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
          <button>
            <span
              className="material-icons mobile_nav-sun"
              onClick={toggleDarkTheme}
            >
              {isDark ? "light_mode" : "dark_mode"}
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}
