import React, { useState, useEffect, useRef, useCallback } from "react";
import "./ProfilePicture.scss";
import Dropzone from "react-dropzone";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import {
  Button,
  Form,
  FormGroup,
  Modal,
  ModalBody,
  ModalHeader,
  Alert,
} from "reactstrap";
import classNames from "classnames";
import { Formik } from "formik";
import * as Yup from "yup";
import { BsUpload } from "react-icons/bs";

//API
import api from "../../../../../api/api";
import {
  s3Upload,
  generateFilename,
} from "../../../../../utility/uploading/fileUpload";

const ProfilePicture = ({ profile, isOpen, toggle }) => {
  const [src, setSrc] = useState(null);
  const imgRef = useRef(null);
  const [crop, setCrop] = useState({ height: 200, width: 200, aspect: 1 });
  const [completedCrop, setCompletedCrop] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [rawFile, setRawFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const pixelRatio = window.devicePixelRatio || 1;

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  useEffect(() => {
    if (!completedCrop || !imgRef.current) {
      return;
    }

    const canvas = document.createElement("canvas");
    const image = imgRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");

    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
    // const base64Image = canvas.toDataURL("image/jpeg");
    canvas.toBlob((blob) => setCroppedImage(blob), "image/jpeg");

    // setCroppedImage(base64Image);
  }, [completedCrop]);

  useEffect(() => {
    return () => {
      setSrc(null);
    };
  }, []);

  //Formik Properties
  const profilePictureValidationSchema = Yup.object().shape({
    pictureFile: Yup.mixed(),
  });

  const profilePictureInitialValues = {
    pictureFile: null,
  };

  const onSubmit = async (values) => {
    let { pictureFile } = values;
    setIsLoading(true);

    if (pictureFile) {
      const file = new File([croppedImage], rawFile.name, {
        type: rawFile.type,
      });
      api
        .get("/file-storage/credentials") // get credentials
        .then((response) => {
          const credentials = response.data;
          const filename = generateFilename(
            file.name,
            "profile",
            credentials.Randomchar
          );

          s3Upload(file, filename, credentials).then((data) => {
            api
              .patch(`/users/${profile.id}`, { userImg: data.key })
              .then(() => {
                toggle();
                window.location.reload();
              });
          });
        });
    } else {
      setError(true);
    }
  };

  return (
    <Modal {...{ isOpen, toggle }}>
      <ModalHeader toggle={() => toggle()}>Update Profile Picture</ModalHeader>
      <ModalBody>
        <ModalBody>
          {error && (
            <Alert color="warning" fade={false}>
              There was an error while uploading the file.
              {/* <ul className="pl-3 mb-0">
                {addEmployeeError.response.data.errors.map(({ message }) => (
                  <li key={message}>{message}</li>
                ))}
              </ul> */}
            </Alert>
          )}
          <Formik
            enableReinitialize
            initialValues={profilePictureInitialValues}
            validationSchema={profilePictureValidationSchema}
            onSubmit={onSubmit}
          >
            {({
              handleSubmit,
              handleBlur,
              handleChange,
              values,
              touched,
              errors,
              setFieldValue,
            }) => {
              return (
                <Form className="px-3">
                  <fieldset disabled={isLoading}>
                    <FormGroup className="mb-2">
                      <div className="select-profile-picture-top-section">
                        {/* <Label className="mb-1" for="lastName">
                          PROFILE PICTURE
                        </Label> */}
                        {src && values.pictureFile && (
                          <div className="buttons-section">
                            <Button
                              size="sm"
                              color="secondary"
                              onClick={() => {
                                setSrc(null);
                                setFieldValue("pictureFile", null);
                              }}
                            >
                              Reset
                            </Button>
                          </div>
                        )}
                      </div>
                      <div
                        className={classNames("add-employee-container", {
                          "picture-warning":
                            !!errors.pictureFile && !!touched.pictureFile,
                          "picture-border": !values.pictureFile,
                        })}
                      >
                        {src && values.pictureFile ? (
                          <ReactCrop
                            imageStyle={{ height: 200 }}
                            src={values.pictureFile}
                            onImageLoaded={onLoad}
                            crop={crop}
                            onChange={(c) => {
                              setCrop(c);
                            }}
                            onComplete={async (c) => {
                              setCompletedCrop(c);
                            }}
                            minWidth={100}
                            minHeight={100}
                          />
                        ) : (
                          <Dropzone
                            onDrop={(files) => {
                              if (files && files.length > 0) {
                                const reader = new FileReader();
                                reader.addEventListener("load", () => {
                                  setSrc(reader.result);
                                  setFieldValue("pictureFile", reader.result);
                                });
                                reader.readAsDataURL(files[0]);
                                setRawFile(files[0]);
                                setError(false);
                              }
                            }}
                          >
                            {({ getRootProps, getInputProps }) => {
                              return (
                                <div
                                  className="image-crop-container"
                                  {...getRootProps()}
                                >
                                  <input {...getInputProps()} />
                                  <BsUpload color="gray" size={30} />
                                  <p>Drag and Drop </p>
                                  <p>Or</p>
                                  <p>Click to select an image here</p>
                                </div>
                              );
                            }}
                          </Dropzone>
                        )}
                      </div>
                      <p className="red mb-0 picture-error-message">
                        {touched.pictureFile && errors.pictureFile}
                      </p>
                    </FormGroup>
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
                          CANCEL
                        </Button>
                      </div>
                      <div className="col-6">
                        <Button
                          className="mt-2 mb-2"
                          block
                          size="md"
                          color="primary"
                          type="submit"
                          onClick={handleSubmit}
                          disabled={isLoading}
                        >
                          UPLOAD
                        </Button>
                      </div>
                    </div>
                  </fieldset>
                </Form>
              );
            }}
          </Formik>
        </ModalBody>
      </ModalBody>
    </Modal>
  );
};

export default ProfilePicture;
