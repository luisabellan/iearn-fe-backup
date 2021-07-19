import React from "react";
import { Toast, ToastHeader, ToastBody } from "reactstrap";

const toast = ({ isOpen }) => {
  return (
    <div className="toaster-container bg-danger">
      <Toast className="toast-fail" isOpen={isOpen}>
        <ToastHeader>Error</ToastHeader>
        <ToastBody>Oops! Something went wrong. Please try again later or refresh the page.</ToastBody>
      </Toast>
    </div>
  );
};

export default toast;
