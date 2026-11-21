import React from "react";
import "./Hero.css";
import photo from "../../../assets/images/photo-me.JPG";
import { ArrowDownToLine, Eye, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "../../../data/data";

const Hero = (props) => {
  return (
    <section className="hero-section" id={props.id}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="hero-container"
      >
        <div className="image-wrapper">
          <div className="image-glow-backdrop" />
          <div className="image-frame">
            <img
              src={photo}
              alt="Portrait of Ben Raymond Aniasco"
              loading="eager"
            />
          </div>
        </div>

        <div className="hero-info">
          <div className="hero-badge">
            <Sparkles size={14} className="badge-icon" />
            <span>Available for new projects & roles</span>
          </div>

          <p className="hero-greeting">
            Hello, I’m <span className="highlight-name">{personalInfo.name}</span>
          </p>

          <h1 className="hero-title">
            FRONT-END <span className="gradient-text">DEVELOPER</span>
          </h1>

          <p className="hero-subtitle">
            Crafting high-performance, responsive web applications and enterprise solutions
            with specialized knowledge in React, functional understanding of SAP Business One, and ERPNext workflows.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-btn primary-btn">
              <Eye size={18} />
              <span>Explore My Work</span>
            </a>

            <a
              href={personalInfo.resumeUrl}
              download="Ben-Raymond-Aniasco-CV.pdf"
              className="hero-btn secondary-btn"
            >
              <ArrowDownToLine size={18} />
              <span>Download Resume</span>
            </a>
          </div>

          <div className="hero-socials">
            <span className="socials-label">Connect:</span>
            <div className="socials-links">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="social-icon-btn"
              >
                <Github size={19} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="social-icon-btn"
              >
                <Linkedin size={19} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send an email"
                className="social-icon-btn"
              >
                <Mail size={19} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
