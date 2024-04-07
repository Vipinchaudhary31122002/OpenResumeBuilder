// import { Suspense, lazy } from "react";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  PersonalDetailForm,
  ProjectForm,
  LinkForm,
  WorkExperienceForm,
  EducationForm,
} from "./components/ResumeForms/ResumeForms.jsx";

// Lazy-loaded components
// const PdfCanvas = lazy(() => import("./components/PdfCanvas/PdfCanvas"));
// import LoadingIndicator from "src/utils/LoadingIndicator";

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
      <div className="BuilderPage container-fluid">
        <div className="ResumeForm">
          <div className="d-flex justify-content-between m-1">
            <DisplayHomeIconButton path="/" variant="btn btn-outline-primary" />
            <DisplayButton variant="outline-primary" title="Download Pdf" />
          </div>
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
    </>
  );
};

export default Builder;
