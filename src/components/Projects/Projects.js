import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import turboFanImage from "../../Assets/pfaa.png";
import carFinderImage from "../../Assets/car-finder.png";
import videoControllerImage from "../../Assets/video-controller.png";
import aiInterviewerImage from "../../Assets/ai_interviewer.png";
import fractureDetectionImage from "../../Assets/ppp.png";

function Projects() {
  const projects = [
    {
      id: "34982216-3bc2-44c2-9f71-7e82bc03a6dc",
      title: "Turbofan RUL Predictor",
      description:
        "A predictive maintenance project using LSTM networks to estimate the Remaining Useful Life (RUL) of engines based on sensor/time series data.",
      imageSrc: turboFanImage, // Placeholder image, update it with the correct one
      ghLink: "https://github.com/Bachar02/PFA",
    },
    {
      id: "ac440a35-d25d-45d5-b0ab-114bfca1e2ad",
      title: "Car-Finder NLP Search",
      description:
        "An AI-powered search interface: users ask questions in plain English/French, which are converted to SQL queries to fetch relevant car records from a database.",
      imageSrc: carFinderImage, // Placeholder image, update it with the correct one
      ghLink: "https://github.com/Bachar02/Car-Finder",
      demoLink: "https://youtu.be/k3XL7SHVq5Y"
    },
    {
      id: "3d7f5c6e-d4c6-47b4-b649-735dbd0808cf",
      title: "AI Video Controller",
      description:
        "A system that lets users control video playback (play, pause, skip, etc.) via hand gestures. Built with OpenCV, MediaPipe, and Python.",
      imageSrc: videoControllerImage, // Placeholder image, update it with the correct one
      ghLink: "https://github.com/Bachar02/AI-Video-Controller",
      demoLink: "https://youtu.be/ztt1S-k1kA0"
    },
    {
      id: "bfdfdf3a-081d-45be-b299-c019bf42f791",
      title: "Virtual Interviewer",
      description:
        "A tool that lets you upload a resume and job description; it then simulates interview questions or feedback tailored to that role.",
      imageSrc: aiInterviewerImage, // Placeholder image, update it with the correct one
      ghLink: "https://github.com/Bachar02/Virtual-Interviewer",
    },
    {
      id: "49d2d503-155b-4f37-b54c-8eac998d632e",
      title: "Fracture Detection App",
      description:
        "A mobile app (Flutter) that detects fractures in X-Ray images using Deep Learning techniques.",
      imageSrc: fractureDetectionImage, // Placeholder image, update it with the correct one
      ghLink: "https://github.com/Bachar02/flutter-fracture-detector-app-ppp",
      demoLink: "https://youtu.be/PtJf9Yd-56A"
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
