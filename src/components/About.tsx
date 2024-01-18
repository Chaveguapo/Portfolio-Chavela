import "./About.css";

export default function About() {
  return (
    <>
      <div id="about" className="aboutme-container section">
        <div className="aboutme-wrapper">
          <h1 className="quote">
            Guided by a motto: "Journey before destination"
          </h1>

          <p className="text-aboutme">
            Passionate about everything green, I'm a book lover and lifelong
            learner who thrives in blending UX design with the dynamism of web
            development. My journey is one of constant discovery, where
            nurturing plants, diving into books, and exploring the latest in
            tech all merge into an exciting quest for knowledge.
          </p>
        </div>
        <div className="skill-container">
          <h3>In this journey I've been working with ...</h3>
          <div className="skills-wrapper">
            <img
              src={"https://picsum.photos//50?grayscale"}
              alt={""}
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
      </div>
    </>
  );
}
