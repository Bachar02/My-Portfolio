import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ExperienceCard = ({ experience }) => {
    const { type, entreprise, place, date, description } = experience;

    return (
        <Container fluid className="experience-section">
            <Row className="experience-row">
                <Col md={12}>
                    <Card className="experience-card">
                        <Card.Body>
                            <Card.Title>{entreprise}</Card.Title>
                            <Card.Subtitle className="mb-2">{type}</Card.Subtitle>
                            <Card.Text>
                                <strong>Place:</strong> {place}<br />
                                <strong>Date:</strong> {date}
                            </Card.Text>
                            <Card.Text>
                                <ul className="experience-description">
                                    {description.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ExperienceCard;