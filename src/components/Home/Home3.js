import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { SiCalendly } from "react-icons/si";
import { CALENDLY_URL, LINKEDIN_URL } from "../../config";
import myImg from "../../Assets/avatar2.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { ImPointRight } from "react-icons/im";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";
import Github from "../About/Github";

function Home3() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              From data to <span className="purple">deployed AI</span>
            </h1>
            <p className="home-about-body">
              I'm <b className="purple">Bachar</b>, an AI engineer (INSAT,
              2026) who takes AI projects from raw data to a deployed service.
              I've built <b className="purple">production RAG assistants,
              fine-tuned LLMs and time-series models</b> for teams in Germany,
              France, Canada and Tunisia, and I own the whole loop: scoping,
              building, evaluating and shipping with FastAPI and Docker.
            </p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">

                  Areas I work on:
                  <ul>
                    <li className="about-activity">
                      <ImPointRight /> LLM applications, RAG pipelines and agentic AI.
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> Predictive modeling for industrial and scientific data.
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> Backend APIs and production ML systems.
                    </li>
                  </ul>

                  <p style={{ color: "rgb(123 163 192)" }}>
                    Certifications: NVIDIA Building RAG Agents, Coursera Machine Learning Specialization,
                    DataCamp Generative AI and Prompt Engineering, NVIDIA Computer Vision for Industrial Inspection.
                  </p>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={12} style={{ color: "white", paddingTop: "20px" }}>
            <h1 className="project-heading">
              Professional <strong className="purple">Skillset </strong>
            </h1>

            <Techstack />

            <h1 className="project-heading">
              <strong className="purple">Tools</strong> I use
            </h1>
            <Toolstack />

            <Github />
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Bachar02"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/bouguerra-bachar/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>

            <p style={{ marginTop: "1rem" }}>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <div className="contact-buttons">
              <Button variant="primary" href={CALENDLY_URL} target="_blank" rel="noreferrer">
                <SiCalendly /> &nbsp;Book a call
              </Button>
              <Button variant="outline-light" href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                <FaLinkedinIn /> &nbsp;Message on LinkedIn
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container >
  );
}

export default Home3;