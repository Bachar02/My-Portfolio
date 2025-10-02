import { useParams, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import orbitDemo from "../../Assets/demo_orbit.mp4";
import awardNrtf1 from "../../Assets/nrtf1.png";
import awardNrtf2 from "../../Assets/nrtf2.png";
import awardBtcmp0 from "../../Assets/bootcamp0.png";
import awardBtcmp1 from "../../Assets/bootcamp1.png";
import awardBtcmp2 from "../../Assets/bootcamp2.png";
import awardBtcmp3 from "../../Assets/bootcamp3.png";


// Blog-like awards data
const awardsData = {
  "orbit-2025": {
    title: "IEEE CS INSAT Orbit 1.0 Ideathon",
    place: "2nd Place",
    year: "2025",
    hackathonOverview: `The IEEE CS INSAT Orbit 1.0 Ideathon is a prestigious event that brings together students and professionals to develop innovative solutions for sustainable technology. The theme for this year was "AI for Good," focusing on reducing the environmental impact of AI development.`,
    problemStatement: `Training large AI models like GPT-4 or DALL·E consumes massive amounts of energy, sometimes emitting as much carbon as thousands of cars running for a year. Up to 70% of that energy is wasted due to inefficient scheduling and hardware usage.`,
    ourSolution: `EcoAI-Train is a platform that empowers AI teams to track, optimize, and cut down energy waste during model training. Key features include: - Real-time energy tracking - AI-driven scheduling optimization - Waste reduction and efficiency improvements`,
    impact: `Reduces energy consumption and carbon emissions in AI model training. Promotes sustainable AI development practices. Contributes to a greener and more sustainable future.`,
    images: [
    ],
    videoUrl: orbitDemo,
  },
  "bootcamp-2025": {
    title: "IEEE R8 Industrial Bootcamp",
    place: "1st Place",
    year: "February 2025",
    hackathonOverview: `The Industrial Bootcamp 4.0, organized by the IEEE INSAT IAS Chapter, is a prestigious event that brings together students to develop innovative solutions to real-life problems using Industry 5.0 technologies. The hackathon challenges participants to create solutions that align with themes such as Smart Agriculture, Electric Mobility, and Smart Banking & Sustainable Industry.`,
    problemStatement: `Traditional agriculture relies heavily on water, pesticides, and manual monitoring, which makes it inefficient and unsustainable.`,
    ourSolution: (
      <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
        We designed a smart agriculture system that includes:
        <li>Aeroponics</li>
        <li>Bioengineered microbial nutrients</li>
        <li>IoT sensors</li>
        <li>Ultrasonic pest control</li>
        <li>AI-powered crop monitoring</li>
         Projected ROI: 128.57%
      </ul>
    ),
    impact: `Our solution addresses critical global challenges by promoting sustainable farming practices, reducing water and land usage, and minimizing the carbon footprint. It offers a scalable and cost-effective solution that can be adapted to various environments, from urban rooftops to rural farms. By integrating renewable energy and eco-friendly practices, our system contributes to a greener and more sustainable future.`,
    //images: [awardBtcmp3, awardBtcmp2],
    solutionImage: [awardBtcmp0, awardBtcmp1],
  },
  "nrtf-2024": {
    title: "NRTF Hackathon",
    place: "1st Place",
    year: "April 2024",
    hackathonOverview: `The NRTF Hackathon is a prestigious two-day competition focused on Green Innovation, aimed at discovering innovative solutions to address energy management challenges. The theme for this year was "Energy Management," with a focus on enhancing energy efficiency, optimizing energy use, and promoting sustainable practices.`,
    problemStatement: `Access to electricity in rural areas remains a significant challenge, leading to socio-economic disparities between urban and rural regions. Nearly two billion people in developing countries lack access to modern energy services, with a particular emphasis on Africa, where 30 out of 49 least developed countries face this issue.`,
    ourSolution: (
      <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
        Our team proposed the "Dhawwini" Smart Hybrid Farm that contains:
        <li>Smart Solar Panels: Equipped with trackers that follow the sun’s movement, maximizing energy capture and efficiency.</li>
        <li>Smart Wind Turbines: Utilizing real-time wind data to optimize performance and reduce maintenance costs.</li>
        <li>AI-Driven Energy Management: Predicting daily energy consumption and optimizing maintenance schedules to ensure reliability and cost-effectiveness.</li>
        <li>User-Friendly Dashboard: Providing real-time monitoring and control of the energy system, accessible via a web interface.</li>
      </ul>
    ),
    impact: `Our solution aims to provide reliable, sustainable, and affordable energy to rural communities, addressing the critical need for equitable energy access. By integrating renewable energy sources with advanced AI, we can significantly reduce energy costs and environmental impact while promoting local economic development.`,
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
      <section className="mt-4">
        <h3 className="purple" style={{ textAlign: "left" }}>Problem Statement:</h3>
        <p style={{ fontSize: "18px", textAlign: "left" }}>
          {award.problemStatement}
        </p>
      </section>

      {/* Our Solution */}
      <section className="mt-4">
        <h3 className="purple" style={{ textAlign: "left" }}>Our Solution:</h3>
        <p style={{ fontSize: "18px", textAlign: "left" }}>
          {award.ourSolution}
        </p>
      </section>

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
      <section className="mt-4">
        <h3 className="purple" style={{ textAlign: "left" }}>Impact:</h3>
        <p style={{ fontSize: "18px", textAlign: "left" }}>
          {award.impact}
        </p>
      </section>

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