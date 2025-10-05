import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";

const experiences = [
    {
        type: "Summer Internship",
        entreprise: "YONNOV’IA",
        place: "Marseille, France",
        date: "06/2025 – 08/2025",
        description: ["Designed and developed an intelligent virtual assistant integrated into the Odoo 17 open-source ERP platform.",
            `Adapted and fine-tuned Large Language Models (LLMs) to meet specific business logic and user interaction
requirements for the virtual assistant.`
        ],
    },
    {
        type: "Robotics Instructor",
        entreprise: "EIF Menzah 1",
        place: "Tunis, Tunisia",
        date: "10/2024 – 03/2025",
        description: ["Taught basic robotics and programming concepts to children aged 8–12 through interactive and hands-on sessions."],
    },
    {
        type: "Summer Internship",
        entreprise: "ACOBA",
        place: "Monastir, Tunisia",
        date: "07/2024 – 09/2024",
        description: ["Scraped real-time real estate data from French website (Leboncoin) using Python and API integrations, creating a structured dataset for analysis.",
            "Processed and cleaned scraped data using NLP techniques to prepare it for efficient retrieval and integration into the chatbot’s knowledge base.", "Engineered an intelligent chatbot from scratch using the Rasa framework to automate user queries and provide filtered, accurate property information.",
            "Built and fine-tuned NLP models within Rasa, defining intents, entities, and conversational flows to accurately understand and respond to user requests."],
    }, {
        type: "Summer Internship",
        entreprise: "Draxlmaier",
        place: "Monastir, Tunisia",
        date: "08/2023 – 09/2023",
        description: ["Worked on optimizing workflow in the logistics department by identifying and implementing improvements to enhance operational efficiency."],
    }
];

function Experience() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <Row style={{ padding: "10px" }}>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </Row>
            </Container>
        </Container>
    );
}

export default Experience;