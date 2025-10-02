// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

// function Projects() {
//   return (
//     <Container fluid className="project-section">
//       <Particle />
//       <Container>
//         <h1 className="project-heading">
//           My Recent <strong className="purple">Works </strong>
//         </h1>
//         <p style={{ color: "white" }}>
//           Here are a few projects I've worked on recently.
//         </p>
//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={chatify}
//               isBlog={false}
//               title="Chatify"
//               description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
//               ghLink="https://github.com/soumyajit4419/Chatify"
//               demoLink="https://chatify-49.web.app/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={bitsOfCode}
//               isBlog={false}
//               title="Bits-0f-C0de"
//               description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
//               ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
//               demoLink="https://blogs.soumya-jit.tech/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={editor}
//               isBlog={false}
//               title="Editor.io"
//               description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
//               ghLink="https://github.com/soumyajit4419/Editor.io"
//               demoLink="https://editor.soumya-jit.tech/"              
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={leaf}
//               isBlog={false}
//               title="Plant AI"
//               description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
//               ghLink="https://github.com/soumyajit4419/Plant_AI"
//               demoLink="https://plant49-ai.herokuapp.com/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={suicide}
//               isBlog={false}
//               title="Ai For Social Good"
//               description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
//               ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
//               // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={emotion}
//               isBlog={false}
//               title="Face Recognition and Emotion Detection"
//               description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
//               Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
//               ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
//               // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
//             />
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import turboFanImage from "../../Assets/pfaa.png";

function Projects() {
  const projects = [
    {
      id: "34982216-3bc2-44c2-9f71-7e82bc03a6dc",
      title: "Turbofan RUL Predictor",
      description:
        "A predictive maintenance project using LSTM networks to estimate the Remaining Useful Life (RUL) of engines based on sensor/time series data.",
      imageSrc: turboFanImage, // Placeholder image, update it with the correct one
      ghLink: "https://github.com/Bachar02/PFA",
    },
    {
      id: "ac440a35-d25d-45d5-b0ab-114bfca1e2ad",
      title: "Car-Finder NLP Search",
      description:
        "An AI-powered search interface: users ask questions in plain English/French, which are converted to SQL queries to fetch relevant car records from a database.",
      imageSrc: "/images/Projects/car-finder.png", // Placeholder image, update it with the correct one
      ghLink: "https://github.com/Bachar02/Car-Finder",
      demoLink: "https://youtu.be/k3XL7SHVq5Y"
    },
    {
      id: "3d7f5c6e-d4c6-47b4-b649-735dbd0808cf",
      title: "AI Video Controller",
      description:
        "A system that lets users control video playback (play, pause, skip, etc.) via hand gestures. Built with OpenCV, MediaPipe, and Python.",
      imageSrc: "/images/projects/video-controller.png", // Placeholder image, update it with the correct one
      ghLink: "https://github.com/Bachar02/AI-Video-Controller",
      demoLink: "https://youtu.be/ztt1S-k1kA0"
    },
    {
      id: "bfdfdf3a-081d-45be-b299-c019bf42f791",
      title: "Virtual Interviewer",
      description:
        "A tool that lets you upload a resume and job description; it then simulates interview questions or feedback tailored to that role.",
      imageSrc: "/images/projects/ai_interviewer.png", // Placeholder image, update it with the correct one
      ghLink: "https://github.com/Bachar02/Virtual-Interviewer",
    },
    {
      id: "49d2d503-155b-4f37-b54c-8eac998d632e",
      title: "Fracture Detection App",
      description:
        "A mobile app (Flutter) that detects fractures in X-Ray images using Deep Learning techniques.",
      imageSrc: "/images/projects/ppp.png", // Placeholder image, update it with the correct one
      ghLink: "https://github.com/Bachar02/flutter-fracture-detector-app-ppp",
      demoLink: "https://youtu.be/PtJf9Yd-56A"
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project) => (
            <Col md={4} className="project-card" key={project.id}>
              <ProjectCard
                imgPath={project.imageSrc}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}   // now a video URL
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
