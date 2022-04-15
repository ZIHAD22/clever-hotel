import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <Navbar bg="dark" sticky="top" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Clever Hotel</Navbar.Brand>
        <Nav className="ms-auto d-flex align-items-center ">
          <CustomLink className="navbar" to="/">
            Home
          </CustomLink>
          <CustomLink className="navbar" to="/hotels">
            Hotels
          </CustomLink>
          <CustomLink className="navbar" to="/login">
            Login
          </CustomLink>
          <CustomLink className="navbar" to="/signup">
            Sign Up
          </CustomLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
