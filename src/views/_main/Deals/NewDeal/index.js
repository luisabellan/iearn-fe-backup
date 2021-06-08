import React, { useState, useEffect } from "react";
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
import { DollarSign, Search, Plus } from "react-feather";
import classNames from "classnames";
import { useHistory, NavLink } from "react-router-dom";

//Utils
// import { useWindowDimensions } from "../../Utils/utils";
import withTitleContext from "../../../../utility/withContexts/withTitle";
import withDealContext from "../../../../utility/withContexts/withDeals";

//States
import * as states from "../../SignUp/json/states.json";
//Source: https://gist.github.com/mshafrir/2646763

const NewDeal = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  // const [error, setError] = useState(false)

  useEffect(() => {
    props.setPageTitle("New Deal - Details");
    props.setActiveSubPage("Deals");
  });

  const LoginSchema = Yup.object().shape({
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zip: Yup.string().required("Zip is required"),
    price: Yup.string().required("Price is required"),
    collaborators: Yup.string(),
    tags: Yup.string(),
    notes: Yup.string(),
  });

  const initialValues = {
    address: "",
    city: "",
    state: "",
    zip: "",
    price: "",
    collaborators: "",
    tags: "",
    notes: "",
  };

  const onSubmit = (values) => {
    let deals = [...props.dealList];
    deals.push(values);
    props.setDealList(deals);
    history.push(`/people/deals`);
  };

  return (
    <Row className="decision-tree">
      <Col>
        <Card>
          <CardBody className="px-2 py-4 px-md-4">
            <h1 className="text-center font-weight-bold">Enter Details</h1>
            <h4 className="text-center font-weight-normal ls-3 mt-4">
              Add the details of your deal here
            </h4>
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <form>
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
                          {/* {error && (
                      <Alert color="warning" fade={false}>
                        Incorrect Email/Password
                      </Alert>
                    )} */}
                          <Row>
                            <Col md="12">
                              <FormGroup>
                                <Label>Street Address</Label>
                                <Input
                                  id="address"
                                  name="address"
                                  type="text"
                                  required
                                  className={classNames("form-control", {
                                    "login-warning":
                                      !!errors.address && !!touched.address,
                                  })}
                                  placeholder="123 Winding Way"
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
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col md="6">
                              <FormGroup>
                                <Label>City</Label>
                                <Input
                                  id="city"
                                  name="city"
                                  type="text"
                                  required
                                  className={classNames("form-control", {
                                    "login-warning":
                                      !!errors.city && !!touched.city,
                                  })}
                                  placeholder="Small Town"
                                  value={values.city}
                                  onBlur={handleBlur("city")}
                                  onChange={handleChange("city")}
                                  invalid={!!touched.city && !!errors.city}
                                />
                                <FormFeedback>
                                  {touched.city && errors.city}
                                </FormFeedback>
                              </FormGroup>
                            </Col>
                            <Col md="3">
                              <FormGroup>
                                <Label>State</Label>
                                <Input
                                  id="state"
                                  name="state"
                                  type="select"
                                  required
                                  className={classNames("form-control", {
                                    "login-warning":
                                      !!errors.state && !!touched.state,
                                  })}
                                  placeholder="TN"
                                  value={values.state}
                                  onBlur={handleBlur("state")}
                                  onChange={handleChange("state")}
                                  invalid={!!touched.state && !!errors.state}
                                >
                                  <option value="">-</option>
                                  {states.map((state, index) => {
                                    return index >= 30 ? (
                                      <option value={state}>{state}</option>
                                    ) : null;
                                  })}
                                  <option value="international">International</option>

                                </Input>
                                <FormFeedback>
                                  {touched.state && errors.state}
                                </FormFeedback>
                              </FormGroup>
                            </Col>
                            <Col md="3">
                              <FormGroup>
                                <Label>Zip</Label>
                                <Input
                                  id="zip"
                                  name="zip"
                                  type="text"
                                  required
                                  className={classNames("form-control", {
                                    "login-warning":
                                      !!errors.zip && !!touched.zip,
                                  })}
                                  placeholder="12345"
                                  value={values.zip}
                                  onBlur={handleBlur("zip")}
                                  onChange={handleChange("zip")}
                                  invalid={!!touched.zip && !!errors.zip}
                                />
                                <FormFeedback>
                                  {touched.zip && errors.zip}
                                </FormFeedback>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col md="7">
                              <Row>
                                <Col md="6">
                                  <FormGroup>
                                    <Label>Purchase Price</Label>
                                    <div className="position-relative has-icon-left">
                                      <Input
                                        id="price"
                                        name="price"
                                        type="text"
                                        required
                                        className={classNames("form-control", {
                                          "login-warning":
                                            !!errors.price && !!touched.price,
                                        })}
                                        value={values.price}
                                        onBlur={handleBlur("price")}
                                        onChange={handleChange("price")}
                                        invalid={
                                          !!touched.price && !!errors.price
                                        }
                                      />
                                      <div className="form-control-position">
                                        <DollarSign size="18" />
                                      </div>
                                    </div>
                                  </FormGroup>
                                </Col>
                                <Col md="12">
                                  <FormGroup>
                                    <Label>Collaborators (Optional)</Label>
                                    <div className="position-relative has-icon-right">
                                      <Input
                                        id="collaborators"
                                        name="collaborators"
                                        type="text"
                                        required
                                        className={classNames("form-control", {
                                          "login-warning":
                                            !!errors.collaborators &&
                                            !!touched.collaborators,
                                        })}
                                        value={values.collaborators}
                                        onBlur={handleBlur("collaborators")}
                                        onChange={handleChange("collaborators")}
                                        invalid={
                                          !!touched.collaborators &&
                                          !!errors.collaborators
                                        }
                                      />
                                      <div className="form-control-position">
                                        <Search size="18" />
                                      </div>
                                    </div>
                                  </FormGroup>
                                </Col>
                                <Col md="12">
                                  <FormGroup>
                                    <Label>Tags (Optional)</Label>
                                    <div className="position-relative has-icon-right">
                                      <Input
                                        id="tags"
                                        name="tags"
                                        type="text"
                                        required
                                        className={classNames("form-control", {
                                          "login-warning":
                                            !!errors.tags && !!touched.tags,
                                        })}
                                        value={values.tags}
                                        onBlur={handleBlur("tags")}
                                        onChange={handleChange("tags")}
                                        invalid={
                                          !!touched.tags && !!errors.tags
                                        }
                                      />
                                      <div className="form-control-position">
                                        <Plus size="18" />
                                      </div>
                                    </div>
                                  </FormGroup>
                                </Col>
                              </Row>
                            </Col>
                            <Col md="5">
                              <FormGroup>
                                <Label>Notes (Optional)</Label>
                                <Input
                                  id="notes"
                                  name="notes"
                                  type="textarea"
                                  rows="8"
                                  required
                                  className={classNames("form-control h-100", {
                                    "login-warning":
                                      !!errors.notes && !!touched.notes,
                                  })}
                                  value={values.notes}
                                  onBlur={handleBlur("notes")}
                                  onChange={handleChange("notes")}
                                  invalid={!!touched.notes && !!errors.notes}
                                />
                                <FormFeedback>
                                  {touched.notes && errors.notes}
                                </FormFeedback>
                              </FormGroup>
                            </Col>
                          </Row>
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
                                
                                <NavLink to="/pages/deals" >
                                    Submit
                                </NavLink>
                                
                              </button>
                            </Col>
                          </FormGroup>
                        </fieldset>
                      </Formik>
                    )}
                  </Formik>
                </form>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default withTitleContext(withDealContext(NewDeal));
