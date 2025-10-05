import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ExperienceCard = ({ experience, index = 0 }) => {
    const { type, entreprise, place, date, description, workMode } = experience;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Container fluid className="experience-section" style={{ padding: 0, marginBottom: "20px" }}>
            <Row className="experience-row">
                <Col md={12}>
                    <div 
                        className="experience-card-wrapper"
                        style={{
                            opacity: 0,
                            animation: `fadeInUp 0.6s ease-out ${index * 0.15}s forwards`,
                            marginBottom: "30px"
                        }}
                    >
                        <Card 
                            className="experience-card"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            style={{
                                background: "linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)",
                                backdropFilter: "blur(10px)",
                                borderRadius: "16px",
                                border: "1px solid rgba(99, 102, 241, 0.2)",
                                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                                boxShadow: isHovered 
                                    ? "0 20px 40px rgba(99, 102, 241, 0.15)" 
                                    : "0 4px 12px rgba(0, 0, 0, 0.08)",
                                position: "relative",
                                overflow: "hidden"
                            }}
                        >
                            {/* Animated background gradient */}
                            <div
                                className="card-hover-overlay"
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)",
                                    opacity: isHovered ? 1 : 0,
                                    transition: "opacity 0.3s ease",
                                    pointerEvents: "none"
                                }}
                            />

                            <Card.Body style={{ position: "relative", zIndex: 1, padding: "28px" }}>
                                {/* Header Section */}
                                <div className="experience-header" style={{ marginBottom: "20px" }}>
                                    <Card.Title style={{
                                        fontSize: "1.5rem",
                                        fontWeight: "700",
                                        marginBottom: "8px",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px"
                                    }}>
                                        <span 
                                            role="img" 
                                            aria-label="company-logo"
                                            style={{
                                                background: "linear-gradient(135deg, #2978d1ff 0%, #4a9eff 100%)",
                                                padding: "8px 12px",
                                                borderRadius: "8px",
                                                fontSize: "1.2rem"
                                            }}
                                        >
                                            🏢
                                        </span>
                                        <span style={{
                                            background: "linear-gradient(135deg, #2978d1ff 0%, #4a9eff 100%)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            backgroundClip: "text"
                                        }}>
                                            {entreprise}
                                        </span>
                                    </Card.Title>
                                    
                                    <Card.Subtitle 
                                        className="mb-3"
                                        style={{
                                            fontSize: "1rem",
                                            fontWeight: "600",
                                            color: "#4a9eff"
                                        }}
                                    >
                                        {type}
                                    </Card.Subtitle>
                                </div>

                                {/* Meta Information */}
                                <div className="experience-meta" style={{ 
                                    display: "flex", 
                                    flexWrap: "wrap", 
                                    gap: "12px", 
                                    marginBottom: "20px" 
                                }}>
                                    <div style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "6px",
                                        padding: "6px 14px",
                                        background: "rgba(99, 102, 241, 0.1)",
                                        borderRadius: "20px",
                                        fontSize: "0.9rem",
                                        color: "#97a1afff",
                                        border: "1px solid rgba(99, 102, 241, 0.2)"
                                    }}>
                                        <span role="img" aria-label="location">📍</span>
                                        <span style={{ fontWeight: "500" }}>{place}</span>
                                    </div>
                                    
                                    <div style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "6px",
                                        padding: "6px 14px",
                                        background: "rgba(168, 85, 247, 0.1)",
                                        borderRadius: "20px",
                                        fontSize: "0.9rem",
                                        color: "#97a1afff",
                                        border: "1px solid rgba(168, 85, 247, 0.2)"
                                    }}>
                                        <span role="img" aria-label="date">📅</span>
                                        <span style={{ fontWeight: "500" }}>{date}</span>
                                    </div>

                                    {workMode && (
                                        <div style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "6px",
                                            padding: "6px 14px",
                                            background: workMode === "Remote" 
                                                ? "rgba(16, 185, 129, 0.1)" 
                                                : workMode === "Hybrid"
                                                ? "rgba(141, 31, 243, 0.1)"
                                                : "rgba(141, 31, 243, 0.1)",
                                            borderRadius: "20px",
                                            fontSize: "0.9rem",
                                            color: "#97a1afff",
                                            border: workMode === "Remote" 
                                                ? "1px solid rgba(16, 185, 129, 0.2)" 
                                                : workMode === "Hybrid"
                                                ? "1px solid rgba(147, 51, 234, 0.2)"
                                                : "1px solid rgba(249, 115, 22, 0.2)"
                                        }}>
                                            <span role="img" aria-label="work-mode">
                                                {workMode === "Remote" ? "🏠" : workMode === "Hybrid" ? "🔄" : "🏢"}
                                            </span>
                                            <span style={{ fontWeight: "500" }}>{workMode}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Description Section */}
                                <Card.Text>
                                    <div style={{
                                        marginTop: "20px",
                                        paddingTop: "20px",
                                        borderTop: "1px solid rgba(99, 102, 241, 0.1)"
                                    }}>
                                        <ul 
                                            className="experience-description"
                                            style={{
                                                listStyle: "none",
                                                padding: 0,
                                                margin: 0
                                            }}
                                        >
                                            {description.map((point, idx) => (
                                                <li 
                                                    key={idx}
                                                    style={{
                                                        marginBottom: "12px",
                                                        paddingLeft: "28px",
                                                        position: "relative",
                                                        color: "#97a1afff",
                                                        fontSize: "0.95rem",
                                                        lineHeight: "1.6",
                                                        opacity: 0,
                                                        animation: `fadeIn 0.4s ease-out ${(index * 0.15) + (idx * 0.1) + 0.3}s forwards`
                                                    }}
                                                >
                                                    <span 
                                                        role="img" 
                                                        aria-label="check"
                                                        style={{
                                                            position: "absolute",
                                                            left: 0,
                                                            top: "2px",
                                                            width: "20px",
                                                            height: "20px",
                                                            background: "linear-gradient(135deg, #2978d1ff 0%, #4a9eff 100%)",
                                                            borderRadius: "50%",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            fontSize: "0.7rem",
                                                            color: "white"
                                                        }}
                                                    >
                                                        ✓
                                                    </span>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
            
            {/* Inline Keyframe Styles */}
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
            `}</style>
        </Container>
    );
};

export default ExperienceCard;