import React from "react";
import Hero from "./components/Sections/Hero/Hero";
import Header from "./components/Header/Header";
import AboutMe from "./components/Sections/AboutMe/AboutMe";
import Services from "./components/Sections/Service/Services";
import Skills from "./components/Sections/Skills/Skills";
import Project from "./components/Sections/Project/Project";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Services />
      <Skills />
      <Project />
    </>
  );
};

export default App;
