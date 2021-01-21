// import external modules
import React, { useState } from "react";
import "./login.scss"
import {useHistory} from "react-router-dom";
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
import {Formik} from "formik";
import * as Yup from "yup";
import classNames from "classnames";

const Login = () => {
   const [isLoading, setIsLoading] = useState(false);

   let history = useHistory();

   const LoginSchema = Yup.object().shape({
      email: Yup.string().required("Email field is required"),
      password: Yup.string().required("Password field is required"),
    });

    const initialValues = {
      email: "",
      password: "",
    };

    const onSubmit = () => {
       console.log("Submitted")
    }

//   const { error, loading, login } = useAuth();


  return (
    <div className="container page-login">
       <Row className='full-height-vh'>
        <Col
          xs='12'
          className='d-flex align-items-center justify-content-center'>
          <Card className='card-login'>
            <CardBody>
              <h1>Subto Resource Center</h1>
              <Formik
                initialValues={initialValues}
                validationSchema={LoginSchema}
                onSubmit={onSubmit}>
                {({
                  handleSubmit,
                  handleBlur,
                  handleChange,
                  values,
                  touched,
                  errors,
                }) => (
                  <Formik className='pt-2'>
                    <fieldset disabled={isLoading}>
                      {/* {error && (
                        <Alert color='warning' fade={false}>
                          {error}
                        </Alert>
                      )} */}
                      <Col md='12'>
                        <FormGroup>
                          <Label>Email</Label>
                          <Input
                            id='email'
                            name='email'
                            type='text'
                            required
                            className={classNames("form-control", {
                              "login-warning":
                                !!errors.email && !!touched.email,
                            })}
                            placeholder='john.doe@gmail.com'
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
                      <Col md='12'>
                        <FormGroup>
                          <Label>Password</Label>
                          <Input
                            id='password'
                            name='password'
                            type='password'
                            required
                            className={classNames("form-control", {
                              "login-warning":
                                !!errors.password && !!touched.password,
                            })}
                            placeholder='************'
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
                      <FormGroup>
                        <Col md='12' className="text-center">
                          <button
                            type='submit'
                            color='primary'
                            block
                            className='button-main'
                            disabled={isLoading}
                            onClick={handleSubmit}>
                            LOGIN
                          </button>
                        </Col>
                        <Col md='12' className="text-center mt-3">
                          <p>Don't have an account yet? <button className="button-transparent">Sign Up</button></p>
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

export default Login;
