import React, { useState } from "react";
import { Alert } from "react-bootstrap";

const Error = ({ show, message, fireBaseError, handleErrorClose }) => {
  // onClose={() => setShow(false)}
  if (show) {
    return (
      <Alert
        variant="danger"
        onClose={() => handleErrorClose(show)}
        dismissible
      >
        <p className="text-center">{message}</p>
      </Alert>
    );
  }
};

export default Error;
