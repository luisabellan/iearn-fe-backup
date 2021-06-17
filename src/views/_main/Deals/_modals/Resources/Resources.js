import React, { useState, useEffect } from "react";
import "./resources.scss";
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
import { File } from "react-feather";
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

const UploadedResources = ({ user, setUser, isOpen, toggle, dealID }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentFiles, setCurrentFiles] = useState([]);
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
          let sources = [...res];
          let newFiles = [];

          for (let x = 0; x < files.length; x++) {
            newFiles.push({
              file: sources[x],
              name: files[x].name,
            });
          }

          const combinedFiles = [...currentFiles, ...newFiles];

          api
            .patch(`/deals/${deal.id}`, { resources: combinedFiles })
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
        if (res.data.resources) {
          setCurrentFiles(res.data.resources);
        }
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const mapFiles = () => {
    if (isLoading) {
      return (
        <div className="col-12 text-center py-4">
          <Spinner />
        </div>
      );
    }

    if (currentFiles.length) {
      return currentFiles.map((file, index) => {
        return (
          <div className="col-4 text-center mb-3" key={index}>
            <div className="file-container">
              <p>
                <File size="60" color="#ccc" />
              </p>
              <p className="mb-0 text-capitalize">
                <a
                  href={`https://mentor-beast-nuclius.s3.us-east-2.amazonaws.com/${file.file}`}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {file.name}
                </a>
              </p>
            </div>
          </div>
        );
      });
    }

    return <p className="text-center my-3 mx-auto opacity-50">No files yet.</p>;
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
        <ModalHeader toggle={() => toggle()}>Deal Resources</ModalHeader>
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
                  <p>Click to select files here</p>
                </div>
              );
            }}
          </Dropzone>
          <p className="mt-3 mb-0">Uploaded files:</p>
          <div className="previews-container row">{mapFiles()}</div>
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

export default withUser(UploadedResources);