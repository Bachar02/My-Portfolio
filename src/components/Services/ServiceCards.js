import React from "react";
import Card from "react-bootstrap/Card";
import { FaCheck } from "react-icons/fa";

function ServiceCards(props) {
  const Icon = props.icon;

  return (
    <Card className="project-card-view">
      <Card.Body style={{ padding: "30px 25px" }}>
        <div
          style={{
            fontSize: "3em",
            color: "var(--imp-text-color)",
            paddingBottom: "15px",
          }}
        >
          <Icon />
        </div>

        <Card.Title style={{ fontWeight: "bold", fontSize: "1.4em" }}>
          {props.title}
        </Card.Title>

        <Card.Text style={{ textAlign: "justify", paddingTop: "10px" }}>
          {props.description}
        </Card.Text>

        <ul style={{ listStyle: "none", padding: 0, margin: 0, textAlign: "left" }}>
          {props.points.map((point, idx) => (
            <li key={idx} style={{ marginBottom: "10px", display: "flex", gap: "10px" }}>
              <FaCheck
                className="purple"
                style={{ flexShrink: 0, marginTop: "4px", fontSize: "0.85em" }}
              />
              <span style={{ color: "#97a1afff" }}>{point}</span>
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
}

export default ServiceCards;
