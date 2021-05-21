import React, { useState, useEffect, useRef, useCallback } from "react";
import "./EditSkills.scss";
import "react-image-crop/dist/ReactCrop.css";
import { Modal, ModalBody, ModalHeader, Alert, Button } from "reactstrap";
import { X } from "react-feather";

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
  const [skills, setSkills] = useState([]);

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

  const addModule = (newSkill) => {
    if (!skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
    }

    // const hidden = document.querySelector(".hidden");
    // setTimeout(() => {
    //   hidden.focus();
    // }, 100);
  };

  const mapSkills = (arr) => {
    if (arr.length) {
      return arr.map((item, index) => {
        if (item) {
          return (
            <div key={index} className="choice">
              {item}{" "}
              <button
                className="transition-3"
                onClick={() => removeModule(index)}
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

  const removeModule = (index) => {
    let arr = [];

    arr = skills;
    arr.splice(index, 1);
    setSkills([...arr]);
  };

  return (
    <>
      <ToastSuccess {...{ isOpen: success }} />
      <Modal {...{ isOpen, toggle }} centered={true} className="edit-skills">
        <ModalHeader toggle={() => toggle()}>Update Skills</ModalHeader>
        <ModalBody>
          {error && (
            <Alert color="warning" fade={false}>
              There was an error while saving. Please retry after a while.
            </Alert>
          )}
          <div className="row">
            <div className="col-12">
              <p>
                Type your skill and hit{" "}
                <span className="font-weight-bold">Enter</span> to add.
              </p>
              <input type="text" name="" id="" />
            </div>
            <div className="col-12 mt-2">{mapSkills(skills)}</div>
          </div>
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
                onClick={() => onSubmit()}
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

export default withUser(EditProfile);
