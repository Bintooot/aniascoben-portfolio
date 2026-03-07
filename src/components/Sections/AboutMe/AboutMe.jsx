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
          I’m a web developer focused on front-end development, with a solid
          understanding of back-end technologies. I build responsive and user-friendly
          interfaces using HTML, CSS, JavaScript, and modern frameworks like React.
          I also have experience working with back-end tools such as Node.js and both
          SQL and NoSQL databases, allowing me to understand and collaborate across the
          full web development stack. I’m passionate about building clean, efficient
          web applications and continuously improving my skills.
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
        <Card title="2 years" subtitle="Experience" />
        <Card title="5 work" subtitle="Projects" />
      </motion.div>
    </section>
  );
};

export default AboutMe;
