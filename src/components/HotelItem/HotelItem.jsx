import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const HotelItem = ({ hotel }) => {
  return (
    <Col md={4} className="text-center">
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={hotel.img} />
        <Card.Body>
          <Card.Title>{hotel.name}</Card.Title>
          <Card.Text>{hotel.desc}</Card.Text>
          <Button variant="primary">Book Now</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default HotelItem;
