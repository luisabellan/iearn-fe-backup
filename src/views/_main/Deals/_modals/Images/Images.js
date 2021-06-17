import React, { useState, useEffect } from "react";
import "./images.scss";
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
  Input,
} from "reactstrap";
import Dropzone from "react-dropzone";
import { BsUpload } from "react-icons/bs";

//Context
import withUser from "../../../../../utility/withContexts/withUser";

//API
import api from "../../../../../api/api";

//Components
import ToastSuccess from "../../../../../components/toasts/success";

const EditMarket = ({ user, setUser, isOpen, toggle }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [src, setSrc] = useState([]);

  const handleDrop = (files, allFiles) => {};

  const handleUpload = (e) => {
    const files = e.target.files;
    console.log(files);
  };

  return (
    <>
      <Modal
        {...{ isOpen, toggle }}
        size="lg"
        centered={true}
        className="edit-market"
      >
        <ModalHeader toggle={() => toggle()}>Deal Images</ModalHeader>
        <ModalBody className="images-container">
          {error && (
            <Alert color="warning" fade={false}>
              There was an error while saving. Please retry after a while.
            </Alert>
          )}
          <Dropzone
            onDrop={(files) => {
              if (files && files.length > 0) {
                console.log(files);
                files.forEach((file) => {
                  console.log(file.file);
                });
                // const reader = new FileReader();
                // reader.addEventListener("load", () => {
                //   setSrc(reader.result);
                // });
                // reader.readAsDataURL(files[0]);
                // setRawFile(files[0]);
                // setError(false);
              }
            }}
          >
            {({ getRootProps, getInputProps }) => {
              return (
                <div className="image-crop-container" {...getRootProps()}>
                  <input {...getInputProps()} />
                  <BsUpload color="gray" size={30} />
                  <p>Drag and Drop </p>
                  <p>Or</p>
                  <p>Click to select an image here</p>
                </div>
              );
            }}
          </Dropzone>
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

export default withUser(EditMarket);
