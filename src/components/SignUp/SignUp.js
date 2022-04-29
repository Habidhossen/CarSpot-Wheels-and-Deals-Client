import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div
      style={{
        backgroundColor: "var(--color-bg-light)",
        height: "100vh",
        paddingTop: "50px",
      }}
    >
      <div className="login-bg col-4 mx-auto">
        <h1 className="mb-4">Sign up for free</h1>
        <form>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Full name" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Email address" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          {/* <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control
          type="email"
          placeholder="name@example.com"
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" required />
      </FloatingLabel> */}

          <button type="submit" className="form-login-btn">
            Sign up with email
          </button>
          <div className="my-3">
            <p>
              Already an account? <Link to="/login">Login here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
