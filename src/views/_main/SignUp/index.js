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

//API
import api from "../../../api";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formValues, setFormValues] = useState({});

  //   const { error, loading, login } = useAuth();

  const gatherValues = (val, form) => {
    let values = { ...formValues, ...val };
    setFormValues({ ...values });

    if (form === 3) {
      let { confirmPassword, password, ...finalize } = values;

      let body = Object.fromEntries(
        Object.entries(finalize).filter(([_, v]) => v !== "")
      );

      signUp(body, password);
    }
  };

  const signUp = (values, password) => {
    setIsLoading(true);

    api
      .post(`/users`, values)
      .then((res) => {
        api
          .post(`/usersettings`, { user: res.data.id, password })
          .then((res) => {
            setIsLoading(false);
            setCurrentStep(4);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            <Form1
              {...{ isLoading, currentStep, setCurrentStep, gatherValues }}
            />
            <Form2
              {...{ isLoading, currentStep, setCurrentStep, gatherValues }}
            />
            <Form3
              {...{ isLoading, currentStep, setCurrentStep, gatherValues }}
            />
            <Form4
              {...{ isLoading, currentStep, setCurrentStep, gatherValues }}
            />
            <Form5 {...{ currentStep }} />
          </SwipeableViews>
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;
