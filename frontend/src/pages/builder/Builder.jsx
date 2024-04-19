import { Suspense, lazy } from "react";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  PersonalDetailForm,
  ProjectForm,
  LinkForm,
  WorkExperienceForm,
  EducationForm,
} from "./components/ResumeForms/ResumeForms.jsx";
import Navbar from "react-bootstrap/Navbar";

// Lazy-loaded components
const PdfCanvas = lazy(() => import("./components/PdfCanvas/PdfCanvas"));
import LoadingIndicator from "src/utils/LoadingIndicator";

import "./Builder.css";
import {
  DisplayBuilderFormButton,
  DisplayButton,
  DisplayHomeIconButton,
} from "src/utils/DisplayButton.jsx";
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
  ];
  return (
    <>
      {/* offcanvas */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        backdrop={false}
        data-bs-theme="dark"
        className="bg-black"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-light">
            {offcanvasTitle}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{offcanvasContent}</Offcanvas.Body>
      </Offcanvas>
      <div id="BuilderPage" className="container-fluid">
        <Navbar
          className="container-fluid rounded px-2 d-flex justify-content-between bg-black"
          data-bs-theme="dark"
        >
          <DisplayHomeIconButton path="/" variant="btn btn-outline-primary" />
          {/* <DisplayButton variant="outline-primary" title="Download Pdf" /> */}
          <DisplayButton variant="outline-primary" title="Save Changes" />
          <Navbar.Toggle />
        </Navbar>
        <div className="MainContainer">
          <div className="ResumeForm">
            <div className="ButtonContainer container-fluid d-flex flex-column gap-2">
              {ResumeFormTitleAndComponents.map((element) => (
                <DisplayBuilderFormButton
                  function={() => handleShow(element.title, element.content)}
                  key={element.id}
                  variant="outline-primary"
                  title={element.title}
                />
              ))}
            </div>
          </div>
          <div className="PdfCanvas">
            {/* <Suspense fallback={<LoadingIndicator />}>
              <PdfCanvas />
            </Suspense> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Builder;
