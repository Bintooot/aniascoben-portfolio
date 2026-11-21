import React, { useEffect, useState } from "react";
import Hero from "./components/Sections/Hero/Hero";
import Header from "./components/Header/Header";
import AboutMe from "./components/Sections/AboutMe/AboutMe";
import Services from "./components/Sections/Service/Services";
import Skills from "./components/Sections/Skills/Skills";
import Project from "./components/Sections/Project/Project";
import ContactMe from "./components/Sections/ContactMe/ContactMe";
import Footer from "./components/Sections/Footer/Footer";
import Spinner from "./components/Spinner/Spinner";
import BackToTop from "./components/BackToTop/BackToTop";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Quick, elegant loading entrance
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Header />
      <main>
        <Hero id="home" />
        <AboutMe id="about-me" />
        <Services id="services" />
        <Skills id="skills" />
        <Project id="projects" />
        <ContactMe id="contact-me" />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default App;
