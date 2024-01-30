import "./About.css";

export default function About() {
  return (
    <>
      <div id="about" className="about section">
        <div className="about__content ">
          <h1 className="about__quote">
            Guided by a motto:
            <strong>
              <br /> "Journey before <br /> destination" B.S
            </strong>
          </h1>
          <div className="about__line"></div>
          <article className="about__description ">
            Passionate about everything green, I'm a book lover and
            <strong>
              &nbsp; lifelong learner who thrives in blending UX design with the
              dynamism of web development.
            </strong>
            &nbsp; My journey is one of constant discovery, where nurturing
            plants, diving into books, and exploring the latest in tech all
            merge into an exciting quest for knowledge.
          </article>
        </div>

        <p className="about__skills"> I've been exploring ... </p>
        <div className="skills-wrapper section ">
          <i className="devicon-react-plain"></i>
          <i className="devicon-javascript-plain"></i>
          <i className="devicon-github-original "></i>
          <i className="devicon-html5-plain-wordmark"></i>
          <i className="devicon-figma-plain"></i>
          <i className="devicon-css3-plain-wordmark"></i>
        </div>
      </div>
    </>
  );
}
