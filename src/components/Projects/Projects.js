import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import turboFanImage from "../../Assets/pfaa.png";
import carFinderImage from "../../Assets/car-finder.png";
import aiInterviewerImage from "../../Assets/ai_interviewer.png";
import fractureDetectionImage from "../../Assets/ppp.png";
import hannibalImage from "../../Assets/hannibal.jpg";
import videoControllerImage from "../../Assets/video-controller.png";
import quranComingSoonImage from "../../Assets/quran-coming-soon.png";

function Projects() {
  const projects = [
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
      imageSrc: hannibalImage,
    },
    {
      id: "quran-recitation-companion",
      title: "Quran Recitation Companion",
      description:
        "An AI-assisted application for tracking and supporting Quran recitation.",
      imageSrc: quranComingSoonImage,
    },
    {
      id: "car-finder",
      title: "Car-Finder LLM to SQL",
      description:
        "An LLM engine that converts natural language questions into schema-compliant SQL queries with rule-based schema validation.",
      imageSrc: carFinderImage,
      ghLink: "https://github.com/Bachar02/Car-Finder",
      demoLink: "https://youtu.be/k3XL7SHVq5Y",
    },
    {
      id: "virtual-interviewer",
      title: "Virtual Interviewer",
      description:
        "A tool that lets you upload a resume and job description; it then simulates interview questions or feedback tailored to that role.",
      imageSrc: aiInterviewerImage,
      ghLink: "https://github.com/Bachar02/Virtual-Interviewer",
    },
    {
      id: "fracture-detection-app",
      title: "Fracture Detection App",
      description:
        "A mobile app (Flutter) that detects fractures in X-Ray images using Deep Learning techniques.",
      imageSrc: fractureDetectionImage,
      ghLink: "https://github.com/Bachar02/flutter-fracture-detector-app-ppp",
      demoLink: "https://youtu.be/PtJf9Yd-56A",
    },
    {
      id: "ai-video-controller",
      title: "AI Video Controller",
      description:
        "A system that lets users control video playback (play, pause, skip, etc.) via hand gestures. Built with OpenCV, MediaPipe, and Python.",
      imageSrc: videoControllerImage,
      ghLink: "https://github.com/Bachar02/AI-Video-Controller",
      demoLink: "https://youtu.be/ztt1S-k1kA0",
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
