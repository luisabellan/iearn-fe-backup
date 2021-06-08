import React, { useState } from "react";
import "../signup.scss";
import {
  Col,
  Input,
  FormGroup,
  Label,
  Card,
  CardBody,
  Row,
  FormFeedback,
} from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";

//Components
import Progress from "./Progress";

const Form2 = ({ currentStep, setCurrentStep, isLoading, gatherValues }) => {
  const [error] = useState("");

  let experienceSchema = Yup.object().shape({
    fixflip: Yup.string().required(),
    wholesaling: Yup.string().required(),
    flipping: Yup.string().required(),
    buyhold: Yup.string().required(),
    leaseOption: Yup.string().required(),
    lending: Yup.string().required(),
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
      let formValues = values;
      let exp = [];

      Object.entries(formValues).forEach(([key, val]) => {
        exp.push(JSON.parse(val));
      });

      gatherValues({ experience: exp }, 2);
      setCurrentStep(3);
    }
  };

  const mapOptions = (name, value) => {
    return (
      <>
        <option value=""></option>
        <option
          value={`{"text": "${name}", "value": "${value}", "minYears": 0, "maxYears": 0}`}
        >
          None
        </option>
        <option
          value={`{"minYears": 1, "text": "${name}", "value": "${value}", "maxYears": 3}`}
        >
          1-3
        </option>
        <option
          value={`{"minYears": 4, "text": "${name}", "value": "${value}", "maxYears": 6}`}
        >
          4-6
        </option>
        <option
          value={`{"minYears": 7, "text": "${name}", "value": "${value}", "maxYears": 10}`}
        >
          7-10
        </option>
        <option
          value={`{"minYears": 10, "text": "${name}", "value": "${value}", "maxYears": 0}`}
        >
          10+
        </option>
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
                        <Label>
                          Fix &amp; Flip <span className="required">*</span>
                        </Label>
                      </Col>
                      <Col xs="6" lg="3">
                        <Input
                          id="fixflip"
                          invalid={!!touched.fixflip && !!errors.fixflip}
                          type="select"
                          placeholder="0"
                          min="1"
                          value={values.fixflip || ""}
                          onChange={handleChange("fixflip")}
                        >
                          {mapOptions("Fix & Flip", "fixflip")}
                        </Input>
                      </Col>
                      <Col xs="12">
                        <FormFeedback>
                          {touched.fixflip && errors.fixflip}
                        </FormFeedback>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs="6" lg="6" className="text-right">
                        <Label>
                          Wholesaling <span className="required">*</span>
                        </Label>
                      </Col>
                      <Col xs="6" lg="3">
                        <Input
                          id="wholesaling"
                          invalid={
                            !!touched.wholesaling && !!errors.wholesaling
                          }
                          type="select"
                          placeholder="0"
                          min="1"
                          value={values.wholesaling || ""}
                          onChange={handleChange("wholesaling")}
                        >
                          {mapOptions("Wholesaling", "wholesaling")}
                        </Input>
                      </Col>
                      <Col xs="12">
                        <FormFeedback>
                          {touched.wholesaling && errors.wholesaling}
                        </FormFeedback>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs="6" lg="6" className="text-right">
                        <Label>
                          Flipping <span className="required">*</span>
                        </Label>
                      </Col>
                      <Col xs="6" lg="3">
                        <Input
                          id="flipping"
                          invalid={!!touched.flipping && !!errors.flipping}
                          type="select"
                          placeholder="0"
                          min="1"
                          value={values.flipping || ""}
                          onChange={handleChange("flipping")}
                        >
                          {mapOptions("Flipping", "flipping")}
                        </Input>
                      </Col>
                      <Col xs="12">
                        <FormFeedback>
                          {touched.flipping && errors.flipping}
                        </FormFeedback>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs="6" lg="6" className="text-right">
                        <Label>
                          Buy &amp; Hold <span className="required">*</span>
                        </Label>
                      </Col>
                      <Col xs="6" lg="3">
                        <Input
                          id="buyhold"
                          invalid={!!touched.buyhold && !!errors.buyhold}
                          type="select"
                          placeholder="0"
                          min="1"
                          value={values.buyhold || ""}
                          onChange={handleChange("buyhold")}
                        >
                          {mapOptions("Buy & Hold", "buyhold")}
                        </Input>
                      </Col>
                      <Col xs="12">
                        <FormFeedback>
                          {touched.buyhold && errors.buyhold}
                        </FormFeedback>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs="6" lg="6" className="text-right">
                        <Label>
                          Lease Option <span className="required">*</span>
                        </Label>
                      </Col>
                      <Col xs="6" lg="3">
                        <Input
                          id="leaseOption"
                          invalid={
                            !!touched.leaseOption && !!errors.leaseOption
                          }
                          type="select"
                          placeholder="0"
                          min="1"
                          value={values.leaseOption || ""}
                          onChange={handleChange("leaseOption")}
                        >
                          {mapOptions("Lease Option", "leaseOption")}
                        </Input>
                      </Col>
                      <Col xs="12">
                        <FormFeedback>
                          {touched.leaseOption && errors.leaseOption}
                        </FormFeedback>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs="6" lg="6" className="text-right">
                        <Label>
                          Lending <span className="required">*</span>
                        </Label>
                      </Col>
                      <Col xs="6" lg="3">
                        <Input
                          id="lending"
                          invalid={!!touched.lending && !!errors.lending}
                          type="select"
                          placeholder="0"
                          min="1"
                          value={values.lending || ""}
                          onChange={handleChange("lending")}
                        >
                          {mapOptions("Lending", "lending")}
                        </Input>
                      </Col>
                      <Col xs="12">
                        <FormFeedback>
                          {touched.lending && errors.lending}
                        </FormFeedback>
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
