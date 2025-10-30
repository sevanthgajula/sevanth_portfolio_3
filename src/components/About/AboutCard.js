import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Sevanth Gajula </span>
            from <span className="purple"> Hyderabad, India.</span>
<br />
I have close to 2 years of experience as a 
<span className="purple"> Backend & ML Engineer</span>, building scalable solutions and working on a client-facing project with 
<span className="purple"> Rakuten, India</span>.
{/* <br />
I've published multiple research papers as 
<span className="purple"> Primary Author</span> at international conferences. */}
<br />
I also serve as a 
<span className="purple"> Board of Studies Member</span> for the 
<span className="purple"> AI & ML Department</span> at 
<span className="purple"> BVRIT</span>.
<br />
<br />


            <span className="purple">Sevanth</span> is not only known for Tech, but also
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> National Level Tennis Player 
            </li>
            <li className="about-activity">
              <ImPointRight /> Corporal at National Cadet Corps (Indian Army)  
            </li>
            <li className="about-activity">
              <ImPointRight /> Preident-University Build Club, IIT-Madras Research Park
            </li>
            <li className="about-activity">
              <ImPointRight /> Member of Rehabilitation Engineering Society of North America
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Travel, Understand Problem Statments, Engineer!!!"{" "}
          </p>
          <footer className="blockquote-footer">Sevanth</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
