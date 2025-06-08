import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="skills-box" key={props.key}>
      <div className="image-box">
        <img src={props.image} alt={props.alt} />
      </div>
      <h3>{props.title}</h3>
    </div>
  );
};

export default Card;
