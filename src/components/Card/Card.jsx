import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="box">
      <h3>{props.title}</h3>
      <p>{props.subtitle}</p>
    </div>
  );
};

export default Card;
