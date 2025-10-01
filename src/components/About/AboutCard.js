import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Bachar Bouguerra Zina</span> from{" "}
            <span className="purple">Tunis</span>—an Instrumentation and Maintenance Engineer in
            training who'd rather calibrate neural nets than pressure valves.
            <br />
            <br />
            I have recently worked on AI/ML projects like an <b>LLM-powered virtual assistant</b> for Odoo, and
            <b> NLP-based chatbots</b> with Rasa.
            <br />
            <br />
            When the cursor isn't blinking I'm usually:
          </p>
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
  );
}

export default AboutCard;