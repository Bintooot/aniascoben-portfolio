import React from "react";
import "./Footer.css";
import { Github, Linkedin, Instagram, Mail, ArrowUp } from "lucide-react";
import { personalInfo } from "../../../data/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="logo-accent">&lt;</span>
              {personalInfo.initials}
              <span className="logo-accent"> /&gt;</span>
            </a>
            <p className="footer-tagline">
              Frontend Developer turning ideas into responsive & interactive web realities.
            </p>
          </div>

          <div className="footer-nav">
            <h4 className="footer-nav-title">Navigation</h4>
            <div className="footer-nav-links">
              <a href="#home">Home</a>
              <a href="#about-me">About</a>
              <a href="#services">Services</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact-me">Contact</a>
            </div>
          </div>

          <div className="footer-socials-col">
            <h4 className="footer-nav-title">Connect</h4>
            <div className="footer-social-icons">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
              >
                <Instagram size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send an email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>

          <p className="footer-stack-note">
            Built with <span>React 19</span>, <span>Vite</span> & <span>Framer Motion</span>
          </p>

          <button
            type="button"
            className="footer-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
