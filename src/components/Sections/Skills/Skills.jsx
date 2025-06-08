import React, { act, useState } from "react";
import "./Skills.css";
import Card from "../../Card/SkillsCard/Card";
import {
  skills,
  frontend,
  backend,
  database,
  others,
} from "../../../data/data.js";

const Skills = () => {
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
    <section className="skills-section">
      <div className="skills-container">
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
      </div>
    </section>
  );
};

export default Skills;
