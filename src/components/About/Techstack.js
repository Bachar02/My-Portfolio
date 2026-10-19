import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import {
  SiLangchain,
  SiOllama,
  SiGooglegemini,
  SiHuggingface,
  SiMeta,
  SiRasa,
  SiPytorch,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiOpencv,
  SiFastapi,
  SiFlask,
  SiPostgresql,
} from "react-icons/si";
import { TbVector, TbAdjustmentsHorizontal, TbChartLine, TbSql } from "react-icons/tb";

const categories = [
  {
    title: "LLM & GenAI",
    skills: [
      { icon: SiLangchain, label: "LangChain" },
      { icon: SiOllama, label: "Ollama" },
      { icon: SiGooglegemini, label: "Gemini API" },
      { icon: SiHuggingface, label: "Hugging Face" },
      { icon: TbVector, label: "Qdrant" },
      { icon: SiMeta, label: "FAISS" },
      { icon: TbAdjustmentsHorizontal, label: "LoRA / 4-bit" },
      { icon: SiRasa, label: "Rasa" },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      { icon: SiPytorch, label: "PyTorch" },
      { icon: SiTensorflow, label: "TensorFlow" },
      { icon: SiKeras, label: "Keras" },
      { icon: SiScikitlearn, label: "scikit-learn" },
      { icon: TbChartLine, label: "Time-series" },
      { icon: SiOpencv, label: "OpenCV" },
      { icon: SiPandas, label: "Pandas" },
      { icon: SiNumpy, label: "NumPy" },
    ],
  },
  {
    title: "Software Engineering",
    skills: [
      { icon: DiPython, label: "Python" },
      { icon: TbSql, label: "SQL" },
      { icon: FaJava, label: "Java" },
      { icon: SiFastapi, label: "FastAPI" },
      { icon: SiFlask, label: "Flask" },
      { icon: SiPostgresql, label: "PostgreSQL" },
    ],
  },
];

function Techstack() {
  return (
    <>
      {categories.map((category) => (
        <div key={category.title}>
          <h3 className="skill-category">{category.title}</h3>
          <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
            {category.skills.map(({ icon: Icon, label }) => (
              <Col xs={4} md={2} className="tech-icons" key={label} title={label}>
                <Icon />
                <span className="tech-label">{label}</span>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </>
  );
}

export default Techstack;
