import { Container, Row, Col} from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "../Projects/ProjectCards.js";
import awardImage1 from "../../Assets/Projects/car-finder.png";

function Awards() {
  // Example awards data
  const awards = [
    {
      id: 1,
      title: "IEEE CS INSAT  Orbit 1.0 Ideathon– 2nd place",
      description:
        "Awarded for developing EcoAI-Train: an AI sustainability platform that tracks and reduces energy waste during model training. The project focused on energy-efficient scheduling and carbon footprint reduction of large AI models.",
      imageSrc: awardImage1,
      year: "2025",
      ghLink: "https://github.com/Bachar02/PFA",
      demoLink: "https://youtu.be/dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "IEEE R8 Industrial Bootcamp– 1st place",
      description:
        "Developed a sustainable agriculture solution combining aeroponics, bioengineered microbial nutrients, and AI- powered monitoring.Integrated real - time IoT sensors, ultrasonic pest control, and computer vision for fruit detection and maturity analysis.Achieved a projected ROI of 128.57 %.",
  imageSrc: awardImage1,
    year: "2025",
      ghLink: "https://github.com/Bachar02/PFA",
        demoLink: "https://youtu.be/dQw4w9WgXcQ"
},
{
  id: 3,
    title: "NRTF Hackathon– 1st place",
      description:
  "Energy innovation integrating mobile solar panels and an AI-controlled turbine, designed to meet the energy needs of non-electrified urban areas, providing reliable power supply.",
    imageSrc: awardImage1,
      year: "2024",
        ghLink: "https://github.com/Bachar02/PFA",
          demoLink: "https://youtu.be/dQw4w9WgXcQ"
},
  ];

return (
  <Container fluid className="awards-section">
    <Particle />
    <Container>
      <h1 className="project-heading">
        My Recent <strong className="purple">Awards</strong>
      </h1>
      <p style={{ color: "white" }}>
        Here are some of the hackathons and competitions I've won.
      </p>
      {/* <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {awards.map((award) => (
            <Col md={4} className="award-card" key={award.id}>
              <Card className="award-card-container" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={award.imageSrc} />
                <Card.Body>
                  <Card.Title>{award.title}</Card.Title>
                  <Card.Text>
                    {award.description}
                  </Card.Text>
                  <Card.Subtitle className="mb-2 text-muted">{award.year}</Card.Subtitle>
                  <a href={award.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    View More
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row> */}
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {awards.map((award) => (
          <Col md={4} className="project-card" key={award.id}>
            <ProjectCard
              imgPath={award.imageSrc}
              isBlog={false}
              title={award.title}
              description={award.description}
              // ghLink={award.ghLink}
              // demoLink={award.demoLink}
              year={award.year}
            />
          </Col>
        ))}
      </Row>
    </Container>
  </Container>
);
}

export default Awards;
