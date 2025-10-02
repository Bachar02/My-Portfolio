import { useParams, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import awardImage1 from "../../Assets/Projects/car-finder.png";

// Blog-like awards data
const awardsData = {
  "orbit-2025": {
    title: "IEEE CS INSAT Orbit 1.0 Ideathon",
    place: "2nd Place",
    year: "2025",
    problematique: `Training large AI models consumes huge amounts of energy,
    leading to waste and high carbon emissions.`,
    solution: `We built EcoAI-Train, a sustainability platform that tracks
    energy usage during AI model training and optimizes scheduling to minimize 
    waste and reduce carbon footprint.`,
    images: [awardImage1, awardImage1, awardImage1],
  },
  "bootcamp-2025": {
    title: "IEEE R8 Industrial Bootcamp",
    place: "1st Place",
    year: "2025",
    problematique: `Traditional agriculture relies heavily on water, pesticides, and
    manual monitoring, which makes it inefficient and unsustainable.`,
    solution: `We designed a smart agriculture system combining aeroponics,
    bioengineered microbial nutrients, IoT sensors, ultrasonic pest control,
    and AI-powered crop monitoring. Projected ROI: 128.57%.`,
    images: [awardImage1, awardImage1],
  },
  "nrtf-2024": {
    title: "NRTF Hackathon",
    place: "1st Place",
    year: "2024",
    problematique: `Urban areas without electricity face major challenges
    in healthcare, education, and quality of life.`,
    solution: `We created mobile solar panels and an AI-controlled turbine
    to supply clean, reliable electricity to underserved communities.`,
    images: [awardImage1, awardImage1, awardImage1],
  },
};

function AwardDetail() {
  const { id } = useParams();
  const award = awardsData[id];

  if (!award) return <h2 style={{ color: "white" }}>Award not found</h2>;

  return (
    <Container className="awards-section" style={{ color: "white" }}>
      {/* Title + Year/Place */}
      <h1 className="mb-2">{award.title}</h1>
      <p className="text-muted">
        {award.year} · {award.place}
      </p>

      {/* Problematic */}
      <section className="mt-5">
        <h3 className="purple" style={{textAlign: "left" }}>Problematique:</h3>
        <p style={{ fontSize: "18px", textAlign: "left" }}>
          {award.problematique}
        </p>
      </section>

      {/* Solution */}
      <section className="mt-4">
        <h3 className="purple" style={{textAlign: "left" }}>Solution:</h3>
        <p style={{ fontSize: "18px", textAlign: "left" }}>
          {award.solution}
        </p>
      </section>

      {/* Images grid */}
      {award.images && award.images.length > 0 && (
        <section className="mt-5">
          <Row>
            {award.images.map((img, idx) => (
              <Col md={4} sm={6} xs={12} key={idx} className="mb-3">
                <img
                  src={img}
                  alt={`Award ${idx}`}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              </Col>
            ))}
          </Row>
        </section>
      )}

      {/* Back button */}
      <div className="text-center mt-5">
        <Link to="/awards" className="btn btn-outline-light">
          ← Back to Awards
        </Link>
      </div>
    </Container>
  );
}

export default AwardDetail;
