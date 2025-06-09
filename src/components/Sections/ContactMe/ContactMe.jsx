import React from "react";
import "./ContactMe.css";
import { Mail, Phone, Linkedin } from "lucide-react";

const ContactMe = () => {
  return (
    <section className="contact-me-section">
      <div className="contact-me-container">
        <h2>Have an idea or need help? </h2>
        <p>I'm just one message away.</p>
        <ul>
          <li>
            <a href="mailto:aniascoben@gmail.com">
              <span>
                <Mail />
              </span>
              aniascoben@gmail.com
            </a>
          </li>
          <li>
            <a href="">
              <span>
                <Phone />
              </span>
              09937637725
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ben-raymond-aniasco-381523334/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <Linkedin />
              </span>
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactMe;
