import { Link } from "react-router-dom";
import { useState } from "react";
import "./Builder.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// importing the forms
import PersonalForm from "./components/PersonalForm";
import ProjectsForm from "./components/ProjectsForm";

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
  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent}</Modal.Body>
      </Modal>
      <div
        className="Builder container-fluid d-flex justify-content-center"
        style={{ backgroundColor: "red" }}
      >
        <div
          className="Resume d-flex justify-content-center align-items-center gap-3"
          style={{ backgroundColor: "blue" }}
        >
          <Link to="/dashboard" className="btn btn-primary">
            Back
          </Link>
          <Button
            onClick={() => {
              handleShow("Personal", <PersonalForm />);
            }}
          >
            Personal
          </Button>
          <Button
            onClick={() => {
              handleShow("Project", <ProjectsForm />);
            }}
          >
            Project
          </Button>
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
