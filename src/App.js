import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Work/Projects";
import Skills from "./Components/Sills/Skills";
import Contact from "./Components/Contact/Contact";
import Scroll from "./Components/Scroll/Scroll";
function App() {
  //navbar scroll changeBackground function
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    window.scrollY >= 745 ? setColorchange(true) : setColorchange(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);
  return (
    <>
      <Scroll />
      <Header
        {...(colorChange ? { backgroundColor: "rgba(97, 8, 43, 0.2)" } : {})}
      />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
