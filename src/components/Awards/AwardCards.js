import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function AwardCard({ id, imgPath, title, place, year, description }) {
  return (
    <Card className="project-card-view" style={{ minHeight: "100%" }}>
      {/* Image */}
      <div style={{ height: "300px", overflow: "hidden" }}>
        <Card.Img
          variant="top"
          src={imgPath}
          alt="award-img"
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
        />
      </div>

      {/* Body */}
      <Card.Body>
        {/* Title */}
        <Card.Title style={{ fontWeight: "bold" }}>{title}</Card.Title>

        {/* Place (1st, 2nd...) */}
        {place && (
          <Card.Subtitle
            className="mb-2"
            style={{ color: "#6f42c1", fontWeight: "700" }}
          >
            {place}
          </Card.Subtitle>
        )}

        {/* Year */}
        {year && (
          <Card.Subtitle className="mb-2 text-muted">{year}</Card.Subtitle>
        )}

        {/* Description */}
        <Card.Text style={{ textAlign: "center", paddingTop: "5px"}}>
          {description}
        </Card.Text>

        {/* Link */}
        <Link to={`/awards/${id}`} className="btn btn-outline-primary btn-sm">
          View More
        </Link>
      </Card.Body>
    </Card>
  );
}

export default AwardCard;

