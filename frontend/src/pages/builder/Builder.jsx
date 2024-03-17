import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Button from "react-bootstrap/Button";

// Lazy-loaded components
import ResumeForm from "./components/ResumeForm/ResumeForm";
const PdfCanvas = lazy(() => import("./components/PdfCanvas/PdfCanvas"));
import LoadingIndicator from "src/utils/LoadingIndicator";

import "./Builder.css";
const Builder = () => {
  return (
    <>
      <div className="BuilderPage container-fluid">
        <div className="ResumeForm">
          <div className="d-flex justify-content-between m-1">
            <Link to="/dashboard" className="btn btn-outline-primary">
              <FaHome />
            </Link>
            <Button variant="outline-primary">Download Pdf</Button>
          </div>
          <ResumeForm />
        </div>
        <div className="PdfCanvas">
          <Suspense fallback={<LoadingIndicator />}>
            <PdfCanvas/>
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Builder;
