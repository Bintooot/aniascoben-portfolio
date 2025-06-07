import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div className="button-wrapper">
      <p> {props.title} </p>
      <span>{props.icon}</span>
    </div>
  );
};

export default Button;
