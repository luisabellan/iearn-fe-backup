import React from "react";
import { useHistory, Link } from "react-router-dom";
import "../signup.scss";
import {
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

//Components
import Progress from "./Progress";

const Form1 = ({ currentStep, setCurrentStep, isLoading }) => {
  let history = useHistory();

  const signUpSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Firstname too short")
      .required("First Name is required"),
    lastName: Yup.string()
      .min(2, "Last Name too short")
      .required("Last Name is required"),
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

  const form1 = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const onSubmit = () => {
    setCurrentStep(1);
  };

  return (
    <Card className="card-signup">
      <h1 className="text-center">Sign Up</h1>
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
                    <Label>First Name <span className="required">*</span></Label>
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
                      invalid={!!touched.firstName && !!errors.firstName}
                    />
                    <FormFeedback>
                      {touched.firstName && errors.firstName}
                    </FormFeedback>
                  </FormGroup>
                </Col>
                <Col md="12">
                  <FormGroup>
                    <Label>Last Name <span className="required">*</span></Label>
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
                    <Label>Email <span className="required">*</span></Label>
                    <Input
                      id="email"
                      name="email"
                      type="text"
                      required
                      className={classNames("form-control", {
                        "login-warning": !!errors.email && !!touched.email,
                      })}
                      placeholder="john.doe@gmail.com"
                      value={values.email}
                      onBlur={handleBlur("email")}
                      onChange={handleChange("email")}
                      invalid={!!touched.email && !!errors.email}
                    />
                    <FormFeedback>{touched.email && errors.email}</FormFeedback>
                  </FormGroup>
                </Col>
                <Col md="12">
                  <FormGroup>
                    <Label>Password <span className="required">*</span></Label>
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
                    <Label for="projectinput3">Confirm Password <span className="required">*</span></Label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      required
                      className={classNames("form-control", {
                        "login-warning":
                          !!errors.confirmPassword && !!touched.confirmPassword,
                      })}
                      placeholder="************"
                      value={values.confirmPassword || ""}
                      onBlur={handleBlur("confirmPassword")}
                      onChange={handleChange("confirmPassword")}
                      invalid={
                        !!touched.confirmPassword && !!errors.confirmPassword
                      }
                    />
                    <FormFeedback>
                      {touched.confirmPassword && errors.confirmPassword}
                    </FormFeedback>
                  </FormGroup>
                </Col>
                <FormGroup>
                  <Col md="12" className="text-center">
                    <button
                      type="submit"
                      color="primary"
                      className="button-main ls-2"
                      disabled={isLoading}
                      onClick={handleSubmit}
                    >
                      NEXT
                    </button>
                  </Col>
                  <div className="col-md-12">
                    <p className="subtext text-center mt-2">
                      Signup with{" "}
                      <a
                        href="http://google.com"
                        className="button-transparent"
                      >
                        Google
                      </a>{" "}
                      or{" "}
                      <Link to="/" className="button-transparent">
                        Social Media Account
                      </Link>
                    </p>
                  </div>
                </FormGroup>
              </fieldset>
            </Formik>
          )}
        </Formik>
        <Progress {...{ currentStep }} />
        <Col md="12" className="text-center mt-3">
          <p>
            Already have an account?{" "}
            <button
              className="button-transparent"
              onClick={() => history.push("/login")}
            >
              Login
            </button>
          </p>
        </Col>
      </CardBody>
    </Card>
  );
};

export default Form1;
