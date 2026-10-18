import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ServiceCard from "./ServiceCards";
import Particle from "../Particle";
import { FaCogs, FaRobot, FaChartLine, FaSpider, FaRocket } from "react-icons/fa";
import { MdOutlineSpeed } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

function Services() {
  const services = [
    {
      id: "workflow-automation",
      title: "Workflow Automation",
      icon: FaCogs,
      description:
        "Turn repetitive, manual or messy processes into reliable automated workflows, so your team spends time on work that matters.",
      points: [
        "Map your current process and pinpoint bottlenecks",
        "Automate data entry, reports, notifications and hand-offs",
        "Connect your tools through APIs, n8n or Python scripts",
      ],
    },
    {
      id: "custom-chatbots",
      title: "Custom AI Chatbots & Assistants",
      icon: FaRobot,
      description:
        "Assistants that know your business: built on your own documents and data, for your customers or your internal team.",
      points: [
        "RAG over your documents, wikis and databases",
        "Integration into your website, ERP or internal tools",
        "Private, self-hosted LLM options when data must stay in-house",
      ],
    },
    {
      id: "predictive-models",
      title: "Prediction & Classification Models",
      icon: FaChartLine,
      description:
        "Machine learning models that turn your historical data into forecasts, scores and automated decisions.",
      points: [
        "Forecasting, scoring, classification and anomaly detection",
        "Tabular, time-series, sensor and image data",
        "Rigorous evaluation and delivery as a ready-to-use API",
      ],
    },
    {
      id: "data-scraping",
      title: "Data Collection & Web Scraping",
      icon: FaSpider,
      description:
        "Clean, structured datasets gathered from websites, APIs and documents, ready for analysis or for training models.",
      points: [
        "Robust scrapers for websites and APIs",
        "Cleaning, deduplication and NLP-based structuring",
        "Scheduled pipelines delivering CSV, databases or dashboards",
      ],
    },
    {
      id: "process-optimisation",
      title: "Process Optimisation",
      icon: MdOutlineSpeed,
      description:
        "Data-driven analysis of your operations to reduce waste, delays and costs, with improvements you can measure.",
      points: [
        "Analyse operational data to find inefficiencies",
        "Optimisation and simulation models to test changes safely",
        "KPI dashboards to track the impact over time",
      ],
    },
    {
      id: "ai-deployment",
      title: "AI Integration & Deployment",
      icon: FaRocket,
      description:
        "Take an AI idea or prototype to a production-ready service that is fast, reliable and cost-efficient.",
      points: [
        "Production APIs with FastAPI and Docker",
        "LLM fine-tuning and quantisation for lower latency and cost",
        "Caching, monitoring and inference cost control",
      ],
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          What I Can <strong className="purple">Offer</strong>
        </h1>
        <p style={{ color: "white" }}>
          AI and data services to automate, predict and optimise how your business works.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {services.map((service) => (
            <Col md={4} className="project-card" key={service.id}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                points={service.points}
              />
            </Col>
          ))}
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          <Col md={8} style={{ color: "white" }}>
            <h3>
              Have a project in <strong className="purple">mind</strong>?
            </h3>
            <p>Tell me about your problem and let's discuss it.</p>
            <Button
              variant="primary"
              href="mailto:bouguerrabachar2@gmail.com"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineMail /> &nbsp;Get in touch
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Services;
