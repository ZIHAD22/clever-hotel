import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import useInputValues from "../../hooks/useInputValues";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../fireBase.init";
import Error from "../Error/Error";

const SignUp = () => {
  // handle Error
  const [handleError, setError] = useState("");
  const [show, setShow] = useState(false);

  // All input value
  const [email, password, confirmPassword, agree, handleChangeBlur] =
    useInputValues();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  // handle submit from
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password && confirmPassword && agree) {
      if (agree) {
        if (password === confirmPassword) {
          createUserWithEmailAndPassword(email, password);
          if (error?.message) {
            setError(error.message);
            setShow(true);
          }
        } else {
          setError("Your Password and Confirm password is not match");
          setShow(true);
        }
      } else {
        setError("please Agree to Our trams and condition");
        setShow(true);
      }
    } else {
      setError("Please Provide Every Info That we want");
    }
  };

  //handle Close Error
  const handleErrorClose = (state) => {
    setShow(!state);
  };
  return (
    <div>
      <div className="w-25  position-absolute end-0">
        <Error
          show={show}
          message={handleError}
          handleErrorClose={handleErrorClose}
        />
      </div>
      <div className="w-50 mx-auto">
        <Container>
          <Form onSubmit={handleSubmit}>
            <h3 className="text-center my-3">Sign Up</h3>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onBlur={handleChangeBlur}
                placeholder="Enter Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onBlur={handleChangeBlur}
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onBlur={handleChangeBlur}
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password </Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                onBlur={handleChangeBlur}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Accept All Trams and Condition"
                name="agree"
                onBlur={handleChangeBlur}
              />
            </Form.Group>
            <div className="text-center">
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </div>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default SignUp;
