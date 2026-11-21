import React from "react";
import "./Card.css";

const Card = ({ title, image, alt, category }) => {
  return (
    <div className="skills-card">
      <div className="skills-icon-box">
        <img src={image} alt={alt || `${title} icon`} loading="lazy" />
      </div>
      <div className="skills-meta">
        <h3 className="skills-title">{title}</h3>
        {category && <span className="skills-category-badge">{category}</span>}
      </div>
    </div>
  );
};

export default Card;
