import React from "react";
import Hero from "./components/Sections/Hero/Hero";
import Header from "./components/Header/Header";
import AboutMe from "./components/Sections/AboutMe/AboutMe";
import Services from "./components/Sections/Service/Services";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Services />
    </>
  );
};

export default App;
