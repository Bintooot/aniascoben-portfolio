import React from "react";
import "./ContactMe.css";
import { Mail, Phone, Linkedin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const ContactMe = (props) => {
  return (
    <section className="contact-me-section">
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 15,
          delay: 0.5,
        }}
        className="contact-me-container"
        id={props.id}
      >
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
          <li>
            <a
              href="https://www.linkedin.com/in/ben-raymond-aniasco-381523334/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <MessageCircle />
              </span>
              Messenger
            </a>
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default ContactMe;
