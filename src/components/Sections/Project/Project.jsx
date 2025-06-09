import React, { useState } from "react";
import "./Project.css";
import ProjectCard from "../../Card/ProjectCard/Card";
import { projectData } from "../../../data/data.js";

const Project = () => {
  const [data] = useState(projectData);
  return (
    <section className="project-section">
      <div className="project-container">
        <div className="project-header">
          <h2>What I’ve Done</h2>
          <p>My Projects</p>
        </div>
        <div className="project-data-wrapper">
          {data.map((item, index) => (
            <ProjectCard
              key={index}
              image={item.image}
              title={item.name}
              description={item.description}
              stacks={item.techStack}
              time={item.time}
              github={item.github}
              live={item.live}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
