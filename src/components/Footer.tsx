import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer
        id="contact"
        className="contact__container section
      "
      >
        <p>
          Reach out, let's make
          <br /> something amazing together!
        </p>
        <div>
          <button className="btn contact__button ">Send a raven</button>
        </div>
        <div className="contact__icons">
          <i className="devicon-linkedin-plain "></i>
          <i className="devicon-github-original "></i>
        </div>
        <span className="contact__copyright"> Chavela Guapo </span>
      </footer>
    </>
  );
}
