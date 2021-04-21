import React from "react";
import "../signup.scss";
import { Col, Input, FormGroup, Label, Card, CardBody } from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";

//Components
import Progress from "./Progress";

const Form2 = ({ currentStep, setCurrentStep, isLoading, gatherValues }) => {
  const skillsSchema = Yup.object().shape({
    skill1: Yup.string(),
    skill2: Yup.string(),
    skill3: Yup.string(),
    skill4: Yup.string(),
    skill5: Yup.string(),
  });

  const form4 = {
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
  };

  const onSubmit = (values) => {
    let formValues = values;
    let arr = [];

    Object.entries(formValues).forEach(([key, val]) => {
      if (val) {
        arr.push(val);
      }
    });

    gatherValues({ skills: arr }, 3);

    // setCurrentStep(4);
  };

  return (
    <Card className="card-signup">
      <h1 className="text-center">Sign Up</h1>
      <CardBody>
        <p className="text-center text-blue">
          Please add your skills below
          <br />
          <span style={{ fontSize: `16px` }}>(you can add more later)</span>
        </p>
        <Formik
          initialValues={form4}
          validationSchema={skillsSchema}
          onSubmit={onSubmit}
        >
          {({ handleSubmit, handleBlur, handleChange, values }) => (
            <Formik className="pt-2">
              <fieldset disabled={isLoading}>
                {/* {error && (
                        <Alert color='warning' fade={false}>
                          {error}
                        </Alert>
                      )} */}
                <Col md="12">
                  <FormGroup>
                    <Label>Skills</Label>
                    <Input
                      className="mb-2"
                      id="skill1"
                      name="skill1"
                      type="text"
                      placeholder="Contract Negotiation"
                      value={values.skill1}
                      onBlur={handleBlur("skill1")}
                      onChange={handleChange("skill1")}
                    />

                    <Input
                      className="mb-2"
                      id="skill2"
                      name="skill2"
                      type="text"
                      placeholder="Project Management"
                      value={values.skill2}
                      onBlur={handleBlur("skill2")}
                      onChange={handleChange("skill2")}
                    />

                    <Input
                      className="mb-2"
                      id="skill3"
                      name="skill3"
                      type="text"
                      placeholder="Financing"
                      value={values.skill3}
                      onBlur={handleBlur("skill3")}
                      onChange={handleChange("skill3")}
                    />

                    <Input
                      className="mb-2"
                      id="skill4"
                      name="skill4"
                      type="text"
                      placeholder="Sourcing"
                      value={values.skill4}
                      onBlur={handleBlur("skill4")}
                      onChange={handleChange("skill4")}
                    />

                    <Input
                      className="mb-2"
                      id="skill5"
                      name="skill5"
                      type="text"
                      placeholder="Remodeling"
                      value={values.skill5}
                      onBlur={handleBlur("skill5")}
                      onChange={handleChange("skill5")}
                    />
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
                        setCurrentStep(2);
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
