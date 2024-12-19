// import React, { useState, useEffect } from "react";
// import { Container, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
// import pdf from "../../Assets/../Assets/res.pdf";
// import { AiOutlineDownload } from "react-icons/ai";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// function Papers() {
//   const [width, setWidth] = useState(1200);
//   const [numPages, setNumPages] = useState(null);

//   useEffect(() => {
//     setWidth(window.innerWidth);
//   }, []);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <div>
//       <Container fluid className="resume-section">
//         <Particle />
//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           <Button
//             variant="primary"
//             href={pdf}
//             target="_blank"
//             style={{ maxWidth: "250px" }}
//           >
//             <AiOutlineDownload />
//             &nbsp;Download Papers
//           </Button>
//         </Row>

//         <Document
//           file={pdf}
//           onLoadSuccess={onDocumentLoadSuccess}
//           className="d-flex flex-column align-items-center"
//         >
//           <Row
//             className="justify-content-center"
//             style={{ marginBottom: "2mm" }}  // Added margin to create the gap
//           >
//             <Page
//               pageNumber={1} // Render only the first page
//               scale={width > 786 ? 1.7 : 0.6}
//             />
//           </Row>
//         </Document>

//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           <Button
//             variant="primary"
//             href={pdf}
//             target="_blank"
//             style={{ maxWidth: "250px" }}
//           >
//             <AiOutlineDownload />
//             &nbsp;Download Papers
//           </Button>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Papers;




// import React, { useState, useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
// import pdf1 from "../../Assets/../Assets/res.pdf";
// import pdf2 from "../../Assets/../Assets/res.pdf";
// import pdf3 from "../../Assets/../Assets/res.pdf";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// function Papers() {
//   const [width, setWidth] = useState(1200);

//   useEffect(() => {
//     setWidth(window.innerWidth);
//   }, []);

//   return (
//     <div>
//       <Container fluid className="resume-section">
//         <Particle />

//         <Row className="justify-content-center">
//           <Col md={4} className="d-flex justify-content-center mb-4">
//             <div style={{ width: "250px", height: "250px", position: "relative" }}>
//               <Document
//                 file={pdf1}
//                 className="d-flex justify-content-center align-items-center"
//               >
//                 <Page
//                   pageNumber={1} // Display only the first page
//                   scale={0.5} // Adjust scale for fitting within the box
//                 />
//               </Document>
//             </div>
//           </Col>
//           <Col md={4} className="d-flex justify-content-center mb-4">
//             <div style={{ width: "250px", height: "250px", position: "relative" }}>
//               <Document
//                 file={pdf2}
//                 className="d-flex justify-content-center align-items-center"
//               >
//                 <Page
//                   pageNumber={1} // Display only the first page
//                   scale={0.5} // Adjust scale for fitting within the box
//                 />
//               </Document>
//             </div>
//           </Col>
//           <Col md={4} className="d-flex justify-content-center mb-4">
//             <div style={{ width: "250px", height: "250px", position: "relative" }}>
//               <Document
//                 file={pdf3}
//                 className="d-flex justify-content-center align-items-center"
//               >
//                 <Page
//                   pageNumber={1} // Display only the first page
//                   scale={0.5} // Adjust scale for fitting within the box
//                 />
//               </Document>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Papers;



// import React, { useState, useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
// import pdf1 from "../../Assets/../Assets/paper_1.pdf";
// import pdf2 from "../../Assets/../Assets/res.pdf";
// import pdf3 from "../../Assets/../Assets/paper_3.pdf";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// function Papers() {
//   const [width, setWidth] = useState(1200);

//   useEffect(() => {
//     setWidth(window.innerWidth);
//   }, []);

//   const papers = [
//     {
//       id: 1,
//       title: "Indian Sign language Detection using InceptionV3 Model  ",
//       description: "This is a brief description of Paper 1.",
//       pdf: pdf1,
//       conferenceLink: "https://www.resna.org/sites/default/files/conference/2023/AccessAndAccommodations/64_Sevanth.html",
//     },
//     {
//       id: 2,
//       title: "Inception V3 Model-Based Approach for Detecting Defects on Steel Surfaces",
//       description: "This is a brief description of Paper 2.",
//       pdf: pdf2,
//       conferenceLink: "https://ieeexplore.ieee.org/abstract/document/10467368",
//     },
//     {
//       id: 3,
//       title: "Dynamic Ensemble Learning with Evolutionary Programming and Swarm Intelligence for Image Classification",
//       description: "This is a brief description of Paper 3.",
//       pdf: pdf3,
//       conferenceLink: "https://www.sciencedirect.com/science/article/pii/S1877050923021270",
//     },
//   ];

//   return (
//     <div>
//       <Container fluid className="resume-section">
//         <Particle />

//         <Row className="justify-content-center">
//           {papers.map((paper) => (
//             <Col md={4} className="d-flex justify-content-center mb-4" key={paper.id}>
//               <div style={{ width: "250px", position: "relative" }}>
//                 <Document
//                   file={paper.pdf}
//                   className="d-flex justify-content-center align-items-center"
//                 >
//                   <Page
//                     pageNumber={1} // Display only the first page
//                     scale={0.5} // Adjust scale for fitting within the box
//                   />
//                 </Document>
//                 <div className="text-center mt-3">
//                   <h5>{paper.title}</h5>
//                   <p>{paper.description}</p>
//                   <a href={paper.conferenceLink} target="_blank" rel="noopener noreferrer">
//                     View Conference Details
//                   </a>
//                 </div>
//               </div>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Papers;

import React, {  useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import pdf1 from "../../Assets/../Assets/paper_1.pdf";
import pdf2 from "../../Assets/../Assets/res.pdf";
import pdf3 from "../../Assets/../Assets/paper_3.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Papers() {
  // Remove the width state as it's not being used
  useEffect(() => {
    // This effect is also not necessary if you're not using the window width
  }, []);

  const papers = [
    {
      id: 1,
      title: "Indian Sign language Detection using InceptionV3 Model",
      description: "RESNA Annual Conference - 2023, New Orleans, USA",
      pdf: pdf1,
      conferenceLink: "https://www.resna.org/sites/default/files/conference/2023/AccessAndAccommodations/64_Sevanth.html",
    },
    {
      id: 2,
      title: "Inception V3 Model-Based Approach for Detecting Defects on Steel Surfaces",
      description: "IDCIoT - 2024, Bengaluru, India",
      pdf: pdf2,
      conferenceLink: "https://ieeexplore.ieee.org/abstract/document/10467368",
    },
    {
      id: 3,
      title: "Dynamic Ensemble Learning with Evolutionary Programming and Swarm Intelligence for Image Classification",
      description: "ICECMSN - 2023, Coimbatore, India",
      pdf: pdf3,
      conferenceLink: "https://www.sciencedirect.com/science/article/pii/S1877050923021270",
    },
  ];

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row className="justify-content-center">
          {papers.map((paper) => (
            <Col md={4} className="d-flex justify-content-center mb-4" key={paper.id}>
              <div style={{ width: "250px", position: "relative" }}>
                <Document
                  file={paper.pdf}
                  className="d-flex justify-content-center align-items-center"
                >
                  <Page
                    pageNumber={1} // Display only the first page
                    scale={0.5} // Adjust scale for fitting within the box
                  />
                </Document>
                <div className="text-center mt-3">
                  <h5>{paper.title}</h5>
                  <p>{paper.description}</p>
                  <a href={paper.conferenceLink} target="_blank" rel="noopener noreferrer">
                    View Conference Details
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Papers;

