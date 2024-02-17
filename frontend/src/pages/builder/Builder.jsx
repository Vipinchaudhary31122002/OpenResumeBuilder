import { Link } from "react-router-dom";
import "./Builder.css";
import { FaHome } from "react-icons/fa";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import ResumeForm from "./components/ResumeForm/ResumeForm";
import PdfCanvas from "./components/PdfCanvas/PdfCanvas";

const Builder = () => {
  return (
    <>
      {/* navbar */}
      <Navbar
        className="bg-body-tertiary container-fluid rounded my-1"
        bg="dark"
        data-bs-theme="dark"
      >
        <Navbar.Collapse className="justify-content-center">
          <Link to="/dashboard" className="btn btn-primary mx-2">
            <FaHome />
          </Link>
          <Button className="btn btn-primary">Download Pdf</Button>
        </Navbar.Collapse>
      </Navbar>
      <div
        className="BuilderContainer container-fluid d-flex justify-content-evenly"
        style={{ backgroundColor: "red" }}
      >
        <div
          className="ResumeForm d-flex flex-column justify-content-center"
          style={{ backgroundColor: "blue" }}
        >
          <ResumeForm />
        </div>
        <div
          className="PdfCanvas d-flex flex-column justify-content-center"
          style={{ backgroundColor: "pink" }}
        >
          <PdfCanvas />
        </div>
      </div>
    </>
  );
};

export default Builder;
