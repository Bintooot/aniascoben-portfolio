import React from "react";
import "./Card.css";

const Card = ({ title, subtitle, icon }) => {
  return (
    <div className="about-stat-card">
      {icon && <div className="stat-card-icon">{icon}</div>}
      <h3 className="stat-card-title">{title}</h3>
      <p className="stat-card-subtitle">{subtitle}</p>
    </div>
  );
};

export default Card;
