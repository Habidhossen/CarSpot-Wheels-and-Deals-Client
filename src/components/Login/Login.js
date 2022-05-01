import React from "react";
import { Form } from "react-bootstrap";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase/firebase.init";
import Loader from "../Loader/Loader";
import "./Login.css";

const Login = () => {
  // from react firebase hooks
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useSignInWithEmailAndPassword(auth);
  // const [sendPasswordResetEmail, sending, error] =
  //   useSendPasswordResetEmail(auth);

  // use navigate hook
  const navigate = useNavigate();

  // handle google sign-in
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  // handle email-password sign-in
  const handleEmailSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  // handle forget password
  // const handleForgetPassword = (event) => {
  //   event.preventDefault();
  //   const email = event.target.email.value;
  //   sendPasswordResetEmail(email);
  // };

  // if get user
  if (googleUser || emailUser) {
    navigate("/");
  }
  // loading
  if (googleLoading || emailLoading) {
    return <Loader />;
  }
  // declare a variable for store error message
  let errorMessage = "";
  // error message
  if (googleError || emailError) {
    errorMessage = (
      <p className="text-danger">
        Error: {googleError?.message || emailError?.message}
      </p>
    );
  }

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

        {/* google login button */}
        <button onClick={handleGoogleSignIn} className="google-btn">
          Continue with Google
        </button>

        <div className="d-flex align-items-center my-3">
          <div className="bars"></div>
          <h5 className="mx-4 bar-text">OR</h5>
          <div className="bars"></div>
        </div>
        <form onSubmit={handleEmailSignIn}>
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
          <div className="my-3 text-end">
            <button className="forget-password">Forget Password?</button>
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
