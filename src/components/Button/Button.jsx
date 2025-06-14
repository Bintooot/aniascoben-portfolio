import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div className="button-wrapper">
      <p className="button-title"> {props.title} </p>
      <span className="button-icon">{props.icon}</span>
    </div>
  );
};

export default Button;
