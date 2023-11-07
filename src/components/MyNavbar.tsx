import "../App.css";
import "./MyNavbar.css";

export default function MyNavbar() {
  return (
    <>
      {/* Navbar */}
      <header>
        <nav className="navbar navbar-expand-lg fixed-top navbar-scroll">
          <div className="container-fluid">
            <a className="navbar-brand" href="#!">
              Chavela Guapo
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#!">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    Work
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
{
  /* <Navbar
        bg="dark"
        data-bs-theme="dark"
        sticky="top"
        className="mynavbar-container"
      >
        <Container>
          <Navbar.Brand href="#home">Cindy Chavez</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#work">Work</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
  </Navbar> */
}
