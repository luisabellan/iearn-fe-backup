import React, { useState } from "react";
import "react-image-crop/dist/ReactCrop.css";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Alert,
  Col,
  Label,
  FormGroup,
  Input,
  FormFeedback,
} from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import classNames from "classnames";
import api from "../../../../api/api";

const ForgotPassword = ({ isOpen, toggle, setForgotEmail, openRecover }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const PasswordSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email field is required"),
  });

  const onSubmit = async (values) => {
    setIsLoading(true);
    api
      .post(`/users/recover`, values)
      .then(() => {
        setForgotEmail(values.email);
        toggle();
        openRecover();
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
      });
  };

  return (
    <>
      <Modal
        {...{ isOpen, toggle }}
        size="md"
        centered={true}
        className="edit-market"
      >
        <ModalHeader toggle={() => toggle()}>Forgot Password</ModalHeader>
        <ModalBody>
          {error && (
            <Alert color="warning" fade={false} style={{ fontSize: "14px" }}>
              The email below does not exist. Please try again.
            </Alert>
          )}
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={PasswordSchema}
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
                  <Col md="12">
                    <FormGroup>
                      <Label>Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="text"
                        required
                        className={classNames("form-control", {
                          "login-warning": !!errors.email && !!touched.email,
                        })}
                        placeholder=""
                        value={values.email}
                        onBlur={handleBlur("email")}
                        onChange={(e) => {
                          handleChange("email")(e);
                          setError(false);
                        }}
                        invalid={!!touched.email && !!errors.email}
                      />
                      <FormFeedback>
                        {touched.email && errors.email}
                      </FormFeedback>
                      <p className="mt-2" style={{ fontSize: "14px" }}>
                        <span className="font-weight-bold">Note:</span> This
                        will send a recovery token to the email you input above.
                        Use that token to update your password in the next step.
                      </p>
                    </FormGroup>
                  </Col>
                  <Col md="12" className="text-center mt-0">
                    <p>
                      <button
                        className="button-transparent"
                        onClick={() => {
                          toggle();
                          openRecover();
                        }}
                      >
                        Already have your recovery token?
                      </button>
                    </p>
                  </Col>
                  <FormGroup>
                    <Col md="12" className="text-center">
                      <button
                        type="submit"
                        color="primary"
                        block="true"
                        className="button-submain mt-2"
                        disabled={isLoading}
                        onClick={handleSubmit}
                      >
                        SUBMIT
                      </button>
                    </Col>
                  </FormGroup>
                </fieldset>
              </Formik>
            )}
          </Formik>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ForgotPassword;
