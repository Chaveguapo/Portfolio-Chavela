import "./Content.css";

export default function Content() {
  return (
    <>
      <div className="container-content">
        <h3 className="aboutme">About me</h3>
        <h1 className="quote">Journey before destination</h1>
        <p className="text-aboutme">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium
          dignissim odio nec scelerisque. Quisque ac erat pulvinar, finibus
          felis in, elementum ipsum. Ut hendrerit, turpis eu posuere dignissim,
          eros augue imperdiet tellus, vel cursus nibh ex eu tortor. Nullam mi
          turpis, malesusuere dignissim, eros augue imperdiet tellus, vel cursus
          nibh ex eu tortor. Nullam mi turpis, malesusuere dignissim, eros augue
          imperdiet tellus, vel cursus nibh ex eu tortor. Nullam mi turpis,
          malesu
        </p>

        <h2 className="skill-header">Skills</h2>

        <div className="skills-wrapper">
          <div className="first-set animate__animated animate__pulse">
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
          </div>

          <div className="second-set animate__animated animate__pulse">
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
