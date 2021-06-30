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

const RecoverPassword = ({ isOpen, toggle, forgotEmail, openSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const PasswordSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email field is required"),
    token: Yup.string().required(
      "Please enter the token you received in the email we sent you."
    ),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Password and Confirm Password must match"
      ),
    }),
  });

  const onSubmit = async (values) => {
    setIsLoading(true);
    const { confirmPassword, ...formValues } = values;
    api
      .post(`/users/reset`, formValues)
      .then(() => {
        setIsLoading(false);
        toggle();
        openSuccess();
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
        <ModalHeader toggle={() => toggle()}>Change Password</ModalHeader>
        <ModalBody>
          {error && (
            <Alert color="warning" fade={false}>
              There was an error. Please check if the token/email you input is correct
              or try again later.
            </Alert>
          )}
          <Formik
            initialValues={{
              email: forgotEmail,
              token: "",
              password: "",
              confirmPassword: "",
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
                    <p className="mt-2" style={{ fontSize: "14px" }}>
                      <span className="font-weight-bold">Note:</span> Please
                      check your email. We've sent you a recovery token. Use
                      that token below and type in your new password.
                    </p>
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
                    </FormGroup>
                    <FormGroup>
                      <Label>Token</Label>
                      <Input
                        id="token"
                        name="token"
                        type="text"
                        required
                        className={classNames("form-control", {
                          "login-warning": !!errors.token && !!touched.token,
                        })}
                        value={values.token}
                        onBlur={handleBlur("token")}
                        onChange={(e) => {
                          handleChange("token")(e);
                          setError(false);
                        }}
                        invalid={!!touched.token && !!errors.token}
                      />
                      <FormFeedback>
                        {touched.token && errors.token}
                      </FormFeedback>
                    </FormGroup>
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
                    <FormGroup>
                      <Label>Confirm Password</Label>
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
                        value={values.confirmPassword}
                        onBlur={handleBlur("confirmPassword")}
                        onChange={(e) => {
                          handleChange("confirmPassword")(e);
                          setError(false);
                        }}
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

export default RecoverPassword;
