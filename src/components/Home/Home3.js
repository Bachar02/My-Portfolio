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
              I'm <b className="purple">Bachar Bouguerra Zina</b>, an
              Industrial Instrumentation & Maintenance Engineering student at
              <b> INSAT</b> (GPA 88/100). I love building intelligent, practical
              software—especially where <i>AI meets products</i>.
              <br />
              <br />
              Recently, I've:
              <br />
              <ul>
                <li>
                  Built an <b className="purple">LLM-powered virtual assistant</b> integrated with
                  <b> Odoo 17</b> (fine-tuned models + business logic).
                </li>
                <li>
                  Engineered a <b className="purple">Rasa</b> chatbot for real-estate data (scraping,
                  NLP cleaning, intents/entities, flows).
                </li>
                <li>
                  Predicted turbofan <b className="purple">RUL</b> on NASA C-MAPSS with <b>LSTM</b>,
                  served via <b>Flask</b>.
                </li>
                <li>
                  Shipped a <b className="purple">Flutter</b> app for on-device fracture
                  classification using <b>TFLite</b>.
                </li>
              </ul>
              <br />
              I'm into building new{" "}
              <b className="purple">AI/ML features, agents, and developer tools</b> — from
              <i> NLP & Computer Vision</i> to <i>predictive modeling</i> and
              automation.
              <br />
              <br />
              I usually work with{" "}
              <b className="purple">
                Python, TensorFlow/Keras, PyTorch, scikit-learn, Pandas, NumPy,
                Flask, Docker, Rasa, SQL, Flutter(Dart)
              </b>{" "}
              and I'm comfortable with <b className="purple">C & Java</b>.
              <br />
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

                  When the cursor isn't blinking I'm usually:
                  <ul>
                    <li className="about-activity">
                      <ImPointRight /> Scraping public datasets to see what actually trains.
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> 24-hour hackathons—because sleep is just an
                      under-regularized parameter
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> Gym, football, running—anything that keeps the step-count higher than the screen-time.
                    </li>
                  </ul>

                  <p style={{ color: "rgb(123 163 192)" }}>
                    "If it compiles on the first try, it probably isn't interesting."
                  </p>
                  <footer className="blockquote-footer">محمد العابد</footer>
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