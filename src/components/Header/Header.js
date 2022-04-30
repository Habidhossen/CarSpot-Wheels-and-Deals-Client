import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
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
            <Link className="nav-link" to="/">
              My Items
            </Link>
            <CustomLink className="nav-link" to="/blog">
              Blog
            </CustomLink>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
            {/* <Button>Login</Button> */}
            <Link className="login-btn" to="login">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
