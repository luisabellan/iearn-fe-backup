import React from "react";
import { Col } from "reactstrap";
import "../signup.scss";

const Progress = ({ currentStep }) => {
  return (
    <Col xs="12">
      <div className="progress-wrapper">
        <button
          className={`button-progress set-transition ${
            currentStep >= 0 ? "active" : ""
          }`}
        ></button>
        <button
          className={`button-progress set-transition ${
            currentStep >= 1 ? "active" : ""
          }`}
        ></button>
        <button
          className={`button-progress set-transition ${
            currentStep >= 2 ? "active" : ""
          }`}
        ></button>
      </div>
    </Col>
  );
};

export default Progress;
