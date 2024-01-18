import "./Header.css";
import Logo from "../assets/Logo.png";

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
            Work
          </a>
        </li>
        <li>
          <a href="#contact" className="header__link">
            Contact
          </a>
        </li>
        <li>
          <button className="header__sun">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          </button>
        </li>
        <li>
          <a className="header__resume btn">Resume</a>
        </li>
      </ul>
      <button className="header__bars">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
