import { Hero } from "./components/Hero";
import Header from "./components/Header";
import Content from "./components/Content";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./components/Skills";
import Work from "./components/Work";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <div className="container-canvas">
        <Hero />
        <Content />
        <Skills />
        <Work />
      </div>
    </>
  );
}
