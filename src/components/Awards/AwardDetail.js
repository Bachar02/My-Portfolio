import { useParams, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import orbitDemo from "../../Assets/demo_orbit.mp4";
import awardNrtf1 from "../../Assets/nrtf1.png";
import awardNrtf2 from "../../Assets/nrtf2.png";
import awardBtcmp0 from "../../Assets/bootcamp0.png";
import awardBtcmp1 from "../../Assets/bootcamp1.png";


// Blog-like awards data
const awardsData = {
  "orbit-2025": {
    title: "EcoAI-Train — IEEE CS INSAT Orbit 1.0",
    place: "2nd Place",
    year: "2025",
    hackathonOverview: `EcoAI-Train — 2nd place, IEEE CS INSAT Orbit 1.0.`,
    problemStatement: "",
    ourSolution: "",
    impact: "",
    images: [
    ],
    videoUrl: orbitDemo,
  },
  "bootcamp-2025": {
    title: "AIgroFarm — IEEE Region 8 Industrial Bootcamp / IEEE INSAT IAS",
    place: "1st Place",
    year: "2025",
    hackathonOverview: `AIgroFarm — 1st place, IEEE Region 8 Industrial Bootcamp / IEEE INSAT IAS.`,
    problemStatement: "",
    ourSolution: "",
    impact: "",
    //images: [awardBtcmp3, awardBtcmp2],
    solutionImage: [awardBtcmp0, awardBtcmp1],
  },
  "nrtf-2024": {
    title: "Dhawwini — Re-Tech Fusion",
    place: "1st Place",
    year: "",
    hackathonOverview: `Dhawwini — 1st place, Re-Tech Fusion.`,
    problemStatement: "",
    ourSolution: "",
    impact: "",
    solutionImage: [awardNrtf1, awardNrtf2],
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

      {/* Hackathon Overview */}
      <section className="mt-5">
        <h3 className="purple" style={{ textAlign: "left" }}>Hackathon Overview:</h3>
        <p style={{ fontSize: "18px", textAlign: "left" }}>
          {award.hackathonOverview}
        </p>
      </section>

      {/* Problem Statement */}
      {award.problemStatement && <section className="mt-4">
        <h3 className="purple" style={{ textAlign: "left" }}>Problem Statement:</h3>
        <p style={{ fontSize: "18px", textAlign: "left" }}>
          {award.problemStatement}
        </p>
      </section>}

      {/* Our Solution */}
      {award.ourSolution && <section className="mt-4">
        <h3 className="purple" style={{ textAlign: "left" }}>Our Solution:</h3>
        <p style={{ fontSize: "18px", textAlign: "left" }}>
          {award.ourSolution}
        </p>
      </section>}

      {/* Solution Image */}
      {award.solutionImage && (
        <section className="mt-5">
          <Row className="justify-content-center">
            {
              award.solutionImage.map((img, idx) => (
                <Col md={6} sm={8} xs={12} key={idx} className="mb-4 d-flex justify-content-center">
                  <img src={img}
                    alt={`Award `}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </Col>
              ))
            }

          </Row>
        </section>
      )}


      {award.videoUrl && (
        <section className="mt-5">
          <Row className="justify-content-center">
            <Col md={8} sm={10} xs={12} className="mb-4 d-flex justify-content-center">
              <video
                width="100%"
                height="500px"
                controls
                style={{ borderRadius: "10px" }}
              >
                <source src={award.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Col>
          </Row>
        </section>
      )}

      {/* Impact */}
      {award.impact && <section className="mt-4">
        <h3 className="purple" style={{ textAlign: "left" }}>Impact:</h3>
        <p style={{ fontSize: "18px", textAlign: "left" }}>
          {award.impact}
        </p>
      </section>}

      {/* Images grid */}
      {award.images && award.images.length > 0 && (
        <section className="mt-5">
          <Row className="justify-content-center">
            {award.images.map((img, idx) => (
              <Col md={6} sm={8} xs={12} key={idx} className="mb-4 d-flex justify-content-center">
                <img
                  src={img}
                  alt={`Award ${idx}`}
                  style={{
                    width: "100%",
                    height: "auto",
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