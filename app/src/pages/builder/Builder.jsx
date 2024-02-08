import { Link } from "react-router-dom";
import { useState } from "react";
import "./Builder.css";
import { FaHome } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Modal from "react-bootstrap/Modal";
// importing the forms
import PersonalDetailsForm from "./components/ResumeForm/PersonalDetailsForm";
import ProjectsForm from "./components/ResumeForm/ProjectsForm";
import WorkExperienceForm from "./components/ResumeForm/ WorkExperienceForm";
import SkillsForm from "./components/ResumeForm/SkillsForm";
import SummaryForm from "./components/ResumeForm/SummaryForm";
import SpokenLanguagesForm from "./components/ResumeForm/SpokenLanguagesForm";
import LinksForm from "./components/ResumeForm/LinksForm";
import EducationForm from "./components/ResumeForm/EducationForm";
import CertificatesForm from "./components/ResumeForm/CertificatesForm";
import CustomSectionsForm from "./components/ResumeForm/CustomSectionsForm";

const Builder = () => {
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (title, content) => {
    setShow(true);
    setModalTitle(title);
    setModalContent(content);
  };
  const ResumeFormTitleAndComponents = [
    {
      id: 1,
      title: "Personal Details",
      content: <PersonalDetailsForm />,
    },
    {
      id: 2,
      title: "Project Details",
      content: <ProjectsForm />,
    },
    {
      id: 3,
      title: "Summary",
      content: <SummaryForm />,
    },
    {
      id: 4,
      title: "Links",
      content: <LinksForm />,
    },
    {
      id: 5,
      title: "Work Experience",
      content: <WorkExperienceForm />,
    },
    {
      id: 6,
      title: "Education Details",
      content: <EducationForm />,
    },
    {
      id: 7,
      title: "Skills ",
      content: <SkillsForm />,
    },
    {
      id: 8,
      title: "Certificates",
      content: <CertificatesForm />,
    },
    {
      id: 9,
      title: "Spoken languages",
      content: <SpokenLanguagesForm />,
    },
    {
      id: 10,
      title: "Custom Section",
      content: <CustomSectionsForm />,
    },
  ];
  return (
    <>
      {/* modalboc */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent}</Modal.Body>
      </Modal>
      {/* navbar */}
      <Navbar
        className="bg-body-tertiary container-fluid rounded my-1"
        bg="dark"
        data-bs-theme="dark"
      >
        <Navbar.Collapse className="justify-content-center">
          <Link to="/" className="btn btn-primary mx-2">
            <FaHome />
          </Link>
          <Button className="btn btn-primary">Download Pdf</Button>
        </Navbar.Collapse>
      </Navbar>
      <div
        className="Builder container-fluid d-flex justify-content-center"
        style={{ backgroundColor: "red" }}
      >
        <div
          className="Resume d-flex flex-column justify-content-center align-items-center gap-3"
          style={{ backgroundColor: "blue" }}
        >
          <Link to="/dashboard" className="btn btn-primary">
            Back
          </Link>
          {/* iterating over every object in ResumeFromTitleAndComponent for render the buttons */}
          {ResumeFormTitleAndComponents.map((element) => (
            <Button
              onClick={() => {
                handleShow(element.title, element.content);
              }}
              key={element.id}
            >
              {element.title}
            </Button>
          ))}
        </div>
        <div
          className="PdfLivePreview d-flex flex-column justify-content-center"
          style={{ backgroundColor: "pink" }}
        >
          <h1>PdfLivePreview</h1>
        </div>
      </div>
    </>
  );
};

export default Builder;
