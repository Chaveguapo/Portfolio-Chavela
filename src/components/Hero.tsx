import "./Hero.css";

export const Hero = () => {
  return (
    <>
      <div id="hero" className="hero section">
        <p className="hero__subtitle">I'm Cindy</p>
        <h1 className="hero__title">
          <strong>Front-end</strong>
          <br />
          web developer
        </h1>

        <div className="hero__location ">
          <span className="material-icons hero__iconscolor ">location_on</span>
          <p className="hero__description">Based in Amsterdam</p>
        </div>

        <div className="hero__contact_icons">
          <i className="devicon-linkedin-plain hero__iconscolor  "></i>
          <i className="devicon-github-original hero__iconscolor "></i>
        </div>
      </div>
    </>
  );
};
