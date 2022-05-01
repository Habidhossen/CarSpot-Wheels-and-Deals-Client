import React from "react";
import { Form } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase/firebase.init";
import "./Login.css";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  // handle google sign-in
  const handleGoogleSignIn = () => {
    signInWithGoogle();
    // navigate("/");
  };

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
        <form>
          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Email address" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
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
