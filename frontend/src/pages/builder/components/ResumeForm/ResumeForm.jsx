import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import PersonalDetailsForm from "./components/PersonalDetailsForm";
import ProjectsForm from "./components/ProjectsForm";
import WorkExperienceForm from "./components/ WorkExperienceForm";
import SkillsForm from "./components/SkillsForm";
import SummaryForm from "./components/SummaryForm";
import SpokenLanguagesForm from "./components/SpokenLanguagesForm";
import LinksForm from "./components/LinksForm";
import EducationForm from "./components/EducationForm";
import CertificatesForm from "./components/CertificatesForm";
import CustomSectionsForm from "./components/CustomSectionsForm";
import Button from "react-bootstrap/Button";

const ResumeForm = () => {
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
      {/* modalbox */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent}</Modal.Body>
      </Modal>
      {/* iterating over every object in ResumeFromTitleAndComponent for render the buttons */}
      <div className="ButtonContainer container-fluid d-flex flex-column gap-2">
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
    </>
  );
};

export default ResumeForm;