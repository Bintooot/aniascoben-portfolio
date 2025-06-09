import React, { useState } from "react";
import "./Project.css";
import ProjectCard from "../../Card/ProjectCard/Card";
import { projectData } from "../../../data/data.js";
import { motion } from "framer-motion";

const Project = () => {
  const [data] = useState(projectData);
  return (
    <section className="project-section">
      <div className="project-container">
        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="project-header"
        >
          <h2>What I’ve Done</h2>
          <p>My Projects</p>
        </motion.div>
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
