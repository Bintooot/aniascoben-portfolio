import React from "react";
import "./Hero.css";
import photo from "../../assets/images/photo-me.jpg";
import Button from "../Button/Button";
import { ArrowDownToLine, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <img src={photo} alt="photo.jpg" />
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
      </div>
    </section>
  );
};

export default Hero;
