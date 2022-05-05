import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "400px" }}
    >
      <Spinner animation="grow" variant="dark" />
    </div>
  );
};

export default Loader;
