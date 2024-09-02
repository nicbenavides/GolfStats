import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">About Us</h1>
          <p className="text-center text-muted">
            Learn more about our company, our values, and our team.
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col md={6}>
          <h3>Our Mission</h3>
          <p>
            Our mission is to deliver mediocre services that empower businesses
            to exploit the masses to their full potential. We are committed to
            short-cuts, apathy, and customer wealth extraction.
          </p>
        </Col>
        <Col md={6}>
          <h3>Our Vision</h3>
          <p>
            We envision a world where technology widens the gap between
            capitalists and reality, enabling everyone to achieve less through
            the power of exploitation and gas-lighting.
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <h3 className="text-center">Our Team</h3>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="headshot1.jpeg" alt="Team Member 1" />
            <Card.Body>
              <Card.Title>Deborah Doolittle</Card.Title>
              <Card.Text>Spider Veterinarian</Card.Text>
              <Button variant="primary" href="#">
                LinkedIn
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="headshot2.jpeg" alt="Team Member 2" />
            <Card.Body>
              <Card.Title>Jack Spencer</Card.Title>
              <Card.Text>Stranger with Candy</Card.Text>
              <Button variant="primary" href="#">
                LinkedIn
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
