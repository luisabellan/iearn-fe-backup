import React from "react";
import { Toast, ToastHeader, ToastBody } from "reactstrap";

const toast = ({ isOpen, message = "Your data has been saved." }) => {
  return (
    <div className="toaster-container">
      <Toast className="toast-success" isOpen={isOpen}>
        <ToastHeader>Success</ToastHeader>
        <ToastBody>{message}</ToastBody>
      </Toast>
    </div>
  );
};

export default toast;
