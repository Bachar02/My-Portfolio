import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>

        </Row>

      </Container>
    </Container>
  );
}

export default About;
