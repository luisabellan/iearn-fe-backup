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
import { multipleFilesUpload } from "../../../../../utility/uploading/fileUpload";

//Components
import ToastSuccess from "../../../../../components/toasts/success";
import Spinner from "../../../../../components/spinner/spinner";

const UploadedImages = ({ user, setUser, isOpen, toggle, dealID }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentImages, setCurrentImages] = useState([]);
  const [deal, setDeal] = useState({});

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

  const queryDeal = () => {
    setIsLoading(true);
    api
      .get(`/deals/${dealID}`)
      .then((res) => {
        console.log(res.data);
        setDeal(res.data);
        setCurrentImages(res.data.images);
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
          <div className="col-4 text-center img-container mb-3" key={index}>
            <img
              src={`https://mentor-beast-nuclius.s3.us-east-2.amazonaws.com/${img}`}
              alt="Deal"
            />
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
                type="submit"
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
