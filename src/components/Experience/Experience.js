import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";

const experiences = [
    {
        type: " AI Engineering Intern",
        entreprise: "YONNOV'IA",
        place: "Marseille, France",
        date: "06/2025 – 08/2025",
        workMode: "Remote",
        description: [
            "Collaborated on the design and development of an intelligent virtual assistant integrated with the open-source ERP system, Odoo.",
            "Evaluated, selected and integrated Large Language Models (LLMs) tailored to business needs.",
            "Adapted and fine-tuned LLMs to meet specific business logic and user interaction requirements for the virtual assistant."
        ],
    },
    {
        type: "Robotics Instructor",
        entreprise: "EIF Menzah 1",
        place: "Tunis, Tunisia",
        date: "10/2024 – 03/2025",
        workMode: "On-site",
        description: [
            "Taught basic robotics and programming concepts to children aged 8–12 through interactive and hands-on sessions."
        ],
    },
    {
        type: " Data & NLP Intern",
        entreprise: "ACOBA",
        place: "Monastir, Tunisia",
        date: "07/2024 – 09/2024",
        workMode: "Hybrid",
        description: [
            "Scraped real-time real estate data from French website (Leboncoin) using Python and API integrations, creating a structured dataset for analysis.",
            "Processed and cleaned scraped data using NLP techniques to prepare it for efficient retrieval and integration into the chatbot's knowledge base.",
            "Engineered an intelligent chatbot from scratch using the Rasa framework to automate user queries and provide filtered, accurate property information.",
            "Built and fine-tuned NLP models within Rasa, defining intents, entities, and conversational flows to accurately understand and respond to user requests."
        ],
    },
    {
        type: "Logistics Optimisation Intern",
        entreprise: "Draxlmaier",
        place: "Monastir, Tunisia",
        date: "08/2023 – 09/2023",
        workMode: "On-site",
        description: [
            "Worked on optimizing workflow in the logistics department by identifying and implementing improvements to enhance operational efficiency."
        ],
    }
];

function Experience() {
    return (
        <Container 
            fluid 
            className="about-section" 
            style={{
                minHeight: "100vh",
                padding: "60px 0",
                position: "relative",
                background: "linear-gradient(to bottom, #f9fafb 0%, #ffffff 100%)"
            }}
        >
            <Particle />
            
            {/* Decorative Background Elements */}
            <div 
                className="decorative-element decorative-top" 
                style={{
                    position: "absolute",
                    top: "10%",
                    right: "5%",
                    width: "300px",
                    height: "300px",
                    background: "radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)",
                    borderRadius: "50%",
                    pointerEvents: "none",
                    zIndex: 0,
                    animation: "pulse 4s ease-in-out infinite"
                }}
            />
            <div 
                className="decorative-element decorative-bottom" 
                style={{
                    position: "absolute",
                    bottom: "10%",
                    left: "5%",
                    width: "400px",
                    height: "400px",
                    background: "radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 70%)",
                    borderRadius: "50%",
                    pointerEvents: "none",
                    zIndex: 0,
                    animation: "pulse 4s ease-in-out infinite"
                }}
            />

            <Container style={{ position: "relative", zIndex: 1 }}>
                {/* Section Header */}
                <Row style={{ padding: "60px 10px 40px" }}>
                    <Col md={12}>
                        <div 
                            className="section-title-wrapper"
                            style={{
                                textAlign: "center",
                                marginBottom: "50px",
                                opacity: 0,
                                animation: "fadeInUp 0.6s ease-out forwards"
                            }}
                        >
                            <h1 
                                className="section-title"
                                style={{
                                    fontSize: "3rem",
                                    fontWeight: "800",
                                    background: "linear-gradient(135deg, #2978d1ff 0%, #4a9eff 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                    marginBottom: "16px"
                                }}
                            >
                                Professional Experience
                            </h1>
                            <p 
                                className="section-subtitle"
                                style={{
                                    fontSize: "1.1rem",
                                    color: "#fff",
                                    maxWidth: "600px",
                                    margin: "0 auto"
                                }}
                            >
                                A journey through my professional growth and contributions
                            </p>
                        </div>
                    </Col>
                </Row>

                {/* Experience Cards */}
                <Row style={{ padding: "10px" }}>
                    <Col lg={10} className="mx-auto">
                        {experiences.map((experience, index) => (
                            <ExperienceCard 
                                key={index} 
                                experience={experience} 
                                index={index}
                            />
                        ))}
                    </Col>
                </Row>
            </Container>

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

                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.8;
                        transform: scale(1.05);
                    }
                }

                @media (max-width: 768px) {
                    .section-title {
                        font-size: 2rem !important;
                    }
                    
                    .section-subtitle {
                        font-size: 1rem !important;
                    }
                    
                    .decorative-element {
                        width: 200px !important;
                        height: 200px !important;
                    }
                }

                @media (max-width: 576px) {
                    .section-title {
                        font-size: 1.75rem !important;
                    }
                }
            `}</style>
        </Container>
    );
}

export default Experience;