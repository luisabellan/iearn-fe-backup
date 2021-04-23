import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import "./decisionTree.scss";
import { Link } from "react-router-dom";

//Assets
import questions from "./questions.json";

//Utils
// import { useWindowDimensions } from "../../Utils/utils";
import withTitleContext from "../../../../utility/withContexts/withTitle";

const DecisionTree = (props) => {
  let [current, setCurrent] = useState("fundingThisProject");

  useEffect(() => {
    props.setPageTitle("New Deal - Exit Strategy Tool");
    props.setActiveSubPage("Deals");
  });

  const mapQuestions = () => {
    if (questions[current].type === "question") {
      let choices = [...questions[current].choices];
      return (
        <Col className="question-wrapper" xl="10">
          <h1 className="text-center main-question font-weight-bold">
            {questions[current].question}
          </h1>
          <Row>
            {choices.map((choice, index) => {
              return (
                <Col xs="6" key={index}>
                  <div
                    className={`question-choice ${
                      questions[choice].answer === "Yes" ||
                      questions[choice].answer === "Successful?"
                        ? "yes"
                        : questions[choice].answer === "No" ||
                          questions[choice].answer === "Unsuccessful?"
                        ? "no"
                        : ""
                    }`}
                    onClick={() => setCurrent(choice)}
                  >
                    <div className="row h-100">
                      <div className="col my-auto">
                        <h1>{questions[choice].answer}</h1>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Col>
      );
    } else if (questions[current].type === "conclusion") {
      return (
        <Col className="question-wrapper text-center" xl="10">
          <h1 className="conclusion font-weight-bold">
            {questions[current].description}
          </h1>
          <Link to="/people/deals/new-deal"><button className="reset-button">Continue</button></Link>
        </Col>
      );
    }

    return (
      <Col className="question-wrapper text-center" xl="10">
        <h1 className="conclusion font-weight-bold">
          {questions[current].description}
        </h1>
        <button
          className="reset-button"
          onClick={() => setCurrent("fundingThisProject")}
        >
          Start over
        </button>
      </Col>
    );
  };

  return (
    <Row className="decision-tree">
      <Col>
        <Card>
          <CardBody className="px-2 py-4 px-md-4">
            <h1 className="sm-hidden">
              <span className="font-weight-bold text-green">$ubto</span>
              <span className="font-weight-light">tal</span>
            </h1>
            <div className="row justify-content-center">{mapQuestions()}</div>
            <Row>
              <Col xs="6">
                <Link to="/people/deals">
                  <button className="reset-button">Exit</button>
                </Link>
              </Col>
              <Col className="text-right" xs="6">
                <button
                  className="reset-button"
                  onClick={() => setCurrent("fundingThisProject")}
                >
                  Start Over
                </button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default withTitleContext(DecisionTree);
