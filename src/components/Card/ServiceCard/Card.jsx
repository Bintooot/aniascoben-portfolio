import React from "react";
import "./Card.css";

const Card = ({ icon, title, description, tags }) => {
  return (
    <div className="service-card">
      <div className="service-card-top">
        <div className="service-icon-wrapper">{icon}</div>
        <h3 className="service-card-title">{title}</h3>
      </div>
      <p className="service-card-desc">{description}</p>
      {tags && tags.length > 0 && (
        <div className="service-tags">
          {tags.map((tag) => (
            <span key={tag} className="service-tag">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
