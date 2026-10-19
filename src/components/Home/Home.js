import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineDownload } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import homeLogo from "../../Assets/home-main2.png";
import { CV_URL } from "../../config";
import Particle from "../Particle";
import Home3 from "./Home3";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> BACHAR BOUGUERRA ZINA</strong>
              </h1>

              <div style={{ padding: "40px 50px 20px", textAlign: "left" }}>
                <Type />
              </div>

              <p className="home-value-prop">
                I build production <span className="purple">LLM and ML systems</span>,
                from data pipeline to deployed API.
              </p>

              <div className="home-cta">
                <Button variant="primary" href={CV_URL} download>
                  <AiOutlineDownload /> &nbsp;Download CV
                </Button>
                <Button as={Link} to="/services" variant="outline-light">
                  <FaHandshake /> &nbsp;Work with me
                </Button>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>

      </Container>
      <Home3 />
    </section>
  );
}

export default Home;
