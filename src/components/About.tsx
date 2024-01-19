import "./About.css";
import Typescript from "../assets/Icons/Typescript.svg";

export default function About() {
  return (
    <>
      <section id="about" className="about section">
        <div className="about__content">
          <h1 className="about__quote">
            Guided by a motto:
            <strong>
              <br /> "Journey before <br /> destination"
            </strong>
          </h1>

          <p className="about__description">
            Passionate about everything green, I'm a book lover and
            <strong>
              lifelong learner who thrives in blending UX design with the
              dynamism of web development.
            </strong>
            My journey is one of constant discovery, where nurturing plants,
            diving into books, and exploring the latest in tech all merge into
            an exciting quest for knowledge.
          </p>
        </div>
        <br />
        {/* <div className="skill-container"> */}
        <p>
          <strong>In this journey I've been working with ...</strong>
        </p>
        <div className="skills-wrapper">
          <i className="devicon-github-original "></i>

          <i className="devicon-javascript-plain"></i>

          <i className="devicon-react-plain"></i>

          <i className="devicon-figma-plain"></i>

          <i className="devicon-html5-plain"></i>
          <i className="devicon-html5-plain"></i>
          <i className="devicon-html5-plain"></i>
          <i className="devicon-html5-plain"></i>
          <i className="devicon-html5-plain"></i>
        </div>
        {/* </div> */}
      </section>
    </>
  );
}
