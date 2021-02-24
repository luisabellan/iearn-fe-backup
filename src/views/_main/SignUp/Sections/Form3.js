import React, { useState } from "react";
import "../signup.scss";
import { Col, Input, FormGroup, Label, Card, CardBody, Row } from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";

//Components
import Progress from "./Progress";

const Form2 = ({ currentStep, setCurrentStep, isLoading }) => {
  const [error, setError] = useState("");

  let experienceSchema = Yup.object().shape({
    fixflip: Yup.string(),
    wholesaling: Yup.string(),
    flipping: Yup.string(),
    buyhold: Yup.string(),
    leaseOption: Yup.string(),
    lending: Yup.string(),
  });

  const form3 = {
    fixflip: "",
    wholesaling: "",
    flipping: "",
    buyhold: "",
    leaseOption: "",
    lending: "",
  };

  const onSubmit = (values) => {
    if (!error) {
      setCurrentStep(3);
      console.log(values);
    }
  };

  const mapOptions = () => {
    return (
      <>
        <option value="0">None</option>
        <option value="1-3">1-3</option>
        <option value="4-6">4-6</option>
        <option value="7-10">7-10</option>
        <option value="10+">10+</option>
      </>
    );
  };

  return (
    <Card className="card-signup">
      <h1 className="text-center">Sign Up</h1>
      <CardBody>
        <p className="text-center text-blue">
          Enter your <span className="font-weight-bold">years</span> of
          investing experience below
          <br />
          <span style={{ fontSize: `16px` }}>(select all that apply)</span>
        </p>
        <Formik
          initialValues={form3}
          validationSchema={experienceSchema}
          onSubmit={onSubmit}
        >
          {({
            handleSubmit,
            handleBlur,
            handleChange,
            values,
            touched,
            errors,
          }) => (
            <Formik className="pt-2">
              <fieldset disabled={isLoading}>
                {/* {error && (
                        <Alert color='warning' fade={false}>
                          {error}
                        </Alert>
                      )} */}
                <Col md="12">
                  <FormGroup id="section-experience">
                    <Row>
                      <Col xs="6" lg="6" className="text-right">
                        <Label>Fix &amp; Flip <span className="required">*</span></Label>
                      </Col>
                      <Col xs="6" lg="3">
                        <Input
                          type="select"
                          placeholder="0"
                          min="1"
                          value={values.fixflip || ""}
                          onChange={handleChange("fixflip")}
                        >
                          {mapOptions()}
                        </Input>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs="6" lg="6" className="text-right">
                        <Label>Wholesaling <span className="required">*</span></Label>
                      </Col>
                      <Col xs="6" lg="3">
                        <Input
                          type="select"
                          placeholder="0"
                          min="1"
                          value={values.wholesaling || ""}
                          onChange={handleChange("wholesaling")}
                        >
                          {mapOptions()}
                        </Input>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs="6" lg="6" className="text-right">
                        <Label>Flipping <span className="required">*</span></Label>
                      </Col>
                      <Col xs="6" lg="3">
                        <Input
                          type="select"
                          placeholder="0"
                          min="1"
                          value={values.flipping || ""}
                          onChange={handleChange("flipping")}
                        >
                          {mapOptions()}
                        </Input>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs="6" lg="6" className="text-right">
                        <Label>Buy &amp; Hold <span className="required">*</span></Label>
                      </Col>
                      <Col xs="6" lg="3">
                        <Input
                          type="select"
                          placeholder="0"
                          min="1"
                          value={values.buyhold || ""}
                          onChange={handleChange("buyhold")}
                        >
                          {mapOptions()}
                        </Input>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs="6" lg="6" className="text-right">
                        <Label>Lease Option <span className="required">*</span></Label>
                      </Col>
                      <Col xs="6" lg="3">
                        <Input
                          type="select"
                          placeholder="0"
                          min="1"
                          value={values.leaseOption || ""}
                          onChange={handleChange("leaseOption")}
                        >
                          {mapOptions()}
                        </Input>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs="6" lg="6" className="text-right">
                        <Label>Lending <span className="required">*</span></Label>
                      </Col>
                      <Col xs="6" lg="3">
                        <Input
                          type="select"
                          placeholder="0"
                          min="1"
                          value={values.lending || ""}
                          onChange={handleChange("lending")}
                        >
                          {mapOptions()}
                        </Input>
                      </Col>
                    </Row>
                  </FormGroup>
                </Col>
                <Col md="12" className="text-center">
                  <button
                    type="submit"
                    color="primary"
                    className="button-main set-transparent ls-5"
                    disabled={isLoading}
                    onClick={() => {
                      setCurrentStep(1);
                    }}
                  >
                    BACK
                  </button>

                  <button
                    type="submit"
                    color="primary"
                    className="button-main ml-2 ls-5"
                    disabled={isLoading}
                    onClick={handleSubmit}
                  >
                    NEXT
                  </button>
                </Col>
              </fieldset>
            </Formik>
          )}
        </Formik>
        <Progress {...{ currentStep }} />
      </CardBody>
    </Card>
  );
};

export default Form2;
