import { Routes, Route } from "react-router-dom";
import { Hero } from "./components/Hero";
import MyNavbar from "./components/MyNavbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Work from "./components/Work";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  return (
    <>
      <MyNavbar />
      <div className="container-canvas">
        <Hero />
        <About />
        <Work />
        <Footer />
      </div>
    </>
  );
}
