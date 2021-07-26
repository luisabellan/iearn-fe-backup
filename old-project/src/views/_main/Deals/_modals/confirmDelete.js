import React from "react";
import { Modal, ModalBody, ModalHeader, Button } from "reactstrap";

const UploadedImages = ({ isOpen, toggle, handleDelete }) => {
  return (
    <>
      <Modal {...{ isOpen, toggle }} size="md" centered={true}>
        <ModalHeader toggle={() => toggle()}>Delete Confirmation</ModalHeader>
        <ModalBody>
          <p>Are you sure you want delete the file?</p>
          <div className="row justify-content-center mt-3">
            <div className="col-6">
              <Button
                className="mt-2 mb-2"
                color="secondary"
                block
                onClick={() => toggle()}
              >
                BACK
              </Button>
            </div>
            <div className="col-6">
              <Button
                className="mt-2 mb-2"
                color="primary"
                block
                onClick={() => {
                  handleDelete();
                  toggle();
                }}
              >
                CONFIRM
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default UploadedImages;
