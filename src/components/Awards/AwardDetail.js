import { useParams, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import awardImage1 from "../../Assets/Projects/car-finder.png";
import awardNrtf1 from "../../Assets/nrtf1.png";
import awardNrtf2 from "../../Assets/nrtf2.png"

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
    hackathonOverview: `The NRTF Hackathon is a prestigious two-day competition focused on Green Innovation, aimed at discovering innovative solutions to address energy management challenges. The theme for this year was "Energy Management," with a focus on enhancing energy efficiency, optimizing energy use, and promoting sustainable practices.`,
    problemStatement: `Access to electricity in rural areas remains a significant challenge, leading to socio-economic disparities between urban and rural regions. Nearly two billion people in developing countries lack access to modern energy services, with a particular emphasis on Africa, where 30 out of 49 least developed countries face this issue.`,
    ourSolution: `Our team proposed the "Dhawwini Smart Hybrid Farm," an integrated energy solution combining solar and wind power with intelligent energy management systems. Key features of our solution include:
    - Smart Solar Panels: Equipped with trackers that follow the sun’s movement, maximizing energy capture and efficiency.
    - Smart Wind Turbines: Utilizing real-time wind data to optimize performance and reduce maintenance costs.
    - AI-Driven Energy Management: Predicting daily energy consumption and optimizing maintenance schedules to ensure reliability and cost-effectiveness.
    - User-Friendly Dashboard: Providing real-time monitoring and control of the energy system, accessible via a web interface.`,
    impact: `Our solution aims to provide reliable, sustainable, and affordable energy to rural communities, addressing the critical need for equitable energy access. By integrating renewable energy sources with advanced AI, we can significantly reduce energy costs and environmental impact while promoting local economic development.`,
    images: [awardNrtf1, awardNrtf2]
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
        <h3 className="purple" style={{textAlign: "left" }}>Hackathon Overview:</h3>
        <p style={{ fontSize: "18px", textAlign: "left" }}>
          {award.hackathonOverview}
        </p>
      </section>

      {/* Problem Statement */}
      <section className="mt-4">
        <h3 className="purple" style={{textAlign: "left" }}>Problem Statement:</h3>
        <p style={{ fontSize: "18px", textAlign: "left" }}>
          {award.problemStatement}
        </p>
      </section>

      {/* Our Solution */}
      <section className="mt-4">
        <h3 className="purple" style={{textAlign: "left" }}>Our Solution:</h3>
        <p style={{ fontSize: "18px", textAlign: "left" }}>
          {award.ourSolution}
        </p>
      </section>

      {/* Impact */}
      <section className="mt-4">
        <h3 className="purple" style={{textAlign: "left" }}>Impact:</h3>
        <p style={{ fontSize: "18px", textAlign: "left" }}>
          {award.impact}
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