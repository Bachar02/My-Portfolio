import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import turboFanImage from "../../Assets/pfaa.png";
import carFinderImage from "../../Assets/car-finder.png";
import videoControllerImage from "../../Assets/video-controller.png";
import aiInterviewerImage from "../../Assets/ai_interviewer.png";
import fractureDetectionImage from "../../Assets/ppp.png";
import ragImage from "../../Assets/Gemini_Generated_Image_ic1664ic1664ic16.png";

function Projects() {
  const projects = [
    {
      id: "drone-performance-models",
      title: "AI-Assisted Drone Performance Models",
      description:
        "AI-assisted models for drone mission planning and flight simulation, including telemetry processing, energy and consumption modeling, phase-based performance curves, reliability scoring and production JSON artifacts.",
      imageSrc: turboFanImage,
    },
    {
      id: "odoo-ai-assistant",
      title: "Odoo AI Assistant",
      description:
        "An AI assistant integrated into Odoo 17 using a fine-tuned Phi-3 Mini model, supporting employee questions about company information, meetings and holidays with over 90% accuracy and responses under 5 seconds.",
      imageSrc: aiInterviewerImage,
    },
    {
      id: "agricultural-predictive-modeling",
      title: "Agricultural Predictive Modeling",
      description:
        "Machine learning models for predicting agronomic response and delta Y from agricultural data.",
      imageSrc: videoControllerImage,
    },
    {
      id: "nasa-turbofan-rul",
      title: "NASA Turbofan RUL Predictor",
      description:
        "An LSTM-based Remaining Useful Life prediction model for multivariate industrial sensor time series from NASA C-MAPSS.",
      imageSrc: turboFanImage,
      ghLink: "https://github.com/Bachar02/PFA",
    },
    {
      id: "tunisian-history-rag",
      title: "Tunisian History RAG",
      description:
        "A retrieval-augmented generation system using document embeddings, FAISS vector search and large language models.",
      imageSrc: ragImage,
    },
    {
      id: "quran-recitation-companion",
      title: "Quran Recitation Companion",
      description:
        "An AI-assisted application for tracking and supporting Quran recitation.",
      imageSrc: fractureDetectionImage,
    },
    {
      id: "car-finder",
      title: "Car-Finder LLM to SQL",
      description:
        "An LLM engine that converts natural language questions into schema-compliant SQL queries with rule-based schema validation.",
      imageSrc: carFinderImage,
      ghLink: "https://github.com/Bachar02/Car-Finder",
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project) => (
            <Col md={4} className="project-card" key={project.id}>
              <ProjectCard
                imgPath={project.imageSrc}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}   // now a video URL
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
