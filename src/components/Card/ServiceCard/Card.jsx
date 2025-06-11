import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="box-service">
      <div className="box-header">
        <span>{props.icon}</span> <h3>{props.title}</h3>
      </div>
      <p className="description">{props.description}</p>
    </div>
  );
};

export default Card;
