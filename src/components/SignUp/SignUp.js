import React from "react";
import { Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase/firebase.init";
import Loader from "../Loader/Loader";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();

  // handle registration using name, email and password
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };

  // if create user
  if (user) {
    navigate("/");
  }
  // loading
  if (loading) {
    return <Loader />;
  }
  // declare a variable for store error message
  let errorMessage = "";
  // error message
  if (error) {
    errorMessage = <p className="text-danger">Error: {error?.message}</p>;
  }

  return (
    <div
      style={{
        backgroundColor: "var(--color-bg-light)",
        height: "100vh",
        paddingTop: "50px",
      }}
    >
      <div className="login-bg col-11 col-sm-8 col-md-6 col-lg-4 mx-auto">
        <h1 className="mb-4">Sign up for free</h1>
        <form onSubmit={handleRegister}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Full name"
              name="name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email address"
              name="email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              required
            />
          </Form.Group>

          {errorMessage}

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
