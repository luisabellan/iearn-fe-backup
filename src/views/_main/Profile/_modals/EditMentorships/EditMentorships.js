import React, { useState, useEffect } from "react";
import "./EditMentorships.scss";
import "react-image-crop/dist/ReactCrop.css";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Alert,
  Button,
  Row,
  Col,
  Label,
} from "reactstrap";

//Context
import withUser from "../../../../../utility/withContexts/withUser";

//API
import api from "../../../../../api/api";

//Components
import ToastSuccess from "../../../../../components/toasts/success";

//States
// import states from "../../../SignUp/json/states.json";
//Source: https://gist.github.com/mshafrir/2646763

const EditMentorships = ({ user, setUser, isOpen, toggle }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error] = useState(false);
  const [success, setSuccess] = useState(false);
  const [mentorships, setMentorships] = useState([]);

  useEffect(() => {
    if (user.mentorships) {
      setMentorships(user.mentorships);
    }
  }, []);

  const updateMentorships = (name) => {
    let arr = [...mentorships];

    if (arr.includes(name)) {
      let i = arr.indexOf(name);
      arr.splice(i, 1);
    } else {
      arr.push(name);
    }

    setMentorships(arr);
  };

  const onSubmit = async () => {
    setIsLoading(true);
    api
      .patch(`/users/${user.id}`, { mentorships })
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

  const mapMentorships = () => {
    const mentors = [
      "Astroflipping",
      "SubTo",
      "Chris Chico",
      "TTP",
      "Flip2Freedom",
    ];

    return (
      <Row className="mentorships-container">
        <Col>
          {mentors.map((mentor, index) => {
            return index <= 2 ? (
              <label key={index}>
                <input
                  type="checkbox"
                  name={mentor}
                  onChange={() => updateMentorships(mentor)}
                  checked={mentorships.includes(mentor)}
                />
                &ensp;
                {mentor}
              </label>
            ) : null;
          })}
        </Col>
        <Col>
          {mentors.map((mentor, index) => {
            return index >= 3 ? (
              <label key={index}>
                <input
                  type="checkbox"
                  name={mentor}
                  onChange={() => updateMentorships(mentor)}
                  checked={mentorships.includes(mentor)}
                />
                &ensp;
                {mentor}
              </label>
            ) : null;
          })}
        </Col>
      </Row>
    );
  };

  return (
    <>
      <ToastSuccess {...{ isOpen: success }} />
      <Modal
        {...{ isOpen, toggle }}
        centered={true}
        className="edit-mentorships"
      >
        <ModalHeader toggle={() => toggle()}>Update Market</ModalHeader>
        <ModalBody>
          {error && (
            <Alert color="warning" fade={false}>
              There was an error while saving. Please retry after a while.
            </Alert>
          )}
          <Label className="w-100">
            Select the mentorships that you work in.
          </Label>
          {mapMentorships()}
          <div className="row mt-3">
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
                onClick={onSubmit}
                disabled={isLoading}
              >
                SAVE
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default withUser(EditMentorships);
