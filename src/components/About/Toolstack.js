import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiDocker, SiAmazon } from "react-icons/si";
import { FaUbuntu } from "react-icons/fa";
import { DiGit } from "react-icons/di";
// import { SiMatlab } from "react-icons/si"; // MATLAB icon
// import { SiSolidworks } from "react-icons/si"; // SolidWorks icon
// import { SiOdoo } from 'react-icons/si';

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaUbuntu />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazon />
      </Col>
    </Row>
  );
}

export default Toolstack;
