import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Hero } from "./Hero";
import "./MyNav.css";
import Footer from "./Footer";
import Work from "./Work";
import About from "./About";

export default function MyNav() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar navbar-expand-lg navbar-ligth bg-body-tertiary"
        sticky="top"
      >
        <Container className="container-fluid">
          <Navbar.Brand className="name-Navbar" href="#home">
            <h1>Chavela Guapo</h1>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="toggle"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navbar-nav ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#work">Work</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
