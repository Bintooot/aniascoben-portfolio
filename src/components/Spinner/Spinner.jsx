import React from "react";
import "./Spiner.css";

const Spinner = () => {
  return (
    <div class="circle-wrapper">
      <div class="slider-wrapper">
        <div class="circle-content">
          <div class="circle-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
