import Footer from "./Footer";
import "./Header.css";

export default function Header() {
  return (
    <header className="header sticky ">
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
      <button>
        <span className="material-icons header__bars">menu</span>
      </button>

      {/*  // <------- Start Mobile Navigation------->*/}

      <div className="mobile_nav">
        <nav>
          <ul className="mobile_nav-menu">
            <li>
              <a className="mobile_nav-link" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="mobile_nav-link" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="mobile_nav-link" href="work">
                Work
              </a>
            </li>
            <li>
              <a className="mobile_nav-link" href="contact">
                Contact
              </a>
            </li>
            <li>
              <span className="material-icons mobile_nav-sun">light_mode</span>
            </li>
            <li>
              <button className="mobile_nav-btn btn">Resume</button>
            </li>
          </ul>
        </nav>
      </div>
      {/*  // <------- End Mobile Navigation------->*/}
    </header>
  );
}
