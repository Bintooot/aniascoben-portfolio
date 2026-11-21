import React, { useState } from "react";
import "./Skills.css";
import Card from "../../Card/SkillsCard/Card";
import { skills, skillsCategories } from "../../../data/data.js";
import { motion, AnimatePresence } from "framer-motion";

const Skills = (props) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((item) => item.category === activeCategory);

  const getCategoryCount = (cat) => {
    if (cat === "All") return skills.length;
    return skills.filter((s) => s.category === cat).length;
  };

  return (
    <section className="skills-section" id={props.id}>
      <div className="skills-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="skills-header"
        >
          <div className="section-title-wrapper">
            <span className="section-pill">Tech Stack</span>
            <h2 className="section-title">Technical Skills</h2>
            <div className="title-bar" />
          </div>
          <p className="skills-subtitle">
            The core tools, languages, and frameworks that power my development workflow
          </p>
        </motion.div>

        {/* Filter Navigation Tabs */}
        <div className="skills-nav-container">
          <div className="skills-tab-list" role="tablist" aria-label="Skills Category Filter">
            {skillsCategories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                className={`skills-tab-btn ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                <span>{category}</span>
                <span className="tab-count-badge">
                  {getCategoryCount(category)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div layout className="skills-grid">
          <AnimatePresence>
            {filteredSkills.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
              >
                <Card
                  title={item.name}
                  image={item.image}
                  alt={item.alt}
                  category={item.category}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
