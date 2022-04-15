import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Error from "../Error/Error";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [handleError, setError] = useState("");
  const [show, setShow] = useState(false);
  let location = useLocation();
  let from = location.state?.from?.pathname;

  if (from === "login") {
    setError("Login SuccessFul");
    setShow(true);
  }

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
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
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height="710px"
            src="https://img.freepik.com/free-photo/beautiful-luxury-outdoor-swimming-pool-hotel-resort_74190-7433.jpg?t=st=1650021077~exp=1650021677~hmac=98f0b367a6775355c899820d65da35593552818efc11128da28e2e479f6dd93b&w=900"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="710px"
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/hotel-room_321831-251.jpg?w=900"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="710px"
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv-working-table_105762-845.jpg?w=900"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>Third slide label</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
