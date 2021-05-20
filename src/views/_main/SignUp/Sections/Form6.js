import React, { useState } from "react";
import "../signup.scss";
import { Row, Col, FormGroup, Label, Card, CardBody } from "reactstrap";

//Components
import Progress from "./Progress";

const Form6 = ({ currentStep, setCurrentStep, isLoading, gatherValues }) => {
  const [mentorships, setMentorships] = useState([]);

  const updateMentorships = (name) => {
    let arr = [...mentorships];

    if (arr.includes(name)) {
      let i = arr.indexOf(name);
      arr.splice(i, 1);
    } else {
      arr.push(name);
    }

    setMentorships(arr);
  };

  const onSubmit = () => {
    gatherValues({ mentorships }, 6);
  };

  const mapMentorships = () => {
    const mentors = [
      "Astroflipping",
      "SubTo",
      "Chris Chico",
      "TTP",
      "Flip2Freedom",
    ];

    return (
      <Row className="mentorships-container">
        <Col>
          {mentors.map((mentor, index) => {
            return index <= 2 ? (
              <label key={index}>
                <input
                  type="checkbox"
                  name={mentor}
                  onClick={() => updateMentorships(mentor)}
                />
                &ensp;
                {mentor}
              </label>
            ) : null;
          })}
        </Col>
        <Col>
          {mentors.map((mentor, index) => {
            return index >= 3 ? (
              <label key={index}>
                <input
                  type="checkbox"
                  name={mentor}
                  onClick={() => updateMentorships(mentor)}
                />
                &ensp;
                {mentor}
              </label>
            ) : null;
          })}
        </Col>
      </Row>
    );
  };

  return (
    <Card className="card-signup mentorships">
      <h1 className="text-center">Sign Up</h1>
      <CardBody>
        <p className="text-center">What markets do you work in?</p>
        <Label className="text-center w-100">
          You may select multiple options.
        </Label>
        {mapMentorships()}
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

export default Form6;
