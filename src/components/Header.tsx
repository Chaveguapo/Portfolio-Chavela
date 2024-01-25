import "./Header.css";

export default function Header() {
  return (
    <div className="header">
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
    </div>
  );
}
