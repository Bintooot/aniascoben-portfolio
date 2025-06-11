import React, { useState } from "react";
import "./Project.css";
import ProjectCard from "../../Card/ProjectCard/Card";
import { projectData } from "../../../data/data.js";
import { motion } from "framer-motion";

const Project = () => {
  const [data] = useState(projectData);
  return (
    <motion.section
      initial={{
        opacity: 0,
        x: -100,
      }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        type: "spring",
        stiffness: 40,
        damping: 15,
      }}
      className="project-section"
    >
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
    </motion.section>
  );
};

export default Project;
