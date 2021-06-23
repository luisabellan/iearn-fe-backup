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

const EditMarket = ({ isOpen, toggle }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const PasswordSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email field is required"),
  });

  const onSubmit = async () => {};

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
          {/* {error && (
            <Alert color="warning" fade={false}>
              There was an error while saving. Please retry after a while.
            </Alert>
          )} */}
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
                  {error && (
                    <Alert color="warning" fade={false}>
                      Incorrect Email/Password
                    </Alert>
                  )}
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
                        placeholder="john.doe@gmail.com"
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
                        will send a code to the email you input above. Use that
                        code to update your password in the next step.
                      </p>
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

export default EditMarket;
