import "./App.css";
import "./components/utils.css";
import { Hero } from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Header from "./components/Header";

// The idea is keep feeding the portfolio, last time you were including the sections in the nav bar check if everything is ok and delete the rest

export default function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Hero />
        <About />
        <Work />
        <Footer />
      </div>
    </>
  );
}
