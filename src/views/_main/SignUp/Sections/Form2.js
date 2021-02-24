import React from "react";
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

const Form2 = ({ currentStep, setCurrentStep, isLoading }) => {
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

  const form2 = {
    facebook: "",
    instagram: "",
    linkedin: "",
  };

  const onSubmit = () => {
    setCurrentStep(2);
  };

  return (
    <Card className="card-signup">
      <h1 className="text-center">Sign Up</h1>
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
                      invalid={!!touched.instagram && !!errors.instagram}
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
                      className="button-main set-transparent ls-5"
                      disabled={isLoading}
                      onClick={() => {
                        setCurrentStep(0);
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
                </FormGroup>
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
