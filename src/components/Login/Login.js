import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div
      style={{
        backgroundColor: "var(--color-bg-light)",
        height: "100%",
        paddingTop: "50px",
      }}
    >
      <div className="login-bg col-11 col-sm-8 col-md-6 col-lg-4 mx-auto">
        <h1>Login to your account</h1>
        <p>
          Don't have an account? <Link to="/signup">Sign Up Free</Link>
        </p>
        <Link className="google-btn" to="">
          Continue with Google
        </Link>
        <div className="d-flex align-items-center my-3">
          <div className="bars"></div>
          <h5 className="mx-4 bar-text">OR</h5>
          <div className="bars"></div>
        </div>
        <form>
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
          <div className="my-3 text-end">
            <Link to="" className="forget-password">
              Forget Password?
            </Link>
          </div>
          <button type="submit" className="form-login-btn">
            Login with email
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
