import React, { useState } from "react";
import "react-image-crop/dist/ReactCrop.css";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const PasswordUpdated = ({ isOpen, toggle }) => {
  return (
    <>
      <Modal
        {...{ isOpen, toggle }}
        size="md"
        centered={true}
        className="edit-market"
      >
        <ModalHeader toggle={() => toggle()}>Password Updated</ModalHeader>
        <ModalBody className="text-center p-3 pb-4">
          <p>
            Password successfully updated. You may now use your new password to
            login to your account.
          </p>
          <button
            color="primary"
            block="true"
            className="button-submain mt-2"
            onClick={() => toggle()}
          >
            CONTINUE
          </button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default PasswordUpdated;
