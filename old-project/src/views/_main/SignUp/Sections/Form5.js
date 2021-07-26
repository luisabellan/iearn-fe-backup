import React, { useState } from "react";
import "../signup.scss";
import {
  Row,
  Col,
  FormGroup,
  Label,
  Card,
  CardBody,
} from "reactstrap";

//States
import states from "../json/states.json";
//Source: https://gist.github.com/mshafrir/2646763

//Components
import Progress from "./Progress";

const Form5 = ({ currentStep, setCurrentStep, isLoading, gatherValues }) => {
  const [markets, setMarkets] = useState([]);

  const updateMarkets = (name) => {
    let arr = [...markets];

    if (arr.includes(name)) {
      let i = arr.indexOf(name);
      arr.splice(i, 1);
    } else {
      arr.push(name);
    }

    setMarkets(arr);
  };

  const onSubmit = () => {
    gatherValues({ markets }, 5);
    setCurrentStep(5);
  };

  const mapStates = () => {
    return (
      <Row className="markets-container">
        <Col>
          {states.map((state, index) => {
            return index <= 29 ? (
              <label key={index}>
                <input
                  type="checkbox"
                  name={state.name}
                  onClick={() => updateMarkets(state.abbreviation)}
                />
                &ensp;
                {state.name}
              </label>
            ) : null;
          })}
        </Col>
        <Col>
          {states.map((state, index) => {
            return index >= 30 ? (
              <label key={index}>
                <input
                  type="checkbox"
                  name={state.name}
                  onClick={() => updateMarkets(state.abbreviation)}
                />
                &ensp;
                {state.name}
              </label>
            ) : null;
          })}
        </Col>
      </Row>
    );
  };

  return (
    <Card className="card-signup markets">
      <h1 className="text-center">Sign Up</h1>
      <CardBody>
        <p className="text-center">What markets do you work in?</p>
        <Label className="text-center w-100">
          You may select multiple options.
        </Label>
        {mapStates()}
        <FormGroup>
          <Col md="12" className="text-center">
            <button
              type="submit"
              color="primary"
              className="button-main set-transparent ls-5"
              disabled={isLoading}
              onClick={() => {
                setCurrentStep(3);
              }}
            >
              BACK
            </button>

            <button
              type="submit"
              color="primary"
              className="button-main ml-2 ls-5"
              disabled={isLoading}
              onClick={onSubmit}
            >
              NEXT
            </button>
          </Col>
        </FormGroup>
        <Progress {...{ currentStep }} />
      </CardBody>
    </Card>
  );
};

export default Form5;
