import "./About.css";

export default function About() {
  return (
    <>
      <section id="about" className="about section">
        <div className="about__content ">
          <h1 className="about__quote">
            Guided by a motto:
            <strong>
              <br /> "Journey before <br /> destination"
            </strong>
            <p className="about__author-quote">Brandon Sanderson</p>
          </h1>
          <div className="about__line"></div>
          <article className="about__description ">
            My journey into web development began with a curiosity for user
            experience. I was fascinated by
            <strong>
              &nbsp; the idea of creating intuitive and engaging interfaces that
              made people's lives easier.
            </strong>
            &nbsp; Since then, I have immersed myself in the world of web
            development, constantly learning and exploring new technologies and
            solutions.
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
      </section>
    </>
  );
}
