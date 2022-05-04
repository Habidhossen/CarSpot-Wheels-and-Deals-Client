import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase/firebase.init";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  // get user from react-firebase-hooks auth state
  const [user] = useAuthState(auth);

  // handle logout
  const logout = () => {
    signOut(auth);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Link to="/" className="navbar-brand">
          CarSpot
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <CustomLink className="nav-link" to="/">
              Home
            </CustomLink>
            <Link className="nav-link" to="/">
              Manage Inventory
            </Link>
            <Link className="nav-link" to="/add-inventory">
              Add Items
            </Link>
            {/* <Link className="nav-link" to="/">
              My Items
            </Link> */}
            {/* {user ? (
              <Link className="nav-link" to="/">
                Add Item
              </Link>
            ) : (
              ""
            )}
            {user ? (
              <Link className="nav-link" to="/">
                My Items
              </Link>
            ) : (
              ""
            )} */}
            <CustomLink className="nav-link" to="/blog">
              Blog
            </CustomLink>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </Nav>
          <Nav>
            {user ? (
              <button onClick={logout} className="logout-btn">
                Logout
              </button>
            ) : (
              <Link className="login-btn" to="login">
                Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
