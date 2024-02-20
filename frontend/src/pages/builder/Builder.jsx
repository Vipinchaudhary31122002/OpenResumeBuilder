import { Link } from "react-router-dom";
import "./Builder.css";
import { FaHome } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import ResumeForm from "./components/ResumeForm/ResumeForm";
import PdfCanvas from "./components/PdfCanvas/PdfCanvas";

const Builder = () => {
  return (
    <>
      <div className="BuilderPage container-fluid">
        <div className="ResumeForm">
          <div className="d-flex justify-content-between p-2">
            <Link to="/dashboard" className="btn btn-primary mx-2">
              <FaHome />
            </Link>
            <Button className="btn btn-primary">Download Pdf</Button>
          </div>
          <ResumeForm />
        </div>
        <div className="PdfCanvas" style={{ backgroundColor: "pink" }}>
          <PdfCanvas />
        </div>
      </div>
    </>
  );
};

export default Builder;
