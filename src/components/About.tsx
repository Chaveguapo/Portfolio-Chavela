import "./About.css";

export default function About() {
  return (
    <>
      <div id="about" className="aboutme-container">
        <div className="aboutme-wrapper">
          <h3>About me</h3>
          <h1 className="quote">
            Guided by a motto: "Journey before destination"
          </h1>

          <p className="text-aboutme">
            I am an enthusiast of all things green and a devoted reader, with my
            path marked by lifelong learning and discovery. Having completed my
            studies in UX design, I found myself captivated by the world of web
            development. Now, I joyfully blend creative design with the
            practicality of coding. Whether nurturing my plants, absorbed in a
            good book, or delving into the latest web technologies, I am always
            on a quest for new adventures and knowledge. For me, every step of
            the journey is as enriching as the milestones I achieve.
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
