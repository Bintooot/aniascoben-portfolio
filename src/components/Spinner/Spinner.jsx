import React from "react";
import "./Spiner.css";

const Spinner = () => {
  return (
    <div className="spinner-overlay" role="status" aria-label="Loading portfolio">
      <div className="spinner-container">
        <div className="spinner-ring" />
        <div className="spinner-brand">B.R.A</div>
      </div>
    </div>
  );
};

export default Spinner;
