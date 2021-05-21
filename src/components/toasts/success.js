import React from "react";
import { Toast, ToastHeader, ToastBody } from "reactstrap";

const toast = ({ isOpen }) => {
  return (
    <div className="toaster-container">
      <Toast className="toast-success" isOpen={isOpen}>
        <ToastHeader>Success</ToastHeader>
        <ToastBody>Your data has been saved.</ToastBody>
      </Toast>
    </div>
  );
};

export default toast;
