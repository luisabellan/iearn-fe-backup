import React, { Fragment, useState } from "react";
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
} from "reactstrap";
import classNames from "classnames";
import { Formik } from "formik";
import "../settings.scss";

import { updateContact } from "./constants";

//Context
import withUser from "../../../../utility/withContexts/withUser";

//API
import api from "../../../../api/api";

//Components
import ToastSuccess from "../../../../components/toasts/success";

//States
import states from "../../SignUp/json/states.json";
//Source: https://gist.github.com/mshafrir/2646763

const contactSettings = ({ user, setUser }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmitBilling = (values) => {
    setIsLoading(true);

    let { homeZip, businessZip, ...formValues } = values;
    formValues.homeZip = parseInt(homeZip);
    formValues.businessZip = parseInt(businessZip);

    api.patch(`/users/${user.id}`, formValues).then((res) => {
      setUser(res.data);
      setSuccess(true);
      setIsLoading(false);
      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    });
  };
  return (
    <Fragment>
      <ToastSuccess {...{ isOpen: success }} />
      <Card>
        <CardBody>
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <Formik
                enableReinitialize
                initialValues={{
                  homeAddress: user.homeAddress || "",
                  homeCity: user.homeCity || "",
                  homeState: user.homeState || "",
                  homeZip: user.homeZip || "",
                  homePhone: user.homePhone || "",
                  homeEmail: user.homeEmail || "",
                  businessAddress: user.businessAddress || "",
                  businessCity: user.businessCity || "",
                  businessState: user.businessState || "",
                  businessZip: user.businessZip || "",
                  businessPhone: user.businessPhone || "",
                  businessEmail: user.businessEmail || "",
                  linkedin: user.linkedin || "",
                  facebook: user.facebook || "",
                  instagram: user.instagram || "",
                  twitter: user.twitter || "",
                  slack: user.slack || "",
                  discord: user.discord || "",
                }}
                validationSchema={updateContact}
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
                                  Home Contact
                                </h2>
                              </Col>
                            </Row>
                            <Row className="mt-2">
                              <Col xl="8">
                                <FormGroup>
                                  <Label className="mt-1">Street Address</Label>
                                  <Input
                                    id="homeAddress"
                                    name="homeAddress"
                                    type="text"
                                    placeholder="123 Winding Way"
                                    required
                                    className={classNames("form-control", {
                                      "login-warning":
                                        !!errors.homeAddress &&
                                        !!touched.homeAddress,
                                    })}
                                    value={values.homeAddress}
                                    onBlur={handleBlur("homeAddress")}
                                    onChange={handleChange("homeAddress")}
                                    invalid={
                                      !!touched.homeAddress &&
                                      !!errors.homeAddress
                                    }
                                  />
                                  <FormFeedback>
                                    {touched.homeAddress && errors.homeAddress}
                                  </FormFeedback>

                                  <Row>
                                    <Col sm="5" lg="5" xl="6">
                                      <Label className="mt-1">City</Label>
                                      <Input
                                        id="homeCity"
                                        name="homeCity"
                                        type="text"
                                        placeholder="Small Town"
                                        required
                                        className={classNames("form-control", {
                                          "login-warning":
                                            !!errors.homeCity &&
                                            !!touched.homeCity,
                                        })}
                                        value={values.homeCity}
                                        onBlur={handleBlur("homeCity")}
                                        onChange={handleChange("homeCity")}
                                        invalid={
                                          !!touched.homeCity &&
                                          !!errors.homeCity
                                        }
                                      />
                                      <FormFeedback>
                                        {touched.homeCity && errors.homeCity}
                                      </FormFeedback>
                                    </Col>
                                    <Col sm="3" lg="3" xl="2">
                                      <Label className="mt-1">State</Label>
                                      <Input
                                        id="homeState"
                                        name="homeState"
                                        type="select"
                                        required
                                        className={classNames("form-control", {
                                          "login-warning":
                                            !!errors.homeState &&
                                            !!touched.homeState,
                                        })}
                                        value={values.homeState}
                                        onBlur={handleBlur("homeState")}
                                        onChange={handleChange("homeState")}
                                        invalid={
                                          !!touched.homeState &&
                                          !!errors.homeState
                                        }
                                      >
                                        <option value="">-</option>
                                        {states.map((state, index) => (
                                          <option
                                            key={index}
                                            value={state.abbreviation}
                                          >
                                            {state.name}
                                          </option>
                                        ))}
                                      </Input>
                                      <FormFeedback>
                                        {touched.state && errors.state}
                                      </FormFeedback>
                                    </Col>
                                    <Col sm="4" lg="4" xl="4">
                                      <Label className="mt-1">Zip</Label>
                                      <Input
                                        id="homeZip"
                                        name="homeZip"
                                        type="number"
                                        placeholder="12345"
                                        required
                                        className={classNames("form-control", {
                                          "login-warning":
                                            !!errors.homeZip &&
                                            !!touched.homeZip,
                                        })}
                                        value={values.homeZip}
                                        onBlur={handleBlur("homeZip")}
                                        onChange={handleChange("homeZip")}
                                        invalid={
                                          !!touched.homeZip && !!errors.homeZip
                                        }
                                      />
                                      <FormFeedback>
                                        {touched.homeZip && errors.homeZip}
                                      </FormFeedback>
                                    </Col>
                                  </Row>
                                </FormGroup>
                              </Col>
                              <Col xl="4">
                                <FormGroup>
                                  <Label className="mt-1">Home Phone</Label>
                                  <Input
                                    id="homePhone"
                                    name="homePhone"
                                    type="text"
                                    placeholder="+1 (555) 555-5555"
                                    required
                                    className={classNames("form-control", {
                                      "login-warning":
                                        !!errors.homePhone &&
                                        !!touched.homePhone,
                                    })}
                                    value={values.homePhone}
                                    onBlur={handleBlur("homePhone")}
                                    onChange={handleChange("homePhone")}
                                    invalid={
                                      !!touched.homePhone && !!errors.homePhone
                                    }
                                  />
                                  <FormFeedback>
                                    {touched.homePhone && errors.homePhone}
                                  </FormFeedback>

                                  <Label className="mt-1">Email</Label>
                                  <Input
                                    id="homeEmail"
                                    name="homeEmail"
                                    type="text"
                                    placeholder="name@domain.com"
                                    required
                                    className={classNames("form-control", {
                                      "login-warning":
                                        !!errors.homeEmail &&
                                        !!touched.homeEmail,
                                    })}
                                    value={values.homeEmail}
                                    onBlur={handleBlur("homeEmail")}
                                    onChange={handleChange("homeEmail")}
                                    invalid={
                                      !!touched.homeEmail && !!errors.homeEmail
                                    }
                                  />
                                  <FormFeedback>
                                    {touched.homeEmail && errors.homeEmail}
                                  </FormFeedback>
                                </FormGroup>
                              </Col>
                            </Row>
                            <hr />

                            <Row>
                              <Col>
                                <h2 className="font-weight-bold">
                                  Business Contact
                                </h2>
                              </Col>
                            </Row>
                            <Row className="mt-2">
                              <Col xl="8">
                                <FormGroup>
                                  <Label className="mt-1">Street Address</Label>
                                  <Input
                                    id="businessAddress"
                                    name="businessAddress"
                                    type="text"
                                    placeholder="123 Winding Way"
                                    required
                                    className={classNames("form-control", {
                                      "login-warning":
                                        !!errors.businessAddress &&
                                        !!touched.businessAddress,
                                    })}
                                    value={values.businessAddress}
                                    onBlur={handleBlur("businessAddress")}
                                    onChange={handleChange("businessAddress")}
                                    invalid={
                                      !!touched.businessAddress &&
                                      !!errors.businessAddress
                                    }
                                  />
                                  <FormFeedback>
                                    {touched.businessAddress &&
                                      errors.businessAddress}
                                  </FormFeedback>

                                  <Row>
                                    <Col sm="5" lg="5" xl="6">
                                      <Label className="mt-1">City</Label>
                                      <Input
                                        id="businessCity"
                                        name="businessCity"
                                        type="text"
                                        placeholder="Small Town"
                                        required
                                        className={classNames("form-control", {
                                          "login-warning":
                                            !!errors.businessCity &&
                                            !!touched.businessCity,
                                        })}
                                        value={values.businessCity}
                                        onBlur={handleBlur("businessCity")}
                                        onChange={handleChange("businessCity")}
                                        invalid={
                                          !!touched.businessCity &&
                                          !!errors.businessCity
                                        }
                                      />
                                      <FormFeedback>
                                        {touched.businessCity &&
                                          errors.businessCity}
                                      </FormFeedback>
                                    </Col>
                                    <Col sm="3" lg="3" xl="2">
                                      <Label className="mt-1">State</Label>
                                      <Input
                                        id="businessState"
                                        name="businessState"
                                        type="select"
                                        required
                                        className={classNames("form-control", {
                                          "login-warning":
                                            !!errors.businessState &&
                                            !!touched.businessState,
                                        })}
                                        value={values.businessState}
                                        onBlur={handleBlur("businessState")}
                                        onChange={handleChange("businessState")}
                                        invalid={
                                          !!touched.businessState &&
                                          !!errors.businessState
                                        }
                                      >
                                        <option value="">-</option>
                                        {states.map((state, index) => (
                                          <option
                                            key={index}
                                            value={state.abbreviation}
                                          >
                                            {state.name}
                                          </option>
                                        ))}
                                      </Input>
                                      <FormFeedback>
                                        {touched.businessState &&
                                          errors.businessState}
                                      </FormFeedback>
                                    </Col>
                                    <Col sm="4" lg="4" xl="4">
                                      <Label className="mt-1">Zip</Label>
                                      <Input
                                        id="businessZip"
                                        name="businessZip"
                                        type="number"
                                        placeholder="12345"
                                        required
                                        className={classNames("form-control", {
                                          "login-warning":
                                            !!errors.businessZip &&
                                            !!touched.businessZip,
                                        })}
                                        value={values.businessZip}
                                        onBlur={handleBlur("businessZip")}
                                        onChange={handleChange("businessZip")}
                                        invalid={
                                          !!touched.businessZip &&
                                          !!errors.businessZip
                                        }
                                      />
                                      <FormFeedback>
                                        {touched.businessZip &&
                                          errors.businessZip}
                                      </FormFeedback>
                                    </Col>
                                  </Row>
                                </FormGroup>
                              </Col>
                              <Col xl="4">
                                <FormGroup>
                                  <Label className="mt-1">Business Phone</Label>
                                  <Input
                                    id="businessPhone"
                                    name="businessPhone"
                                    type="text"
                                    placeholder="(555) 555-5555"
                                    required
                                    className={classNames("form-control", {
                                      "login-warning":
                                        !!errors.businessPhone &&
                                        !!touched.businessPhone,
                                    })}
                                    value={values.businessPhone}
                                    onBlur={handleBlur("businessPhone")}
                                    onChange={handleChange("businessPhone")}
                                    invalid={
                                      !!touched.businessPhone &&
                                      !!errors.businessPhone
                                    }
                                  />
                                  <FormFeedback>
                                    {touched.businessPhone &&
                                      errors.businessPhone}
                                  </FormFeedback>

                                  <Label className="mt-1">Email</Label>
                                  <Input
                                    id="businessEmail"
                                    name="businessEmail"
                                    type="text"
                                    placeholder="name@domain.com"
                                    required
                                    className={classNames("form-control", {
                                      "login-warning":
                                        !!errors.businessEmail &&
                                        !!touched.businessEmail,
                                    })}
                                    value={values.businessEmail}
                                    onBlur={handleBlur("businessEmail")}
                                    onChange={handleChange("businessEmail")}
                                    invalid={
                                      !!touched.businessEmail &&
                                      !!errors.businessEmail
                                    }
                                  />
                                  <FormFeedback>
                                    {touched.businessEmail &&
                                      errors.businessEmail}
                                  </FormFeedback>
                                </FormGroup>
                              </Col>
                            </Row>
                            <hr />

                            <Row>
                              <Col>
                                <h2 className="font-weight-bold">
                                  Social Contact
                                </h2>
                              </Col>
                            </Row>

                            <Row>
                              <Col xl="4">
                                <FormGroup>
                                  <Label className="mt-1">LinkedIn</Label>
                                  <Input
                                    id="linkedin"
                                    name="linkedin"
                                    type="text"
                                    placeholder="linkedin.com/in/profile"
                                    required
                                    className={classNames("form-control", {
                                      "login-warning":
                                        !!errors.linkedin && !!touched.linkedin,
                                    })}
                                    value={values.linkedin}
                                    onBlur={handleBlur("linkedin")}
                                    onChange={handleChange("linkedin")}
                                    invalid={
                                      !!touched.linkedin && !!errors.linkedin
                                    }
                                  />
                                  <FormFeedback>
                                    {touched.linkedin && errors.linkedin}
                                  </FormFeedback>

                                  <Label className="mt-1">Facebook</Label>
                                  <Input
                                    id="facebook"
                                    name="facebook"
                                    type="text"
                                    placeholder="facebook.com/profile"
                                    required
                                    className={classNames("form-control", {
                                      "login-warning":
                                        !!errors.facebook && !!touched.facebook,
                                    })}
                                    value={values.facebook}
                                    onBlur={handleBlur("facebook")}
                                    onChange={handleChange("facebook")}
                                    invalid={
                                      !!touched.facebook && !!errors.facebook
                                    }
                                  />
                                  <FormFeedback>
                                    {touched.facebook && errors.facebook}
                                  </FormFeedback>
                                </FormGroup>
                              </Col>
                              <Col xl="4">
                                <FormGroup>
                                  <Label className="mt-1">Instagram</Label>
                                  <Input
                                    id="instagram"
                                    name="instagram"
                                    type="text"
                                    placeholder="instagram.com/profile"
                                    required
                                    className={classNames("form-control", {
                                      "login-warning":
                                        !!errors.instagram &&
                                        !!touched.instagram,
                                    })}
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

                                  <Label className="mt-1">Twitter</Label>
                                  <Input
                                    id="twitter"
                                    name="twitter"
                                    type="text"
                                    placeholder="twitter.com/profile"
                                    required
                                    className={classNames("form-control", {
                                      "login-warning":
                                        !!errors.twitter && !!touched.twitter,
                                    })}
                                    value={values.twitter}
                                    onBlur={handleBlur("twitter")}
                                    onChange={handleChange("twitter")}
                                    invalid={
                                      !!touched.twitter && !!errors.twitter
                                    }
                                  />
                                  <FormFeedback>
                                    {touched.twitter && errors.twitter}
                                  </FormFeedback>
                                </FormGroup>
                              </Col>
                              <Col xl="4">
                                <FormGroup>
                                  <Label className="mt-1">Slack</Label>
                                  <Input
                                    id="slack"
                                    name="slack"
                                    type="text"
                                    placeholder="slack.com/profile"
                                    required
                                    className={classNames("form-control", {
                                      "login-warning":
                                        !!errors.slack && !!touched.slack,
                                    })}
                                    value={values.slack}
                                    onBlur={handleBlur("slack")}
                                    onChange={handleChange("slack")}
                                    invalid={!!touched.slack && !!errors.slack}
                                  />
                                  <FormFeedback>
                                    {touched.slack && errors.slack}
                                  </FormFeedback>

                                  <Label className="mt-1">Discord</Label>
                                  <Input
                                    id="discord"
                                    name="discord"
                                    type="text"
                                    placeholder="discord.com/profile"
                                    required
                                    className={classNames("form-control", {
                                      "login-warning":
                                        !!errors.discord && !!touched.discord,
                                    })}
                                    value={values.discord}
                                    onBlur={handleBlur("discord")}
                                    onChange={handleChange("discord")}
                                    invalid={
                                      !!touched.discord && !!errors.discord
                                    }
                                  />
                                  <FormFeedback>
                                    {touched.discord && errors.discord}
                                  </FormFeedback>
                                </FormGroup>
                              </Col>
                            </Row>

                            <Row className="mt-3">
                              <Col sm={{ size: 4, offset: 8 }}>
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
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default withUser(contactSettings);
