import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import eye from "../../Assets/Projects/eye.png";

import nisargah from "../../Assets/Projects/nisargah.png";
import chatify from "../../Assets/Projects/spy.jpg";

import rak from "../../Assets/Projects/rak.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Spydersens (Live-CMDB)"
              description="A server mapping tool, with a spider web-like vsualisation to represent the relationships between the servers of various products an among 10,000 servers. Faciliating the identification of inter-server communications within a business context."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rak}
              isBlog={false}
              title="Long-Horizon Forecasting"
              description="Developed Long Horizon Time-Series Forecasting Models using Transformers and Causation Models for Relationships between Multiple Applications using Graph Attention Network. Scaled the existing Causation Model from 30 applications to 300 applications."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nisargah}
              isBlog={false}
              title="Nisargah"
              description="Machine Learning System to predict the occurence of Heatwaves and forecast the Air Quality Index(AQI) in Tier-2 cities of Telanagan for the year 2023. Helps individuals and organizations prepare for extreme weather conditions and take necessary measures to mitigate the
impact of air pollution and heat waves. "
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://heatwave-occurence-and-aqi-predictor.onrender.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eye}
              isBlog={false}
              title="Eye Controlled Mouse"
              description="A computer vision-based system that tracks eye movements to control the screen cursor, enabling hands-free computer access for individuals with disabilities."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
