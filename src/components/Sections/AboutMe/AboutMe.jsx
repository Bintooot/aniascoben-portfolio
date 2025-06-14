import React from "react";
import {
  MapPinCheckInside,
  Github,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import "./AboutMe.css";
import Card from "../../Card/AboutMeCard/Card";
import { motion } from "framer-motion";

const AboutMe = (props) => {
  return (
    <section className="about-me-section" id={props.id}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 15,
          delay: 0.5,
        }}
        className="about-me-container"
      >
        <h2>About Me</h2>
        <p>
          I’m a web developer with a strong focus on front-end development and a
          solid working knowledge of back-end technologies. I create responsive,
          user-friendly websites using HTML, CSS, JavaScript , and frameworks
          like React. I also have experience with basic server-side development
          using Node.js, along with both SQL and NoSQL databases. I'm passionate
          about building clean, functional web experiences and am committed to
          continuous learning and growth in the field.
        </p>
        <ul className="info-list">
          <li className="info-list-item">
            <span>
              <MapPinCheckInside />
            </span>
            <a href="#"> Tagum City, Davao del Norte, Philippines, 8100</a>
          </li>
          <li className="info-list-item">
            <span>
              <Github />
            </span>
            <a
              href="https://github.com/Bintooot"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li className="info-list-item">
            <span>
              <Instagram />
            </span>
            <a
              href="https://www.instagram.com/raammm03/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li className="info-list-item">
            <span>
              <Facebook />
            </span>
            <a
              href="https://www.facebook.com/bintooot18"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 15,
          delay: 0.5,
        }}
        className="card-wrapper"
      >
        <Card title="4 years" subtitle="Experience" />
        <Card title="4 work" subtitle="Projects" />
      </motion.div>
    </section>
  );
};

export default AboutMe;
