import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ProjectCards from "./hackcards"; // Updated the import to match the correct component name
import Particle from "../Particle";
import intel_1 from "../../Assets/Projects/intel_1.png";

import cloud from "../../Assets/Projects/cloud.png";
import taim from "../../Assets/Projects/taim.png";
import amazon_1 from "../../Assets/Projects/amazon_1.png";

function Hackathon() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Hackathon </strong> Particiaptions
        </h1>
        <p style={{ color: "white" }}>
          Here are a few hackathons I've attended.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={intel_1}
              isBlog={false}
              title="oneAPI CodeMaven Hackathon"
              description="Stood in the top 16 teams nationwide out of 7500+ teams. The Hackathon was focused on utilizing the SYCL tools to accelerate the training of Machine Learning models."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={cloud}
              isBlog={false}
              title="Solving for India Hackathon"
              description="Led the team to advance to the institutional level, securing a top 300 position out of 2000+ teams in the regional round of a prestigious competition, demonstrating exceptional technical and leadership skills."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={taim}
              isBlog={false}
              title="Academic Grand Challenge on Climate Change"
              description="Participated in a challenge organized by Telangana AI Mission (T-AIM) in association with NASSCOM and Capgemini, and achieved a top-10 placement out of 7,500 teams nationwide."

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={amazon_1}
              isBlog={false}
              title="Amazon ML Challenge"
              description="Secured the 87th position in a challenge conducted by Amazon, where I served as Team Leader with a primary focus on deep learning model development."

            />
          </Col>

         
          
        </Row>
      </Container>
    </Container>
  );
}

export default Hackathon;
