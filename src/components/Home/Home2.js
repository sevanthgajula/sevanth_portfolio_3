// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
// import Tilt from "react-parallax-tilt";
// import {
//   AiFillGithub,
//   // AiOutlineTwitter,
//   // AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn, FaMailBulk, FaPhone } from "react-icons/fa";

// function Home2() {
//   return (
//     <Container fluid className="home-about-section" id="about">
//       <Container>
//         <Row>
//           <Col md={8} className="home-about-description">
//             <h1 style={{ fontSize: "2.6em" }}>
//               WHO IS  <span className="purple"> SEVANTH GAJULA </span>??
//             </h1>
//             <p className="home-about-body">
              
//               I've worked on impactful projects like 
//               <i>
//                 <b className="purple"> Live Server Inventory Mapping  </b>
//               </i>
//               and <i>
//                 <b className="purple"> Time-Series Forecasting  </b> 
//               </i> in real-world scenarios
//               <br />
//               <br />
//               I'm passionate aout exploring &nbsp;
//               <i>
//                 <b className="purple">Deep Learning Technologies</b></i> and
//                 enjoy contributing to tech community through hackathons
              
//               <br />
//               <br />
//               Whenever possible I try to go through recent <i><b className="purple">Research Advancements</b></i> in deep learning
//             </p>
//           </Col>
//           <Col md={4} className="myAvtar">
//             <Tilt>
//               <img src={myImg} className="img-fluid" alt="avatar" />
//             </Tilt>
//           </Col>
//         </Row>
//         <Row>
//           <Col md={12} className="home-about-social">
//             <h1>FIND ME ON</h1>
//             <p>
//               Feel free to <span className="purple">connect </span>with me
//             </p>
//             <ul className="home-about-social-links">
//               <li className="social-icons">
//                 <a
//                   href="https://github.com/sevanthgajula"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour  home-social-icons"
//                 >
//                   <AiFillGithub />
//                 </a>
//               </li>
//               <li className="social-icons">
//   <a
//     href="tel:+919154094919"
//     className="icon-colour home-social-icons"
//   >
//     <FaPhone />
//   </a>
// </li>

//               <li className="social-icons">
//                 <a
//                   href="https://www.linkedin.com/in/sevanth-gajula-b12aa8131/"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour  home-social-icons"
//                 >
//                   <FaLinkedinIn />
//                 </a>
//               </li>
//               <li className="social-icons">
//   <a
//     href="mailto:sevanthgajula1@gmail.com"
//     target="_blank"
//     rel="noreferrer"
//     className="icon-colour home-social-icons"
//   >
//     <FaMailBulk />
//   </a>
// </li>

//             </ul>
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }
// export default Home2;


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar_1.jpg"; // Changed to PNG
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaMailBulk, FaPhone } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WHO IS  <span className="purple"> SEVANTH GAJULA </span>??
            </h1>
            <p className="home-about-body">
              
              I've worked on impactful projects like 
              <i>
                <b className="purple"> Live Server Inventory Mapping  </b>
              </i>
              and <i>
                <b className="purple"> Time-Series Forecasting  </b> 
              </i> in real-world scenarios
              <br />
              <br />
              I'm passionate aout exploring &nbsp;
              <i>
                <b className="purple">Deep Learning Technologies</b></i> and
                enjoy contributing to tech community through hackathons
              
              <br />
              <br />
              Whenever possible I try to go through recent <i><b className="purple">Research Advancements</b></i> in deep learning
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sevanthgajula"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
  <a
    href="tel:+919154094919"
    className="icon-colour home-social-icons"
  >
    <FaPhone />
  </a>
</li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sevanth-gajula-b12aa8131/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
  <a
    href="mailto:sevanthgajula1@gmail.com"
    target="_blank"
    rel="noreferrer"
    className="icon-colour home-social-icons"
  >
    <FaMailBulk />
  </a>
</li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
