import React from "react";
import "./Service.css";
import Card from "../../Card/ServiceCard/Card";
import { Code, Globe, Waypoints, PanelsTopLeft } from "lucide-react";
import { motion } from "framer-motion";

const Services = (props) => {
  return (
    <section className="services-section" id={props.id}>
      <div className="services-container">
        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 15,
            delay: 0.5,
          }}
          className="services-header"
        >
          <h2>What I Do</h2>
          <p>My Services</p>
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
          className="service-card-wrapper"
        >
          <div className="service-card-content">
            <Card
              title="Frontend Development"
              icon={<Code size={40} />}
              description="I transform designs into fast, responsive, and functional websites using modern technologies like HTML, CSS, JavaScript, and React. My focus is on writing clean, scalable code that ensures smooth performance, interactive features, and compatibility across devices and browsers."
            />
            <div className="separator">
              <div className="line"></div>
              <div className="circle"></div>
            </div>
            <Card
              title="Web Designing"
              icon={<Globe size={40} />}
              description="I craft visually engaging and user-centric website designs that reflect your brand identity. From layout planning to typography and color schemes, I focus on creating clean, modern, and intuitive interfaces that enhance user experience. My design process ensures every detail contributes to usability, accessibility, and aesthetic appeal."
            />
          </div>
          <div className="service-card-content">
            <Card
              title="API Integration"
              icon={<Waypoints size={40} />}
              description="I connect frontend interfaces to backend services using RESTful or GraphQL APIs for dynamic, real-time functionality."
            />
            <div className="separator">
              <div className="line"></div>
              <div className="circle"></div>
            </div>
            <Card
              title="UI Implementation"
              icon={<PanelsTopLeft size={40} />}
              description="I translate Figma or other design files into fully functional, pixel-perfect web interfaces with attention to detail and accessibility."
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
