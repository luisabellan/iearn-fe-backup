import React, { useState } from "react";
import "./signup.scss";
import { Row, Col } from "reactstrap";
import SwipeableViews from "react-swipeable-views";

//Components
import Form1 from "./Sections/Form1";
import Form2 from "./Sections/Form2";
import Form3 from "./Sections/Form3";
import Form4 from "./Sections/Form4";
import Form5 from "./Sections/Form5";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  //   const { error, loading, login } = useAuth();

  return (
    <div className="container page-signup">
      <Row className="full-height-vh">
        <Col
          xs="12"
          className="d-flex align-items-center justify-content-center"
        >
          <SwipeableViews
            index={currentStep}
            onChangeIndex={(value) => {
              setCurrentStep(value);
            }}
            resistance
          >
            <Form1 {...{ isLoading, currentStep, setCurrentStep }} />
            <Form2 {...{ isLoading, currentStep, setCurrentStep }} />
            <Form3 {...{ isLoading, currentStep, setCurrentStep }} />
            <Form4 {...{ isLoading, currentStep, setCurrentStep }} />
            <Form5 {...{ currentStep }} />
          </SwipeableViews>
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;
