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
    noneCheck: Yup.boolean(),
    fixflipCheck: Yup.boolean(),
    wholesalingCheck: Yup.boolean(),
    flippingCheck: Yup.boolean(),
    buyholdCheck: Yup.boolean(),
    leaseOptionCheck: Yup.boolean(),
    lendingCheck: Yup.boolean(),

    fixflip: Yup.string(),
    wholesaling: Yup.string(),
    flipping: Yup.string(),
    buyhold: Yup.string(),
    leaseOption: Yup.string(),
    lending: Yup.string(),
  });

  experienceSchema = experienceSchema.test(
    // this test is added additional to any other (build-in) tests
    "checkedTest",
    null, // we'll return error message ourself if needed
    (obj) => {
      // only testing the checkboxes here
      if (
        !(
          obj.noneCheck ||
          obj.fixflipCheck ||
          obj.wholesalingCheck ||
          obj.flippingCheck ||
          obj.buyholdCheck ||
          obj.leaseOptionCheck ||
          obj.lendingCheck
        )
      ) {
        setError("Check at least one checkbox"); // everything is fine
      } else {
        setError("");
      }
    }
  );

  const form3 = {
    noneCheck: false,

    fixflipCheck: false,
    fixflip: "",

    wholesalingCheck: false,
    wholesaling: "",

    flippingCheck: false,
    flipping: "",

    buyholdCheck: false,
    buyhold: "",

    leaseOptionCheck: false,
    leaseOption: "",

    lendingCheck: false,
    lending: "",
  };

  const onSubmit = (values) => {
    if (!error) {
      setCurrentStep(3);
      console.log(values);
    }
  };

  return (
    <Card className="card-signup">
      <h1 className="text-center">Sign Up</h1>
      <CardBody>
        <p className="text-center text-blue">
          Enter your investing experience below
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
                      <Col lg="6" className="text-right">
                        <Label>None</Label>
                      </Col>
                      <Col lg="1" className="pr-0 text-center">
                        <Input
                          type="checkbox"
                          onChange={(e) => {
                            handleChange("noneCheck")(e);
                            if (e.target.value) {
                              handleChange("fixflipCheck")(false);
                              handleChange("wholesalingCheck")(false);
                              handleChange("flippingCheck")(false);
                              handleChange("buyholdCheck")(false);
                              handleChange("leaseOptionCheck")(false);
                              handleChange("lendingCheck")(false);

                              handleChange("fixflip")("");
                              handleChange("wholesaling")("");
                              handleChange("flipping")("");
                              handleChange("buyhold")("");
                              handleChange("leaseOption")("");
                              handleChange("lending")("");
                            }
                          }}
                          checked={values.noneCheck || ""}
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col lg="6" className="text-right">
                        <Label>Fix &amp; Flip</Label>
                      </Col>
                      <Col lg="1" className="pr-0 text-center">
                        <Input
                          type="checkbox"
                          onChange={(e) => {
                            handleChange("fixflipCheck")(e);
                            handleChange("noneCheck")(false);

                            if (e.target.value) {
                              handleChange("fixflip")("");
                            }
                          }}
                          checked={values.fixflipCheck}
                        />
                      </Col>
                      {values.fixflipCheck ? (
                        <>
                          <Col lg="2">
                            <Input
                              type="number"
                              placeholder="0"
                              min="1"
                              value={values.fixflip || ""}
                              onChange={handleChange("fixflip")}
                            />
                          </Col>
                          <Col lg="2" className="pl-0">
                            <Label>years</Label>
                          </Col>
                        </>
                      ) : (
                        ""
                      )}
                    </Row>

                    <Row>
                      <Col lg="6" className="text-right">
                        <Label>Wholesaling</Label>
                      </Col>
                      <Col lg="1" className="pr-0 text-center">
                        <Input
                          type="checkbox"
                          onChange={(e) => {
                            handleChange("wholesalingCheck")(e);
                            handleChange("noneCheck")(false);

                            if (e.target.value) {
                              handleChange("wholesaling")("");
                            }
                          }}
                          checked={values.wholesalingCheck}
                        />
                      </Col>
                      {values.wholesalingCheck ? (
                        <>
                          <Col lg="3">
                            <Input
                              type="number"
                              placeholder="0"
                              min="1"
                              value={values.wholesaling || ""}
                              onChange={handleChange("wholesaling")}
                            />
                          </Col>
                          <Col lg="2" className="pl-0">
                            <Label>years</Label>
                          </Col>
                        </>
                      ) : (
                        ""
                      )}
                    </Row>

                    <Row>
                      <Col lg="6" className="text-right">
                        <Label>Flipping</Label>
                      </Col>
                      <Col lg="1" className="pr-0 text-center">
                        <Input
                          type="checkbox"
                          onChange={(e) => {
                            handleChange("flippingCheck")(e);
                            handleChange("noneCheck")(false);

                            if (e.target.value) {
                              handleChange("flipping")("");
                            }
                          }}
                          checked={values.flippingCheck}
                        />
                      </Col>
                      {values.flippingCheck ? (
                        <>
                          <Col lg="3">
                            <Input
                              type="number"
                              placeholder="0"
                              min="1"
                              value={values.flipping || ""}
                              onChange={handleChange("flipping")}
                            />
                          </Col>
                          <Col lg="2" className="pl-0">
                            <Label>years</Label>
                          </Col>
                        </>
                      ) : (
                        ""
                      )}
                    </Row>

                    <Row>
                      <Col lg="6" className="text-right">
                        <Label>Buy &amp; Hold</Label>
                      </Col>
                      <Col lg="1" className="pr-0 text-center">
                        <Input
                          type="checkbox"
                          onChange={(e) => {
                            handleChange("buyholdCheck")(e);
                            handleChange("noneCheck")(false);

                            if (e.target.value) {
                              handleChange("buyhold")("");
                            }
                          }}
                          checked={values.buyholdCheck}
                        />
                      </Col>
                      {values.buyholdCheck ? (
                        <>
                          <Col lg="3">
                            <Input
                              type="number"
                              placeholder="0"
                              min="1"
                              value={values.buyhold || ""}
                              onChange={handleChange("buyhold")}
                            />
                          </Col>

                          <Col lg="2" className="pl-0">
                            <Label>years</Label>
                          </Col>
                        </>
                      ) : (
                        ""
                      )}
                    </Row>

                    <Row>
                      <Col lg="6" className="text-right">
                        <Label>Lease Option</Label>
                      </Col>
                      <Col lg="1" className="pr-0 text-center">
                        <Input
                          type="checkbox"
                          onChange={(e) => {
                            handleChange("leaseOptionCheck")(e);
                            handleChange("noneCheck")(false);

                            if (e.target.value) {
                              handleChange("leaseOption")("");
                            }
                          }}
                          checked={values.leaseOptionCheck}
                        />
                      </Col>
                      {values.leaseOptionCheck ? (
                        <>
                          <Col lg="3">
                            <Input
                              type="number"
                              placeholder="0"
                              min="1"
                              value={values.leaseOption || ""}
                              onChange={handleChange("leaseOption")}
                            />
                          </Col>
                          <Col lg="2" className="pl-0">
                            <Label>years</Label>
                          </Col>
                        </>
                      ) : (
                        ""
                      )}
                    </Row>

                    <Row>
                      <Col lg="6" className="text-right">
                        <Label>Lending</Label>
                      </Col>
                      <Col lg="1" className="pr-0 text-center">
                        <Input
                          type="checkbox"
                          onChange={(e) => {
                            handleChange("lendingCheck")(e);
                            handleChange("noneCheck")(false);

                            if (e.target.value) {
                              handleChange("lending")("");
                            }
                          }}
                          checked={values.lendingCheck}
                        />
                      </Col>
                      {values.lendingCheck ? (
                        <>
                          <Col lg="3">
                            <Input
                              type="number"
                              placeholder="0"
                              min="1"
                              value={values.lending || ""}
                              onChange={handleChange("lending")}
                            />
                          </Col>
                          <Col lg="2" className="pl-0">
                            <Label>years</Label>
                          </Col>
                        </>
                      ) : (
                        ""
                      )}
                    </Row>

                    {error ? (
                      <p className="text-center text-error">
                        Check at least one checkbox.
                      </p>
                    ) : (
                      ""
                    )}
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
