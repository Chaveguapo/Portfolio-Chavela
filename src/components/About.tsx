import "./About.css";

export default function About() {
  return (
    <>
      <div className="aboutme-container">
        <div className="aboutme-wrapper">
          <h3>About me</h3>
          <h1 className="quote">Journey before destination</h1>
          <p className="text-aboutme">
            Hi, I'm Chavela! Enthusiast of all things green, a devoted reader,
            and a lifelong learner. After wrapping up my studies in UX design,
            the captivating world of web development caught my eye. Now, I find
            joy in blending creative design with the nuts and bolts of coding.
            Whether I'm nurturing my plants, losing myself in a good book, or
            exploring the latest web technologies, I'm always on a quest for new
            adventures and knowledge!
          </p>
        </div>
        <div className="skill-container">
          <h3>I have experience with...</h3>
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
