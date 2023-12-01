import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Hero } from "./Hero";
import "./MyNav.css";
import Footer from "./Footer";
import Work from "./Work";
import About from "./About";

export default function MyNav2() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary"
        sticky="top"
      >
        <Container className="header-container">
          <Navbar.Brand className="name-Navbar" href="#home">
            Chavela Guapo
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="toggler"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="position-absolute top-0 end-0">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#work">Work</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="section" id="home">
        <Hero />
      </div>
      <div className="section" id="about">
        <About />
      </div>
      <div className="section" id="work">
        <Work />
      </div>
      <div className="section" id="contact">
        <Footer />
      </div>
    </>
  );
}
