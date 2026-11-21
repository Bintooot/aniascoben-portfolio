import React, { useState } from "react";
import "./Project.css";
import ProjectCard from "../../Card/ProjectCard/Card";
import { projectData } from "../../../data/data.js";
import { motion } from "framer-motion";

const Project = (props) => {
  const [data] = useState(projectData);

  return (
    <section className="project-section" id={props.id}>
      <div className="project-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="project-header"
        >
          <div className="section-title-wrapper">
            <span className="section-pill">Featured Work</span>
            <h2 className="section-title">Projects Showcase</h2>
            <div className="title-bar" />
          </div>
          <p className="project-subtitle">
            A selection of web applications, mobile platforms, and client systems I've engineered
          </p>
        </motion.div>

        <div className="project-data-wrapper">
          {data.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <ProjectCard
                image={item.image}
                title={item.name}
                category={item.category}
                description={item.description}
                stacks={item.techStack}
                time={item.time}
                github={item.github}
                live={item.live}
                status={item.status}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
