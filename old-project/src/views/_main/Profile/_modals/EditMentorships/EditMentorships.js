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

//States
// import states from "../../../SignUp/json/states.json";
//Source: https://gist.github.com/mshafrir/2646763

const EditMentorships = ({ isOpen, toggle, profile }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error] = useState(false);
  const [mentorships, setMentorships] = useState([]);

  useEffect(() => {
    if (profile.mentorships) {
      setMentorships(profile.mentorships);
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
      .patch(`/users/${profile.id}`, { mentorships })
      .then((res) => {
        setIsLoading(false);
        window.location.reload();
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
