import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";

const experiences = [
    {
        type: "Machine Learning Researcher",
        entreprise: "Universite Laval",
        place: "Quebec City, Canada",
        date: "07/2026 – 10/2026",
        workMode: "Research",
        description: [
            "Developed predictive machine learning models estimating physical, chemical and biological indicators from heterogeneous spectroscopic data.",
            "Harmonised Vis-NIR, MIR, XRF and LIBS sources into a validated database and evaluated model robustness against laboratory reference measurements.",
            "Applied statistical quality control to detect non-conforming measurement series."
        ],
    },
    {
        type: "ML/AI Engineer",
        entreprise: "Unisphere GmbH",
        place: "Konstanz, Germany",
        date: "02/2026 – 06/2026",
        workMode: "Engineering Internship",
        description: [
            "Built and deployed a production RAG system with Gemini, Qdrant, chunking, embeddings, semantic search, intent filtering and conversation state management.",
            "Built a data pipeline over 17,000 flights for time-series structuring, feature engineering, reliability scoring and monitoring dashboards.",
            "Trained a Temporal Convolutional Network with Viterbi dynamic programming to classify flight phases while enforcing physically valid state transitions.",
            "Derived a physics-informed power and true-airspeed model that reduced prediction error by 57% against a data-driven baseline.",
            "Deployed FastAPI and Docker services with REST APIs, semantic caching and upstream filtering to balance latency and inference cost."
        ],
    },
    {
        type: "ML/AI Engineer Intern",
        entreprise: "YONNOV'IA",
        place: "Marseille, France",
        date: "06/2025 – 08/2025",
        workMode: "Remote",
        description: [
            "Built and deployed a RAG pipeline with LangChain and Ollama for an AI assistant integrated into Odoo 17, supporting employee questions about company information, meetings and holidays.",
            "Fine-tuned Phi-3 Mini with LoRA and 4-bit quantisation on a company GPU server, achieving over 90% accuracy with responses under 5 seconds.",
            "Evaluated factual consistency, relevance and hallucination rate while iterating on retrieval and prompt design."
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
            "Built and fine-tuned NLP models within Rasa, defining intents, entities, and conversational flows to accurately understand and respond to user requests, with approximately 80% query-conversion success."
        ],
    },
    {
        type: "Logistics Optimisation Intern",
        entreprise: "Draxlmaier",
        place: "Monastir, Tunisia",
        date: "08/2023 – 09/2023",
        workMode: "On-site",
        description: [
            "Applied machine learning to logistics flow optimization, contributing to an approximately 20% improvement in operational efficiency."
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