import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle"; 
import ProjectCard from "../Projects/ProjectCards.js";
import awardImage1 from "../../Assets/Projects/car-finder.png";

function Awards() {
  // Example awards data
  const awards = [
    {
      id: 1,
      title: "Wabna Hackathon Winner",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      imageSrc: awardImage1,
      year: "2023",
      ghLink: "https://github.com/Bachar02/PFA",
      demoLink: "https://youtu.be/dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "9o7b Hackathon Winner",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      imageSrc: awardImage1,
      year: "2022",
      ghLink: "https://github.com/Bachar02/PFA",
      demoLink: "https://youtu.be/dQw4w9WgXcQ" 
    },
    {
      id: 3,
      title: "Asghir zib Hackathon Winner",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      imageSrc: awardImage1,
      year: "2021",
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
                year = {award.year}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Awards;
