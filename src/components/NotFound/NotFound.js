import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    // <section className="d-flex" style={{ height: "500px" }}>
    <section>
      <div className="not-found-container">
        <h1>Oops!</h1>
        <h5>404 - Page not found</h5>
        <p>The page you're looking for isn't here.</p>
        <Link to="/" className="not-found-btn">
          GO TO HOMEPAGE
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
