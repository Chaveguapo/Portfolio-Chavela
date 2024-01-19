import "./Hero.css";

export const Hero = () => {
  return (
    <>
      <div id="hero" className="hero">
        <p className="hero__subtitle">I'm Cindy</p>
        <h1 className="hero__title">
          <strong>Front-end</strong>
          <br />
          web developer
        </h1>
        <div className="hero__location">
          <span className="material-icons">location_on</span>

          <p className="hero__description">Based in Amsterdam</p>
        </div>
      </div>
    </>
  );
};
