import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiPostman } from "react-icons/si";
import { FaUbuntu } from "react-icons/fa"; // Ubuntu icon
import { SiAndroidstudio } from "react-icons/si"; // Android Studio icon
// import { SiMatlab } from "react-icons/si"; // MATLAB icon
// import { SiSolidworks } from "react-icons/si"; // SolidWorks icon
// import { SiOdoo } from 'react-icons/si';

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Development Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>

      {/* Platforms/Operating Systems */}
      <Col xs={4} md={2} className="tech-icons">
        <FaUbuntu />
      </Col>

      {/* Software/Tools */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMatlab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidworks />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiOdoo />
      </Col> */}
    </Row>
  );
}

export default Toolstack;
