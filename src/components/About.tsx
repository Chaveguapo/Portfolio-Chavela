import "./About.css";

export default function About() {
  return (
    <>
      <div className="aboutme-container">
        <div className="aboutme-wrapper">
          <h3>About me</h3>
          <h1 className="quote">Journey before destination</h1>
          <p className="text-aboutme">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            pretium dignissim odio nec scelerisque. Quisque ac erat pulvinar,
            finibus felis in, elementum ipsum. Ut hendrerit, turpis eu posuere
            dignissim, eros augue imperdiet tellus, vel cursus nibh ex eu
            tortor. Nullam mi turpis, malesusuere dignissim, eros augue
            imperdiet tellus, vel cursus nibh ex eu tortor. Nullam mi turpis,
            malesusuere dignissim, eros augue imperdiet tellus, vel cursus nibh
            ex eu tortor. Nullam mi turpis, malesu
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
