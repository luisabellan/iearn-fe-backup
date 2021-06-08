import React, { useState, useEffect, useRef } from "react";
import "./newDeal.scss";
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
import { Formik } from "formik";
import * as Yup from "yup";
import { DollarSign, Plus, X } from "react-feather";
import classNames from "classnames";
// import { useHistory } from "react-router-dom";
import SelectSearch from "react-select-search";
import fuzzySearch from "./fuzzySearch";

//Utils
// import { useWindowDimensions } from "../../Utils/utils";
import withTitleContext from "../../../../utility/withContexts/withTitle";
import withUserContext from "../../../../utility/withContexts/withUser"; //Components
import ToastSuccess from "../../../../components/toasts/success";
import ToastFail from "../../../../components/toasts/fail";

//StatesList
import statesList from "../../SignUp/json/states.json";
//Source: https://gist.github.com/mshafrir/2646763

//API
import api from "../../../../api/api";

//States
import states from "../../SignUp/json/states.json";
//Source: https://gist.github.com/mshafrir/2646763

const NewDeal = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  // const history = useHistory();
  const [currentTag, setCurrentTag] = useState("");
  const [collaborators, setCollaborators] = useState([]);
  const [tags, setTags] = useState([]);
  const submitRef = useRef(null);
  const [collabOptions, setCollabOptions] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(false);

  //Get Users for Collaborators
  useEffect(() => {
    api
      .get(`/users`)
      .then((res) => {
        let options = res.data.map((item) => {
          return {
            value: JSON.stringify({
              id: item.id,
              name: `${item.firstName} ${item.lastName}`,
            }),
            name: `${item.firstName} ${item.lastName}`,
          };
        });
        options.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        );
        setCollabOptions(options);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleAdd = (e, arr, setArr, setItem) => {
    if (e.key === "Enter") {
      e.preventDefault();
      let newArr = arr;

      if (!newArr.includes(e.target.value)) {
        newArr = [...arr, e.target.value];
        setArr([...newArr]);
      }
      setItem("");
    }
  };

  const handleAddCollab = (e, arr, setArr) => {
    let newArr = arr;
    const newItem = JSON.parse(e);

    if (!newArr.includes(newItem)) {
      newArr = [...arr, newItem];
      setArr([...newArr]);
    }
  };

  const mapItems = (arr, setItem) => {
    if (arr.length) {
      return arr.map((item, index) => {
        if (item) {
          return (
            <div key={index} className="choice">
              {item}{" "}
              <button
                className="transition-3"
                onClick={(e) => removeModule(e, index, arr, setItem)}
                disabled={isLoading}
              >
                <X size="14" />
              </button>
            </div>
          );
        }

        return null;
      });
    }
  };

  const mapCollaborators = (arr, setItem) => {
    if (arr.length) {
      return arr.map((item, index) => {
        if (item) {
          return (
            <div key={index} className="choice">
              {item.name}
              <button
                className="transition-3"
                onClick={(e) => removeModule(e, index, arr, setItem)}
                disabled={isLoading}
              >
                <X size="14" />
              </button>
            </div>
          );
        }

        return null;
      });
    }
  };

  const removeModule = (e, index, arr, setItem) => {
    e.preventDefault();
    let newArr = [];

    newArr = arr;
    newArr.splice(index, 1);
    setItem([...newArr]);
  };

  useEffect(() => {
    props.setPageTitle("New Deal - Details");
    props.setActiveSubPage("Deals");
  });

  const DealSchema = Yup.object().shape({
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zip: Yup.string().required("Zip is required"),
    price: Yup.number().required("Price is required"),
    notes: Yup.string(),
  });

  const initialValues = {
    address: "",
    city: "",
    state: "",
    zip: "",
    price: "",
    notes: "",
  };

  const onSubmit = (values, { resetForm }) => {
    setIsLoading(true);

    let body = {
      ...values,
      collaborators,
      tags,
      user: props.user.id,
    };

    api
      .post(`/deals`, body)
      .then((res) => {
        setIsSuccess(true);
        resetForm();
        setCollaborators([]);
        setTags([]);
        setIsLoading(false);

        setTimeout(() => {
          setIsSuccess(false);
        }, 4000);
      })
      .catch((err) => {
        setError(true);
        setIsLoading(false);

        setTimeout(() => {
          setError(false);
        }, 4000);
      });
  };

  return (
    <>
      <ToastSuccess {...{ isOpen: isSuccess, message: "Deal details submitted successfully." }} />
      <ToastFail {...{ isOpen: error }} />
      <Row className="new-deal">
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
                      validationSchema={DealSchema}
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
                              <Col md="6">
                                <FormGroup>
                                  <Label>Purchase Price</Label>
                                  <div className="position-relative has-icon-left">
                                    <Input
                                      id="price"
                                      name="price"
                                      type="number"
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
                                    <FormFeedback>
                                      {touched.price && errors.price}
                                    </FormFeedback>
                                    <div className="form-control-position">
                                      <DollarSign size="18" />
                                    </div>
                                  </div>
                                </FormGroup>
                              </Col>
                              <Col md="6">
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
                                  <Label>Notes (Optional)</Label>
                                  <Input
                                    id="notes"
                                    name="notes"
                                    type="textarea"
                                    rows="5"
                                    required
                                    className={classNames(
                                      "form-control h-100",
                                      {
                                        "login-warning":
                                          !!errors.notes && !!touched.notes,
                                      }
                                    )}
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
                              <Col md="6">
                                <Row>
                                  <Col md="12">
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
                                        invalid={
                                          !!touched.city && !!errors.city
                                        }
                                      />
                                      <FormFeedback>
                                        {touched.city && errors.city}
                                      </FormFeedback>
                                    </FormGroup>
                                  </Col>
                                  <Col md="6">
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
                                        placeholder="123 Winding Way"
                                        value={values.state}
                                        onBlur={handleBlur("state")}
                                        onChange={handleChange("state")}
                                        invalid={
                                          !!touched.state && !!errors.state
                                        }
                                      >
                                        <option value="">-</option>
                                        {statesList.map((state, index) => {
                                          return (
                                            <option
                                              key={index}
                                              value={state.abbreviation}
                                            >
                                              {state.name}
                                            </option>
                                          );
                                        })}
                                      </Input>
                                      <FormFeedback>
                                        {touched.state && errors.state}
                                      </FormFeedback>
                                    </FormGroup>
                                  </Col>
                                  <Col md="6">
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
                              </Col>
                            </Row>
                            <Col
                              md="12"
                              style={{
                                visibility: `hidden`,
                                margin: `-15px 0`,
                              }}
                            >
                              <button
                                type="submit"
                                disabled={isLoading}
                                onClick={handleSubmit}
                                ref={submitRef}
                              >
                                Submit
                              </button>
                            </Col>
                          </fieldset>
                        </Formik>
                      )}
                    </Formik>
                  </form>
                  <form>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <Label>Collaborators (Optional)</Label>
                          {/* <div className="position-relative has-icon-right">
                          <Input
                            type="text"
                            value={currentCollaborator}
                            onChange={(e) =>
                              setCurrentCollaborator(e.target.value)
                            }
                            onKeyPress={(e) =>
                              handleAdd(
                                e,
                                collaborators,
                                setCollaborators,
                                setCurrentCollaborator
                              )
                            }
                          />
                          <div className="form-control-position">
                            <Search size="18" />
                          </div>
                        </div> */}
                          <SelectSearch
                            options={collabOptions}
                            search
                            filterOptions={fuzzySearch}
                            placeholder="Search Collaborators"
                            disabled={isLoading}
                            onChange={(e) =>
                              handleAddCollab(
                                e,
                                collaborators,
                                setCollaborators
                              )
                            }
                          />
                          <div>
                            {mapCollaborators(collaborators, setCollaborators)}
                          </div>
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <Label>Tags (Optional)</Label>
                          <div className="position-relative has-icon-right">
                            <Input
                              type="text"
                              value={currentTag}
                              disabled={isLoading}
                              placeholder="Press Enter to add a tag"
                              onChange={(e) => setCurrentTag(e.target.value)}
                              onKeyPress={(e) =>
                                handleAdd(e, tags, setTags, setCurrentTag)
                              }
                            />
                            <div className="form-control-position">
                              <Plus size="18" />
                            </div>
                          </div>
                          <div>{mapItems(tags, setTags)}</div>
                        </FormGroup>
                      </Col>
                    </Row>
                  </form>
                  <Col md="12" className="text-center mt-3">
                    <button
                      type="submit"
                      color="primary"
                      block="true"
                      className="button-main"
                      disabled={isLoading}
                      onClick={() => submitRef.current.click()}
                    >
                      Submit
                    </button>
                  </Col>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default withTitleContext(withUserContext(NewDeal));
