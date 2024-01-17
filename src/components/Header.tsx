import "./Header.css";
import Logo from "../assets/Logo.png";

export default function Header() {
  return (
    <div className="header">
      {/* <img className="logo" src={Logo} alt="home" /> */}
      <input className="menu-btn" type="checkbox" id="menu-btn"></input>

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
            Work
          </a>
        </li>
        <li>
          <a href="#contact" className="header__link">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
