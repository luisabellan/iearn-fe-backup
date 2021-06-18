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
import { X } from "react-feather";

//Context
import withUser from "../../../../../utility/withContexts/withUser";

//API
import api from "../../../../../api/api";
import {
  multipleFilesUpload,
  s3DeleteFile,
} from "../../../../../utility/uploading/fileUpload";

//Components
import Spinner from "../../../../../components/spinner/spinner";
import Confirm from "../../_modals/confirmDelete";

const UploadedImages = ({ user, setUser, isOpen, toggle, dealID }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentImages, setCurrentImages] = useState([]);
  const [deal, setDeal] = useState({});
  const [chosenFile, setChosenFile] = useState({});
  const [confirm, setConfirm] = useState(false);

  const handleUpload = async (files) => {
    setIsLoading(true);

    api
      .get("/file-storage/credentials") // get credentials
      .then(async (response) => {
        // s3 client
        const credentials = response.data;
        const res = await multipleFilesUpload(
          files,
          `deal-${deal.id}`,
          credentials
        );
        if (res) {
          let arr = [...currentImages, ...res];
          api
            .patch(`/deals/${deal.id}`, { images: arr })
            .then((res) => {
              queryDeal();
            })
            .catch((err) => {
              console.log(err);
              setIsLoading(false);
            });
        }
      });
  };

  const handleDelete = () => {
    setIsLoading(true);

    api
      .get("/file-storage/credentials") // get credentials
      .then(async (response) => {
        // s3 client
        const credentials = response.data;
        const res = await s3DeleteFile(chosenFile.img.split("/")[1], credentials);

        if (res) {
          let arr = currentImages;
          arr.splice(chosenFile.index, 1);

          api
            .patch(`/deals/${deal.id}`, { images: arr })
            .then((res) => {
              queryDeal();
            })
            .catch((err) => {
              console.log(err);
              setIsLoading(false);
            });
        }
      });
  };

  const queryDeal = () => {
    setIsLoading(true);
    api
      .get(`/deals/${dealID}`)
      .then((res) => {
        setDeal(res.data);
        if (res.data.images) {
          setCurrentImages(res.data.images);
        }
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const mapImages = () => {
    if (isLoading) {
      return (
        <div className="col-12 text-center py-4">
          <Spinner />
        </div>
      );
    }

    if (currentImages.length) {
      return currentImages.map((img, index) => {
        return (
          <div className="col-lg-4 col-sm-6 text-center mb-3" key={index}>
            <button
              className="delete-button"
              onClick={() => {
                setChosenFile({ img, index });
                setConfirm(true);
              }}
            >
              <X size="14" />
            </button>
            <div className="img-container">
              <a
                href={`https://mentor-beast-nuclius.s3.us-east-2.amazonaws.com/${img}`}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <img
                  src={`https://mentor-beast-nuclius.s3.us-east-2.amazonaws.com/${img}`}
                  alt="Deal"
                />
              </a>
            </div>
          </div>
        );
      });
    }

    return (
      <p className="text-center my-3 mx-auto opacity-50">No images yet.</p>
    );
  };

  useEffect(() => {
    if (dealID) {
      queryDeal();
    }
  }, [dealID]);

  return (
    <>
      <Confirm {...{ isOpen: confirm, toggle: () => setConfirm(!confirm), handleDelete }} />
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
                handleUpload(files);
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
          <p className="mt-3 mb-0">Uploaded images:</p>
          <div className="previews-container row">{mapImages()}</div>
          <div className="row justify-content-center mt-3">
            <div className="col-6">
              <Button
                className="mt-2 mb-2"
                block
                size="md"
                color="primary"
                onClick={() => toggle()}
                disabled={isLoading}
              >
                BACK
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default withUser(UploadedImages);
