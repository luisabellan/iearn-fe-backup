// import external modules
import React, { useState, useEffect } from "react";
import "./login.scss";
import { useHistory } from "react-router-dom";
import {
  Row,
  Col,
  Input,
  FormGroup,
  Label,
  Card,
  CardBody,
  FormFeedback,
  Alert,
} from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import classNames from "classnames";

//Context Providers
import withUserContext from "../../../utility/withContexts/withUser";

//Helpers
import { handleAuthorizationHeader } from "../../../api/helpers";
import api from "../../../api/api";

const Login = ({ user, setUser }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  let history = useHistory();

  useEffect(() => {
    if (user) {
      history.push(`/`);
    }
  }, []);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email field is required"),
    password: Yup.string().required("Password field is required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    setIsLoading(true);

    let { email, ...formValues } = values;
    formValues = {
      ...formValues,
      email: email.toLowerCase(),
    };

    api
      .post(`/users/login`, formValues)
      .then(({ data }) => {
        setIsLoading(false);
        localStorage.setItem("token", `JWT ${data.token}`);
        handleAuthorizationHeader();

        api.get(`/users/current`).then(({ data }) => {
          setUser(data);
          history.push(`/people/profile`);
        });
      })
      .catch((err) => {
        setIsLoading(false);
        setError(true);
      });
  };

  //   const { error, loading, login } = useAuth();

  return (
    <div className="container page-login">
      <Row className="full-height-vh">
        <Col
          xs="12"
          className="d-flex align-items-center justify-content-center"
        >
          <Card className="card-login">
            <CardBody>
              <h1>Forgot Password</h1>
              <Formik
                initialValues={initialValues}
                validationSchema={LoginSchema}
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
                      {error && (
                        <Alert color="warning" fade={false}>
                          Password is incorrect.
                        </Alert>
                      )}
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
                            onChange={(e) => {
                              handleChange("password")(e);
                              setError(false);
                            }}
                            invalid={!!touched.password && !!errors.password}
                          />
                          <FormFeedback>
                            {touched.password && errors.password}
                          </FormFeedback>
                        </FormGroup>
                      </Col>
                      <FormGroup>
                        <Col md="12" className="text-center">
                          <button
                            type="submit"
                            color="primary"
                            block="true"
                            className="button-main"
                            disabled={isLoading}
                            onClick={handleSubmit}
                          >
                            LOGIN
                          </button>
                        </Col>
                      </FormGroup>
                    </fieldset>
                  </Formik>
                )}
              </Formik>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default withUserContext(Login);
