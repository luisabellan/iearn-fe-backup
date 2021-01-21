// import external modules
import React, { useState } from "react";
import "./signup.scss";
import {
  Row,
  Col,
  Input,
  FormGroup,
  Label,
  Card,
  CardBody,
  FormFeedback,
} from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import classNames from "classnames";
import SwipeableViews from "react-swipeable-views";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const signUpSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Firstname too short")
      .required("Firstname is required"),
    lastName: Yup.string()
      .min(2, "Lastname too short")
      .required("Lastname is required"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password field is requred"),
    confirmPassword: Yup.string().when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Password and Confirm Password must match"
      ),
    }),
  });

  const socialSchema = Yup.object().shape({
    facebook: Yup.string().matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Invalid URL"
    ),
    instagram: Yup.string().matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Invalid URL"
    ),
    linkedin: Yup.string().matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Invalid URL"
    ),
  });

  const form1 = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const form2 = {
    facebook: "",
    instagram: "",
    linkedin: "",
  };

  const onSubmit = () => {
    setCurrentStep(1);
  };

  //   const { error, loading, login } = useAuth();

  return (
    <div className="container page-login">
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
            <Card className="card-login">
              <h1 className="text-center">New Member Onboarding</h1>
              <CardBody>
                <Formik
                  initialValues={form1}
                  validationSchema={signUpSchema}
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
                          <FormGroup>
                            <Label>First Name</Label>
                            <Input
                              id="firstName"
                              name="firstName"
                              type="text"
                              required
                              className={classNames("form-control", {
                                "login-warning":
                                  !!errors.firstName && !!touched.firstName,
                              })}
                              placeholder="John"
                              value={values.firstName}
                              onBlur={handleBlur("firstName")}
                              onChange={handleChange("firstName")}
                              invalid={
                                !!touched.firstName && !!errors.firstName
                              }
                            />
                            <FormFeedback>
                              {touched.firstName && errors.firstName}
                            </FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md="12">
                          <FormGroup>
                            <Label>Last Name</Label>
                            <Input
                              id="lastName"
                              name="lastName"
                              type="text"
                              required
                              className={classNames("form-control", {
                                "login-warning":
                                  !!errors.lastName && !!touched.lastName,
                              })}
                              placeholder="Doe"
                              value={values.lastName}
                              onBlur={handleBlur("lastName")}
                              onChange={handleChange("lastName")}
                              invalid={!!touched.lastName && !!errors.lastName}
                            />
                            <FormFeedback>
                              {touched.lastName && errors.lastName}
                            </FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md="12">
                          <FormGroup>
                            <Label>Email</Label>
                            <Input
                              id="email"
                              name="email"
                              type="text"
                              required
                              className={classNames("form-control", {
                                "login-warning":
                                  !!errors.email && !!touched.email,
                              })}
                              placeholder="john.doe@gmail.com"
                              value={values.email}
                              onBlur={handleBlur("email")}
                              onChange={handleChange("email")}
                              invalid={!!touched.email && !!errors.email}
                            />
                            <FormFeedback>
                              {touched.email && errors.email}
                            </FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md="12">
                          <FormGroup>
                            <Label>Password</Label>
                            <Input
                              id="password"
                              name="password"
                              type="password"
                              required
                              className={classNames("form-control", {
                                "login-warning":
                                  !!errors.password && !!touched.password,
                              })}
                              placeholder="************"
                              value={values.password}
                              onBlur={handleBlur("password")}
                              onChange={handleChange("password")}
                              invalid={!!touched.password && !!errors.password}
                            />
                            <FormFeedback>
                              {touched.password && errors.password}
                            </FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md="12">
                          <FormGroup>
                            <Label for="projectinput3">Confirm Password</Label>
                            <Input
                              id="confirmPassword"
                              name="confirmPassword"
                              type="password"
                              required
                              className={classNames("form-control", {
                                "login-warning":
                                  !!errors.confirmPassword &&
                                  !!touched.confirmPassword,
                              })}
                              placeholder="************"
                              value={values.confirmPassword || ""}
                              onBlur={handleBlur("confirmPassword")}
                              onChange={handleChange("confirmPassword")}
                              invalid={
                                !!touched.confirmPassword &&
                                !!errors.confirmPassword
                              }
                            />
                            <FormFeedback>
                              {touched.confirmPassword &&
                                errors.confirmPassword}
                            </FormFeedback>
                          </FormGroup>
                        </Col>
                        <FormGroup>
                          <Col md="12" className="text-center">
                            <button
                              type="submit"
                              color="primary"
                              block
                              className="button-main"
                              disabled={isLoading}
                              onClick={handleSubmit}
                            >
                              SIGN UP
                            </button>
                          </Col>
                        </FormGroup>
                      </fieldset>
                    </Formik>
                  )}
                </Formik>
              </CardBody>
            </Card>
            <Card className="card-login">
              <h1 className="text-center">New Member Onboarding</h1>
              <CardBody>
                <p className="text-center text-blue">
                  Add your social media and earn a hat!
                </p>
                <Formik
                  initialValues={form2}
                  validationSchema={socialSchema}
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
                          <FormGroup>
                            <Label>Facebook</Label>
                            <Input
                              id="facebook"
                              name="facebook"
                              type="text"
                              required
                              className={classNames("form-control", {
                                "login-warning":
                                  !!errors.facebook && !!touched.facebook,
                              })}
                              placeholder="facebook.com/jonnyd"
                              value={values.facebook}
                              onBlur={handleBlur("facebook")}
                              onChange={handleChange("facebook")}
                              invalid={!!touched.facebook && !!errors.facebook}
                            />
                            <FormFeedback>
                              {touched.facebook && errors.facebook}
                            </FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md="12">
                          <FormGroup>
                            <Label>Instagram</Label>
                            <Input
                              id="instagram"
                              name="instagram"
                              type="text"
                              required
                              className={classNames("form-control", {
                                "login-warning":
                                  !!errors.instagram && !!touched.instagram,
                              })}
                              placeholder="instagram.com/jonnyd"
                              value={values.instagram}
                              onBlur={handleBlur("instagram")}
                              onChange={handleChange("instagram")}
                              invalid={
                                !!touched.instagram && !!errors.instagram
                              }
                            />
                            <FormFeedback>
                              {touched.instagram && errors.instagram}
                            </FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md="12">
                          <FormGroup>
                            <Label>LinkedIn</Label>
                            <Input
                              id="linkedin"
                              name="linkedin"
                              type="text"
                              required
                              className={classNames("form-control", {
                                "login-warning":
                                  !!errors.linkedin && !!touched.linkedin,
                              })}
                              placeholder="linkedin.com/in/jonnyd"
                              value={values.linkedin}
                              onBlur={handleBlur("linkedin")}
                              onChange={handleChange("linkedin")}
                              invalid={!!touched.linkedin && !!errors.linkedin}
                            />
                            <FormFeedback>
                              {touched.linkedin && errors.linkedin}
                            </FormFeedback>
                          </FormGroup>
                        </Col>
                        <FormGroup>
                          <Col md="12" className="text-center">
                            <button
                              type="submit"
                              color="primary"
                              block
                              className="button-main"
                              disabled={isLoading}
                              onClick={handleSubmit}
                            >
                              SIGN UP
                            </button>
                          </Col>
                        </FormGroup>
                      </fieldset>
                    </Formik>
                  )}
                </Formik>
              </CardBody>
            </Card>
          </SwipeableViews>
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;
