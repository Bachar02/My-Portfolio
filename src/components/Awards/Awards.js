import { Container, Row, Col} from "react-bootstrap";
import Particle from "../Particle";
// import awardImage1 from "../../Assets/Projects/car-finder.png";
import awardImage3 from "../../Assets/orbit1.jpg";
import awardImage2 from "../../Assets/bootcamp_pic.jpg";
import awardImage1 from "../../Assets/nrtf_pic.jpeg";
import AwardCard from "./AwardCards";

function Awards() {
  const awards = [
    {
      id: "orbit-2025",
      title: "IEEE CS INSAT Orbit 1.0 Ideathon",
      place: "2nd place",
      year: "2025",
      shortDesc: "EcoAI-Train: AI sustainability platform.",
      imageSrc: awardImage3,
    },
    {
      id: "bootcamp-2025",
      title: "IEEE R8 Industrial Bootcamp",
      place: "1st place",
      year: "2025",
      shortDesc: "Sustainable agriculture with aeroponics + AI.",
      imageSrc: awardImage2,
    },
    {
      id: "nrtf-2024",
      title: "NRTF Hackathon",
      place: "1st place",
      year: "2024",
      shortDesc: "AI-controlled turbine & solar panels for urban areas.",
      imageSrc: awardImage1,
    },
  ];

  return (
    <Container fluid className="awards-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Awards</strong>
        </h1>
        <p style={{ color: "white" }}>
          Click an award to see more details.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {awards.map((award) => (
            <Col md={4} className="project-card" key={award.id}>
              <AwardCard
                imgPath={award.imageSrc}
                title={award.title}
                place={award.place}
                description={award.shortDesc}
                year={award.year}
                ghLink={award.ghLink}
                id={award.id}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Awards;
