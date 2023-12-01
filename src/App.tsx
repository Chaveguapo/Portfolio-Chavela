import { Routes, Route } from "react-router-dom";
import { Hero } from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Work from "./components/Work";
import MyNav from "./components/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// The idea is keep feeding the portfolio, last time you were including the sections in the nav bar check if everything is ok and delete the rest

export default function App() {
  return (
    <>
      <MyNav />
      <div className="container-canvas">
        <Hero />
        <About />
        <Work />
        <Footer />
      </div>
    </>
  );
}
