import React, { useState, useEffect, useRef, useCallback } from "react";
import "react-image-crop/dist/ReactCrop.css";
import {
  Button,
  Form,
  FormGroup,
  Modal,
  ModalBody,
  ModalHeader,
  Label,
  Alert,
  Col,
  Input,
  FormFeedback,
  Row,
} from "reactstrap";
import classNames from "classnames";
import { Formik } from "formik";
import * as Yup from "yup";

//Context
import withUser from "../../../../../utility/withContexts/withUser";

//API
import api from "../../../../../api/api";

//Components
import ToastSuccess from "../../../../../components/toasts/success";

const EditProfile = ({ user, setUser, isOpen, toggle }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  //Formik Properties
  const editProfileValidationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required."),
    lastName: Yup.string().required("Last name is required."),
    location: Yup.string(),
    businessPhone: Yup.string(),
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
    twitter: Yup.string().matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Invalid URL"
    ),
    slack: Yup.string().matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Invalid URL"
    ),
    discord: Yup.string().matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Invalid URL"
    ),
  });

  const editProfileInitialValues = {
    firstName: user.firstName,
    lastName: user.lastName,
    location: user.location,
    businessPhone: user.businessPhone,
    facebook: user.facebook || "",
    twitter: user.twitter || "",
    instagram: user.instagram || "",
    linkedin: user.linkedin || "",
    slack: user.slack || "",
    discord: user.discord || "",
  };

  const onSubmit = async (values) => {
    setIsLoading(true);
    api
      .patch(`/users/${user.id}`, values)
      .then((res) => {
        setIsLoading(false);
        setUser(res.data);
        setSuccess(true);

        setTimeout(() => {
          setSuccess(false);
        }, 4000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <ToastSuccess {...{ isOpen: success }} />
      <Modal {...{ isOpen, toggle }} size="lg" centered={true}>
        <ModalHeader toggle={() => toggle()}>
          Update Profile Information
        </ModalHeader>
        <ModalBody>
          {error && (
            <Alert color="warning" fade={false}>
              There was an error while saving. Please retry after a while.
              {/* <ul className="pl-3 mb-0">
                {addEmployeeError.response.data.errors.map(({ message }) => (
                  <li key={message}>{message}</li>
                ))}
              </ul> */}
            </Alert>
          )}
          <Formik
            enableReinitialize
            initialValues={editProfileInitialValues}
            validationSchema={editProfileValidationSchema}
            onSubmit={onSubmit}
          >
            {({
              handleSubmit,
              handleBlur,
              handleChange,
              values,
              touched,
              errors,
            }) => {
              return (
                <Form className="px-3">
                  <fieldset disabled={isLoading}>
                    {error && (
                      <Alert color="warning" fade={false}>
                        There was an error while saving. Please check the
                        information you input.
                      </Alert>
                    )}
                    <p>Basic Info</p>
                    <hr className="mt-0" />
                    <Row>
                      <Col md="6">
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
                            value={values.firstName}
                            onBlur={handleBlur("firstName")}
                            onChange={(e) => {
                              handleChange("firstName")(e);
                              setError(false);
                            }}
                            invalid={!!touched.firstName && !!errors.firstName}
                          />
                          <FormFeedback>
                            {touched.firstName && errors.firstName}
                          </FormFeedback>
                        </FormGroup>
                      </Col>
                      <Col md="6">
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
                            value={values.lastName}
                            onBlur={handleBlur("lastName")}
                            onChange={(e) => {
                              handleChange("lastName")(e);
                              setError(false);
                            }}
                            invalid={!!touched.lastName && !!errors.lastName}
                          />
                          <FormFeedback>
                            {touched.lastName && errors.lastName}
                          </FormFeedback>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <Label>Location (City, State)</Label>
                          <Input
                            id="location"
                            name="location"
                            type="text"
                            required
                            className={classNames("form-control", {
                              "login-warning":
                                !!errors.location && !!touched.location,
                            })}
                            placeholder="Kansas City, Kansas"
                            value={values.location}
                            onBlur={handleBlur("location")}
                            onChange={(e) => {
                              handleChange("location")(e);
                              setError(false);
                            }}
                            invalid={!!touched.location && !!errors.location}
                          />
                          <FormFeedback>
                            {touched.location && errors.location}
                          </FormFeedback>
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <Label>Phone Number</Label>
                          <Input
                            id="businessPhone"
                            name="businessPhone"
                            type="text"
                            required
                            placeholder="+1 (555) 555-5555"
                            className={classNames("form-control", {
                              "login-warning":
                                !!errors.businessPhone &&
                                !!touched.businessPhone,
                            })}
                            value={values.businessPhone}
                            onBlur={handleBlur("businessPhone")}
                            onChange={handleChange("businessPhone")}
                            invalid={
                              !!touched.businessPhone && !!errors.businessPhone
                            }
                          />
                          <FormFeedback>
                            {touched.businessPhone && errors.businessPhone}
                          </FormFeedback>
                        </FormGroup>
                      </Col>
                    </Row>
                    <p className="mt-2">Social Media</p>
                    <hr className="mt-0" />
                    <Row>
                      <Col md="6">
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
                            placeholder={`facebook.com/${user.lastName}`}
                            value={values.facebook}
                            onBlur={handleBlur("facebook")}
                            onChange={(e) => {
                              handleChange("facebook")(e);
                              setError(false);
                            }}
                            invalid={!!touched.facebook && !!errors.facebook}
                          />
                          <FormFeedback>
                            {touched.facebook && errors.facebook}
                          </FormFeedback>
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <Label>Twitter</Label>
                          <Input
                            id="twitter"
                            name="twitter"
                            type="text"
                            required
                            placeholder={`twitter.com/${user.lastName}`}
                            className={classNames("form-control", {
                              "login-warning":
                                !!errors.twitter && !!touched.twitter,
                            })}
                            value={values.twitter}
                            onBlur={handleBlur("twitter")}
                            onChange={(e) => {
                              handleChange("twitter")(e);
                              setError(false);
                            }}
                            invalid={!!touched.twitter && !!errors.twitter}
                          />
                          <FormFeedback>
                            {touched.twitter && errors.twitter}
                          </FormFeedback>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
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
                            placeholder={`instagram.com/${user.lastName}`}
                            value={values.instagram}
                            onBlur={handleBlur("instagram")}
                            onChange={(e) => {
                              handleChange("instagram")(e);
                              setError(false);
                            }}
                            invalid={!!touched.instagram && !!errors.instagram}
                          />
                          <FormFeedback>
                            {touched.instagram && errors.instagram}
                          </FormFeedback>
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <Label>LinkedIn</Label>
                          <Input
                            id="linkedin"
                            name="linkedin"
                            type="text"
                            required
                            placeholder={`linkedin.com/${user.lastName}`}
                            className={classNames("form-control", {
                              "login-warning":
                                !!errors.linkedin && !!touched.linkedin,
                            })}
                            value={values.linkedin}
                            onBlur={handleBlur("linkedin")}
                            onChange={(e) => {
                              handleChange("linkedin")(e);
                              setError(false);
                            }}
                            invalid={!!touched.linkedin && !!errors.linkedin}
                          />
                          <FormFeedback>
                            {touched.linkedin && errors.linkedin}
                          </FormFeedback>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <Label>Slack</Label>
                          <Input
                            id="slack"
                            name="slack"
                            type="text"
                            required
                            className={classNames("form-control", {
                              "login-warning":
                                !!errors.slack && !!touched.slack,
                            })}
                            placeholder={`acmeco.slack.com/team/${user.lastName}`}
                            value={values.slack}
                            onBlur={handleBlur("slack")}
                            onChange={(e) => {
                              handleChange("slack")(e);
                              setError(false);
                            }}
                            invalid={!!touched.slack && !!errors.slack}
                          />
                          <FormFeedback>
                            {touched.slack && errors.slack}
                          </FormFeedback>
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <Label>Discord</Label>
                          <Input
                            id="discord"
                            name="discord"
                            type="text"
                            required
                            placeholder={`discord.gg/${user.lastName}`}
                            className={classNames("form-control", {
                              "login-warning":
                                !!errors.discord && !!touched.discord,
                            })}
                            value={values.discord}
                            onBlur={handleBlur("discord")}
                            onChange={(e) => {
                              handleChange("discord")(e);
                              setError(false);
                            }}
                            invalid={!!touched.discord && !!errors.discord}
                          />
                          <FormFeedback>
                            {touched.discord && errors.discord}
                          </FormFeedback>
                        </FormGroup>
                      </Col>
                    </Row>
                    <div className="row">
                      <div className="col-6">
                        <Button
                          className="mt-2 mb-2"
                          block
                          size="md"
                          color="secondary"
                          onClick={() => toggle()}
                          disabled={isLoading}
                        >
                          BACK
                        </Button>
                      </div>
                      <div className="col-6">
                        <Button
                          className="mt-2 mb-2"
                          block
                          size="md"
                          color="primary"
                          type="submit"
                          onClick={handleSubmit}
                          disabled={isLoading}
                        >
                          SAVE
                        </Button>
                      </div>
                    </div>
                  </fieldset>
                </Form>
              );
            }}
          </Formik>
        </ModalBody>
      </Modal>
    </>
  );
};

export default withUser(EditProfile);
