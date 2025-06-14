import React from "react";
import "./Hero.css";
import photo from "../../../assets/images/photo-me.jpg";
import Button from "../../Button/Button";
import { ArrowDownToLine, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Hero = (props) => {
  return (
    <section className="hero-section" id={props.id}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 15,
          delay: 0.5,
        }}
        className="hero-container"
      >
        <div className="image-wrapper">
          <img src={photo} alt="Portrait of Ben Raymond Aniasco" />
        </div>
        <div className="hero-info">
          <h1>FRONT-END DEVELOPER</h1>
          <h2>
            Turning ideas into interactive reality—one line of code at a time.
          </h2>
          <h3>
            → Hello, I’m <span>Ben Raymond Aniasco</span>
          </h3>
          <div className="button-box">
            <Button title="Download CV" icon={<ArrowDownToLine />} />
            <Button title="Hire Me" icon={<Mail />} />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
