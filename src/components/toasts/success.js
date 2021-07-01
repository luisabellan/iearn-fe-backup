import React from "react";
import { Toast, ToastHeader, ToastBody } from "reactstrap";

const toast = ({ isOpen, message = "Data saved successfully." }) => {
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
