import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
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
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm <b className="purple">Bachar Bouguerra Zina</b>, an AI
              Engineer with an Applied AI engineering background from
              <b> INSAT</b>. I build practical AI systems across machine
              learning, LLM applications and backend services.
              <br />
              <br />
              My recent work includes:
              <br />
              <ul>
                <li>
                  Production RAG systems using <b className="purple">Gemini,
                  Qdrant and FastAPI</b>.
                </li>
                <li>
                  ML systems for <b className="purple">flight performance,
                  phase classification and reliability scoring</b>.
                </li>
                <li>
                  An Odoo 17 AI assistant using a fine-tuned <b>Phi-3 Mini</b>
                  model with over 90% accuracy and responses under 5 seconds.
                </li>
                <li>
                  Predictive modeling on heterogeneous spectroscopic data at
                  <b> Universite Laval</b>.
                </li>
              </ul>
              <br />
              I work with <b className="purple">Python, Java, SQL, PyTorch,
              TensorFlow, scikit-learn, Pandas, NumPy, SciPy, LangChain,
              Qdrant, FastAPI, Flask and Docker</b>, and I am comfortable taking
              models from data processing through deployment and evaluation.
              My focus includes LLM deployment, RAG, embeddings, vector search,
              fine-tuning, agentic orchestration and industrial predictive
              maintenance.
              <br />
              <br />
              <b>Education:</b> Engineering Degree in Applied Artificial
              Intelligence, INSAT (Graduated 2026).
              <br />
              <b>Languages:</b> English and French (fluent), Arabic (native).
              <br />

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
          </Col>
        </Row>
      </Container>
    </Container >
  );
}

export default Home3;