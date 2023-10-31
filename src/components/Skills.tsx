import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <>
      <section className="container-skills">
        <h2 className="skill-header">Skills</h2>

        <div className="skills-wrapper">
          <div className="first-set animate__animated animate__pulse">
            <img src={""} alt={""} loading="lazy" className="icon icon-card" />
            <img src={""} alt="" loading="lazy" className="icon icon-card" />
            <img src={""} alt="" loading="lazy" className="icon icon-card" />
          </div>

          <div className="second-set animate__animated animate__pulse">
            <img
              src="src\Portfolio_page\icons\icons8-figma.svg"
              alt=""
              loading="lazy"
              className="icon icon-card"
            />
            <img
              src="src\Portfolio_page\icons\icons8-github.svg"
              alt=""
              loading="lazy"
              className="icon icon-card"
            />
            <img
              src="src\Portfolio_page\icons\icons8-html-5.svg"
              alt=""
              loading="lazy"
              className="icon icon-card"
            />
          </div>
        </div>
      </section>
    </>
  );
}
