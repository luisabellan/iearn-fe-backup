import React from "react";
import "../signup.scss";
import { Card, CardBody } from "reactstrap";

//Components
import Progress from "./Progress";

const Form3 = ({ currentStep }) => {
  return (
    <Card className="card-signup text-center">
      <h1 className="text-center">Sign Up</h1>
      <CardBody>
        <p className="text-center text-blue">
          You're all set!
          <br />
          Let's explore the Resource Center!
        </p>
        <button className="button-main ls-2">NEXT</button>
        <Progress {...{ currentStep }} />
      </CardBody>
    </Card>
  );
};

export default Form3;
