// import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  PersonalDetailForm,
  // CertificateForm,
  ProjectForm,
  LinkForm,
  WorkExperienceForm,
  EducationForm,
} from "./components/ResumeForms/ResumeForms.jsx";

// Lazy-loaded components
// const PdfCanvas = lazy(() => import("./components/PdfCanvas/PdfCanvas"));
// import LoadingIndicator from "src/utils/LoadingIndicator";

import "./Builder.css";
const Builder = () => {
  const [show, setShow] = useState(false);
  const [offcanvasTitle, setCanvasTitle] = useState("");
  const [offcanvasContent, setCanvasContent] = useState("");
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (title, content) => {
    setShow(true);
    setCanvasTitle(title);
    setCanvasContent(content);
  };

  const ResumeFormTitleAndComponents = [
    {
      id: 1,
      title: "Personal Details",
      content: <PersonalDetailForm />,
    },
    {
      id: 2,
      title: "Project Details",
      content: <ProjectForm />,
    },
    {
      id: 3,
      title: "Links",
      content: <LinkForm />,
    },
    {
      id: 4,
      title: "Work Experience Details",
      content: <WorkExperienceForm />,
    },
    {
      id: 5,
      title: "Education Details",
      content: <EducationForm />,
    },
    // {
    //   id: 6,
    //   title: "Certificates",
    //   content: <CertificateForm />,
    // },
  ];
  return (
    <>
      {/* offcanvas */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        backdrop={false}
        data-bs-theme="dark"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-light">
            {offcanvasTitle}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{offcanvasContent}</Offcanvas.Body>
      </Offcanvas>
      <div className="BuilderPage container-fluid">
        <div className="ResumeForm">
          <div className="d-flex justify-content-between m-1">
            <Link to="/" className="btn btn-outline-primary">
              <FaHome />
            </Link>
            <Button variant="outline-primary">Download Pdf</Button>
          </div>
          <div className="ButtonContainer container-fluid d-flex flex-column gap-2">
            {ResumeFormTitleAndComponents.map((element) => (
              <Button
                onClick={() => {
                  handleShow(element.title, element.content);
                }}
                key={element.id}
                variant="outline-primary"
              >
                {element.title}
              </Button>
            ))}
          </div>
        </div>
        <div className="PdfCanvas">
          {/* <Suspense fallback={<LoadingIndicator />}>
            <PdfCanvas />
          </Suspense> */}
        </div>
      </div>
    </>
  );
};

export default Builder;
