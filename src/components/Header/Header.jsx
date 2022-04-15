import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../fireBase.init";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  console.log(user);
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
          {user ? (
            <CustomLink className="navbar" to="/profile">
              {user?.displayName}
            </CustomLink>
          ) : (
            <>
              <CustomLink className="navbar" to="/login">
                Login
              </CustomLink>
              <CustomLink className="navbar" to="/signup">
                Sign Up
              </CustomLink>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
