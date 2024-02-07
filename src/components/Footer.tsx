import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer id="contact" className="contact__container section">
        <p className="contact__text">
          Reach out, let's make
          <br /> something amazing together!
        </p>
        <div>
          <button className="btn contact__button ">Send a raven</button>
        </div>
        <div className="contact__icons">
          <a className="devicon-linkedin-plain "></a>
          <a className="devicon-github-original "></a>
        </div>
        <span className="contact__copyright"> Chavela Guapo </span>
      </footer>
    </>
  );
}
