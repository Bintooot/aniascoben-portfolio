import React, { useState } from "react";
import "./Skills.css";
import Card from "../../Card/SkillsCard/Card";
import {
  skills,
  frontend,
  backend,
  database,
  others,
} from "../../../data/data.js";
import { motion } from "framer-motion";

const Skills = (props) => {
  const [data, setData] = useState(skills);
  const [active, setActive] = useState("All");

  const handleButton = (active) => {
    setActive(active);
    if (active === "All") {
      setData(skills);
    } else if (active === "Frontend") {
      setData(frontend);
    } else if (active === "Backend") {
      setData(backend);
    } else if (active === "Database") {
      setData(database);
    } else {
      setData(others);
    }
  };

  return (
    <section className="skills-section" id={props.id}>
      <motion.div
        initial={{
          opacity: 0,
          x: 50,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 15,
        }}
        className="skills-container"
      >
        <div className="skills-header">
          <h2>My Skills</h2>
          <p>The Stack That Powers My Frontend Craft</p>
        </div>
        <div className="skills-wrapper">
          <div className="skills-nav">
            <ul className="skills-list">
              <li
                className={`skills-item ${active === "All" ? "active" : ""}`}
                onClick={() => handleButton("All")}
              >
                All
              </li>
              <li
                className={`skills-item ${
                  active === "Frontend" ? "active" : ""
                }`}
                onClick={() => handleButton("Frontend")}
              >
                Frontend
              </li>
              <li
                className={`skills-item ${
                  active === "Backend" ? "active" : ""
                }`}
                onClick={() => handleButton("Backend")}
              >
                Backend
              </li>
              <li
                className={`skills-item ${
                  active === "Database" ? "active" : ""
                }`}
                onClick={() => handleButton("Database")}
              >
                Database
              </li>
              <li
                className={`skills-item ${active === "Other" ? "active" : ""}`}
                onClick={() => handleButton("Other")}
              >
                Other
              </li>
            </ul>
          </div>
          <div className="skills-content">
            <div className="skills-data">
              {data.map((item, index) => (
                <Card
                  key={index}
                  title={item.name}
                  image={item.image}
                  alt={item.alt}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
