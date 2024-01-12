import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Hero } from "./Hero";
import "./MyNav.css";
import Footer from "./Footer";
import Work from "./Work";
import About from "./About";
import Logo from "../assets/Logo.png";

export default function MyNav() {
  return (
    <div className="link_container">
      <img className="logo" src={Logo} />
      <a href="#home" className="navbar_link">
        Home
      </a>
      <a href="#about" className="navbar_link">
        About
      </a>
      <a href="#work" className="navbar_link">
        Work
      </a>
      <a href="#contact" className="navbar_link">
        Contact
      </a>
    </div>
  );
}
