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

const Form6 = ({ currentStep, setCurrentStep, isLoading, gatherValues }) => {
  // const socialSchema = Yup.object().shape({
  //   facebook: Yup.string().matches(
  //     /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
  //     "Invalid URL"
  //   ),
  //   instagram: Yup.string().matches(
  //     /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
  //     "Invalid URL"
  //   ),
  //   linkedin: Yup.string().matches(
  //     /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
  //     "Invalid URL"
  //   ),
  // });

  // const form2 = {
  //   facebook: "",
  //   instagram: "",
  //   linkedin: "",
  // };

  // const onSubmit = (values) => {
  //   gatherValues(values, 1);
  //   setCurrentStep(2);
  // };

  return (
    <Card className="card-signup">
      <h1 className="text-center">Sign Up</h1>
      <CardBody>
        This is Form 6
        <button onClick={()=>setCurrentStep(6)}>Click Here</button>
        <Progress {...{ currentStep }} />
      </CardBody>
    </Card>
  );
};

export default Form6;
