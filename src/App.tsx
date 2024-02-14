import "./App.css";
import "./components/utils.css";
import { Hero } from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Hero />
        <About />
        <Work />
        <Footer />
        {/* <div className="spacer spacer__background "></div> */}
      </div>
    </>
  );
}
