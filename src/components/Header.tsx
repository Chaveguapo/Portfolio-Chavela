import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import { useEffect, useState } from "react";
import "../App.css";

export default function Header() {
  const [activelink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value: any) => {
    setActiveLink(value);
  };

  return (
    <Nav
      className="justify-content-center"
      variant="underline"
      defaultActiveKey="/home"
    >
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">About me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Work</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">Contact</Nav.Link>
      </Nav.Item>
      {/* <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item> */}
    </Nav>
  );
  //   <Navbar style={{ height: "10vh" }} className={scrolled ? "scrolled" : ""}>
  //     <Container>
  //       <Navbar.Brand href="#Home"></Navbar.Brand>
  //       <Navbar.Toggle aria-controls="basic-navbar-nav">
  //         <span className="navbar-toogler-icon"></span>
  //       </Navbar.Toggle>
  //       <Navbar.Collapse id="basic-navbar-nav">
  //         <Nav className="me-auto">
  //           <Nav.Link
  //             href="#home"
  //             className={
  //               activelink === "home" ? "active navbar-link" : "navbar-link"
  //             }
  //             onClick={() => onUpdateActiveLink("home")}
  //           >
  //             Home
  //           </Nav.Link>
  //           <Nav.Link
  //             href="#about_me"
  //             className={
  //               activelink === "about_me" ? "active navbar-link" : "navbar-link"
  //             }
  //             onClick={() => onUpdateActiveLink("about_me")}
  //           >
  //             About me
  //           </Nav.Link>
  //           <Nav.Link
  //             href="#work"
  //             className={
  //               activelink === "work" ? "active navbar-link" : "navbar-link"
  //             }
  //             onClick={() => onUpdateActiveLink("work")}
  //           >
  //             Work
  //           </Nav.Link>
  //           <Nav.Link
  //             href="#contact"
  //             className={
  //               activelink === "contact" ? "active navbar-link" : "navbar-link"
  //             }
  //             onClick={() => onUpdateActiveLink("contact")}
  //           >
  //             Contact
  //           </Nav.Link>
  //         </Nav>
  //       </Navbar.Collapse>
  //     </Container>
  //   </Navbar>
  // );
}
