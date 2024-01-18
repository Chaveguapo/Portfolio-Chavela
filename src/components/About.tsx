import "./About.css";
import Typescript from "../assets/Icons/Typescript.svg";

export default function About() {
  return (
    <>
      <section id="about" className="about container section">
        <div className="about__content">
          <h1 className="about__quote">
            Guided by a motto:
            <strong>
              <br /> "Journey before <br /> destination"
            </strong>
          </h1>
          <hr
            style={{
              background: "#7EF695",
              color: "lime",
              borderColor: "lime",
              width: "200px",
            }}
          />
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
        <div className="skill-container">
          <h3>In this journey I've been working with ...</h3>
          <div className="skills-wrapper">
            <img
              src={Typescript}
              alt={"Javascript"}
              loading="lazy"
              className="icon "
            />
            <img
              src={"https://picsum.photos/60/50?grayscale"}
              alt=""
              loading="lazy"
              className="icon icon-card"
            />
            <img
              src={"https://picsum.photos/60/50?grayscale"}
              alt=""
              loading="lazy"
              className="icon icon-card"
            />

            <img
              src="https://picsum.photos/60/50?grayscale"
              alt=""
              loading="lazy"
              className="icon icon-card"
            />
            <img
              src="https://picsum.photos/60/50?grayscale"
              alt=""
              loading="lazy"
              className="icon icon-card"
            />
            <img
              src="https://picsum.photos/60/50?grayscale"
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
