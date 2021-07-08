import React, { useState } from "react";
import {
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
  Card,
  CardBody,
  Alert,
} from "reactstrap";
import classNames from "classnames";
import { Formik } from "formik";
import "../settings.scss";

import { updatePasswordSchema } from "./constants";

//Context
import withUser from "../../../../utility/withContexts/withUser";

//API
import api from "../../../../api/api";

//Components
import ToastSuccess from "../../../../components/toasts/success";

const accountSettings = ({ user }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const onSubmitPassword = (values) => {
    setIsLoading(true);

    api
      .post(`/users/login`, {
        email: user.email,
        password: values.currentPassword,
      })
      .then(() => {
        api
          .patch(`/usersettings/${user.id}`, {
            id: user.id,
            password: values.password,
          })
          .then(() => {
            setSuccess(true);

            setTimeout(() => {
              setSuccess(false);
            }, 4000);
          })
          .catch(() => {
            setError(
              `There was an error while saving. Please try again later.`
            );
          });
      })
      .catch(() => {
        setError("The current password you entered was incorrect.");
        setIsLoading(false);
      });
  };

  // const onSubmitBilling = () => {
  //   alert(`success billing`);
  // };

  return (
    <>
      <ToastSuccess {...{ isOpen: success }} />
      <Card>
        <CardBody>
          <div className="row justify-content-center pb-4">
            <div className="col-lg-11">
              <Formik
                enableReinitialize
                initialValues={{
                  currentPassword: "",
                  password: "",
                  confirmPassword: "",
                }}
                validationSchema={updatePasswordSchema}
                onSubmit={onSubmitPassword}
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
                    <Form className="px-lg-3">
                      <fieldset disabled={isLoading}>
                        <Row className="mt-4">
                          <Col>
                            <Row>
                              <Col>
                                <h2 className="font-weight-bold">
                                  Update Password
                                </h2>
                              </Col>
                            </Row>
                            <Row className="mt-2">
                              <Col xl="6">
                                {error && (
                                  <Alert color="warning" fade={true}>
                                    {error}
                                  </Alert>
                                )}
                                <FormGroup className="mb-1 mt-4">
                                  <Label>Current Password</Label>
                                  <Input
                                    id="currentPassword"
                                    name="currentPassword"
                                    type="password"
                                    required
                                    className={classNames("form-control", {
                                      "login-warning":
                                        !!errors.currentPassword &&
                                        !!touched.currentPassword,
                                    })}
                                    value={values.currentPassword}
                                    onBlur={handleBlur("currentPassword")}
                                    onChange={(e) => {
                                      handleChange("currentPassword")(e);
                                      setError("");
                                    }}
                                    invalid={
                                      !!touched.currentPassword &&
                                      !!errors.currentPassword
                                    }
                                  />
                                  <FormFeedback>
                                    {touched.currentPassword &&
                                      errors.currentPassword}
                                  </FormFeedback>
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row className="mt-2">
                              <Col xl="6">
                                <FormGroup className="mb-1">
                                  <Label>New Password</Label>
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
                                      setError("");
                                    }}
                                    invalid={
                                      !!touched.password && !!errors.password
                                    }
                                  />
                                  <FormFeedback>
                                    {touched.password && errors.password}
                                  </FormFeedback>
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xl="6">
                                <FormGroup className="mb-0 mt-2">
                                  <Label>Confirm New Password</Label>
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
                                      setError("");
                                    }}
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
                              <Col
                                xl={{ size: 3, offset: 2 }}
                                xs={{ size: 6, offset: 6 }}
                              >
                                <button
                                  className="button-submain mt-3"
                                  onClick={handleSubmit}
                                >
                                  Save
                                </button>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </fieldset>
                    </Form>
                  );
                }}
              </Formik>
              {/* <hr /> */}
            </div>
          </div>
          {/* <div className="row justify-content-center">
            <div className="col-lg-11">
              <Formik
                enableReinitialize
                initialValues={{
                  cardName: "",
                  address: "",
                  city: "",
                  state: "",
                  zip: "",
                  cardNumber: "",
                  cardExpiration: "",
                }}
                validationSchema={updateBillingSchema}
                onSubmit={onSubmitBilling}
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
                    <Form className="px-lg-3">
                      <fieldset disabled={isLoading}>
                        <Row className="my-4">
                          <Col>
                            <Row>
                              <Col>
                                <h2 className="font-weight-bold">
                                  Update Billing Information
                                </h2>
                              </Col>
                            </Row>
                            <Row className="mt-2">
                              <Col xl="6">
                                <FormGroup className="mb-0">
                                  <Label>Name on Card</Label>
                                  <Input
                                    id="cardName"
                                    name="cardName"
                                    type="text"
                                    placeholder="Full Name"
                                    required
                                    className={classNames("form-control", {
                                      "login-warning":
                                        !!errors.cardName && !!touched.cardName,
                                    })}
                                    value={values.cardName}
                                    onBlur={handleBlur("cardName")}
                                    onChange={handleChange("cardName")}
                                    invalid={
                                      !!touched.cardName && !!errors.cardName
                                    }
                                  />
                                  <FormFeedback>
                                    {touched.cardName && errors.cardName}
                                  </FormFeedback>

                                  <Label className="mt-1">Street Address</Label>
                                  <Input
                                    id="address"
                                    name="address"
                                    type="text"
                                    placeholder="123 Winding Way"
                                    required
                                    className={classNames("form-control", {
                                      "login-warning":
                                        !!errors.address && !!touched.address,
                                    })}
                                    value={values.address}
                                    onBlur={handleBlur("address")}
                                    onChange={handleChange("address")}
                                    invalid={
                                      !!touched.address && !!errors.address
                                    }
                                  />
                                  <FormFeedback>
                                    {touched.address && errors.address}
                                  </FormFeedback>

                                  <Row>
                                    <Col xl="6" sm="12">
                                      <Label className="mt-1">City</Label>
                                      <Input
                                        id="city"
                                        name="city"
                                        type="text"
                                        placeholder="Small Town"
                                        required
                                        className={classNames("form-control", {
                                          "login-warning":
                                            !!errors.city && !!touched.city,
                                        })}
                                        value={values.city}
                                        onBlur={handleBlur("city")}
                                        onChange={handleChange("city")}
                                        invalid={
                                          !!touched.city && !!errors.city
                                        }
                                      />
                                      <FormFeedback>
                                        {touched.city && errors.city}
                                      </FormFeedback>
                                    </Col>
                                    <Col xl="3" sm="6">
                                      <Label className="mt-1">State</Label>
                                      <Input
                                        id="state"
                                        name="state"
                                        type="select"
                                        required
                                        className={classNames("form-control", {
                                          "login-warning":
                                            !!errors.state && !!touched.state,
                                        })}
                                        value={values.state}
                                        onBlur={handleBlur("state")}
                                        onChange={handleChange("state")}
                                        invalid={
                                          !!touched.state && !!errors.state
                                        }
                                      >
                                        <option value="">-</option>
                                        <option value="AK">AK</option>
                                      </Input>
                                      <FormFeedback>
                                        {touched.state && errors.state}
                                      </FormFeedback>
                                    </Col>
                                    <Col xl="3" sm="6">
                                      <Label className="mt-1">Zip</Label>
                                      <Input
                                        id="zip"
                                        name="zip"
                                        type="number"
                                        placeholder="12345"
                                        required
                                        className={classNames("form-control", {
                                          "login-warning":
                                            !!errors.zip && !!touched.zip,
                                        })}
                                        value={values.zip}
                                        onBlur={handleBlur("zip")}
                                        onChange={handleChange("zip")}
                                        invalid={!!touched.zip && !!errors.zip}
                                      />
                                      <FormFeedback>
                                        {touched.zip && errors.zip}
                                      </FormFeedback>
                                    </Col>
                                  </Row>
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xl="8">
                                <Row>
                                  <Col xl="9">
                                    <FormGroup>
                                      <Row>
                                        <Col xl="6">
                                          <Label className="mt-1">
                                            Card Number{" "}
                                            <img src={cards} alt="Cards" />
                                          </Label>
                                          <Input
                                            id="cardNumber"
                                            name="cardNumber"
                                            type="text"
                                            required
                                            placeholder="1111 1111 1111 1111"
                                            className={classNames(
                                              "form-control",
                                              {
                                                "login-warning":
                                                  !!errors.cardNumber &&
                                                  !!touched.cardNumber,
                                              }
                                            )}
                                            value={values.cardNumber}
                                            onBlur={handleBlur("cardNumber")}
                                            onChange={handleChange(
                                              "cardNumber"
                                            )}
                                            invalid={
                                              !!touched.cardNumber &&
                                              !!errors.cardNumber
                                            }
                                          />
                                          <FormFeedback>
                                            {touched.cardNumber &&
                                              errors.cardNumber}
                                          </FormFeedback>
                                        </Col>

                                        <Col sm="6">
                                          <Label className="mt-1">
                                            Expiration Date
                                          </Label>
                                          <Input
                                            id="cardExpiration"
                                            name="cardExpiration"
                                            type="text"
                                            placeholder="02/26"
                                            required
                                            className={classNames(
                                              "form-control",
                                              {
                                                "login-warning":
                                                  !!errors.cardExpiration &&
                                                  !!touched.cardExpiration,
                                              }
                                            )}
                                            value={values.cardExpiration}
                                            onBlur={handleBlur(
                                              "cardExpiration"
                                            )}
                                            onChange={handleChange(
                                              "cardExpiration"
                                            )}
                                            invalid={
                                              !!touched.cardExpiration &&
                                              !!errors.cardExpiration
                                            }
                                          />
                                          <FormFeedback>
                                            {touched.cardExpiration &&
                                              errors.cardExpiration}
                                          </FormFeedback>
                                        </Col>

                                        <Col sm="6" className="desktop-hidden">
                                          <button
                                            className="button-submain mt-3 mt-md-4"
                                            onClick={handleSubmit}
                                          >
                                            Use Different Method
                                          </button>
                                        </Col>
                                      </Row>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </Col>
                              <Col
                                xl="3"
                                className="sm-hidden mobile-hidden tablet-hidden tab-hidden"
                              >
                                <button
                                  className="button-submain mt-xl-4 mt-lg-3"
                                  onClick={handleSubmit}
                                >
                                  Use Different Method
                                </button>
                              </Col>
                            </Row>
                            <Row>
                              <Col xl="3" xs="6">
                                <button
                                  className="button-submain"
                                  onClick={handleSubmit}
                                >
                                  Back
                                </button>
                              </Col>
                              <Col xl={{size: 3, offset: 5}} xs="6">
                                <button
                                  className="button-submain"
                                  onClick={handleSubmit}
                                >
                                  Save
                                </button>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </fieldset>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
         */}
        </CardBody>
      </Card>
    </>
  );
};

export default withUser(accountSettings);
