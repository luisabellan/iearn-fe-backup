import React, { useState, useEffect } from "react";
import "./EditSkills.scss";
import "react-image-crop/dist/ReactCrop.css";
import { Modal, ModalBody, ModalHeader, Alert, Button } from "reactstrap";
import { X } from "react-feather";

//API
import api from "../../../../../api/api";

const EditProfile = ({ isOpen, toggle, profile }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error] = useState(false);
  const [skills, setSkills] = useState([]);
  const [currentSkill, setCurrentSkill] = useState("");

  const onSubmit = async () => {
    setIsLoading(true);
    api
      .patch(`/users/${profile.id}`, { skills })
      .then((res) => {
        setIsLoading(false);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const addSkill = (newSkill) => {
    if (!skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
    }

    // const hidden = document.querySelector(".hidden");
    // setTimeout(() => {
    //   hidden.focus();
    // }, 100);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      addSkill(currentSkill);
      setCurrentSkill("");
    }
  };

  useEffect(() => {
    setSkills(profile.skills);
  }, []);

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
                Type your skill and click{" "}
                <span className="font-weight-bold">Add</span> or hit{" "}
                <span className="font-weight-bold">Enter</span> to add.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                value={currentSkill}
                onChange={(e) => setCurrentSkill(e.target.value)}
                onKeyPress={(e) => handleEnter(e)}
              />
            </div>
            <div className="col-3 pl-0">
              <button
                className="button-add"
                onClick={() => {
                  addSkill(currentSkill);
                  setCurrentSkill("");
                }}
              >
                Add
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-2">{mapSkills(skills)}</div>
          </div>
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

export default EditProfile;
