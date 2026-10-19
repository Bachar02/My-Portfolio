import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiDocker, SiGit, SiLinux, SiN8N, SiOdoo, SiJupyter } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const tools = [
  { icon: SiDocker, label: "Docker" },
  { icon: SiGit, label: "Git" },
  { icon: SiLinux, label: "Linux" },
  { icon: SiN8N, label: "n8n" },
  { icon: SiOdoo, label: "Odoo" },
  { icon: SiJupyter, label: "Jupyter" },
  { icon: TbBrandVscode, label: "VS Code" },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map(({ icon: Icon, label }) => (
        <Col xs={4} md={2} className="tech-icons" key={label} title={label}>
          <Icon />
          <span className="tech-label">{label}</span>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
