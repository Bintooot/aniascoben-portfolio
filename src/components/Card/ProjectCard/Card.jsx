import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="project-card" key={props.key}>
      <div className="image-box-wrapper">
        <img src={props.image} alt={props.alt} />
      </div>
      <div className="data-info-wrapper">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p>
          <strong>Date:</strong> {props.time}
        </p>
        <p className="tech-stack-wrapper">
          <strong> Tech Stack:</strong>
          {props.stacks.map((item) => (
            <span className="tech-stack-list">{item}</span>
          ))}
        </p>

        <div className="link-wrapper">
          <a href={props.github} target="_blank" rel="nonoopener noreferrer">
            Github Repo
          </a>
          <a href={props.live} target="_blank" rel="nonoopener noreferrer">
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
