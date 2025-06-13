import React from "react";
import Hero from "./components/Sections/Hero/Hero";
import Header from "./components/Header/Header";
import AboutMe from "./components/Sections/AboutMe/AboutMe";
import Services from "./components/Sections/Service/Services";
import Skills from "./components/Sections/Skills/Skills";
import Project from "./components/Sections/Project/Project";
import ContactMe from "./components/Sections/ContactMe/ContactMe";
import Footer from "./components/Sections/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Hero id="home" />
      <AboutMe id="about-me" />
      <Services id="services" />
      <Skills id="skills" />
      <Project id="projects" />
      <ContactMe id="contact-me" />
      <Footer />
    </>
  );
};

export default App;
