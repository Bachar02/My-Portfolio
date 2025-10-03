import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main2.png";
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

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
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
        {/* Scroll Animation Section */}
        {/* <div className="col-12 mt-5">
          <div className="d-flex justify-content-center">
            <div className="mouse-scroll">
              <div className="mouse">
                <div className="wheel"></div>
              </div>
              <div className="arrow"></div>
            </div>
          </div>
        </div> */}
      </Container>


      <Home3 />
    </section>
  );
}

export default Home;
