import React from "react";
import { Container, Row } from "react-bootstrap";
import useHotelsDetails from "../../hooks/useHotelDetails";
import HotelItem from "../HotelItem/HotelItem";

const Hotels = () => {
  const [hotels] = useHotelsDetails();
  console.log(hotels);
  return (
    <div className="my-5">
      <Container>
        <Row className="gy-4 ">
          {hotels?.map((hotel) => (
            <HotelItem hotel={hotel} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Hotels;
