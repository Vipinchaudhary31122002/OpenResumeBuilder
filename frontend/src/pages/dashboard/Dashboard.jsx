import { Link, useNavigate } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import Navbar from "react-bootstrap/Navbar";
import Resume from "./components/resume/Resume";
import "./Dashboard.css";
import AccountSettings from "./components/AccountSettings";
import PasswordChangeSettings from "./components/PasswordChangeSettings";
import DeleteAccountSettings from "./components/DeleteAccountSettings";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [offcanvasTitle, setCanvasTitle] = useState("Account Settings");
  const navigate = useNavigate();
  const handleClose = () => {
    setShow(false);
    navigate("/dashboard");
  };
  const handleShow = (title) => {
    setShow(true);
    setCanvasTitle(title);
  };
  return (
    <>
      {/* offcanvas */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        backdrop={false}
        data-bs-theme="dark"
        placement={"end"}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-light">
            {offcanvasTitle}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h1>Account </h1>
          <AccountSettings />
          <hr />
          <h1>Password</h1>
          <PasswordChangeSettings />
          <hr />
          <h1>Delete account</h1>
          <DeleteAccountSettings />
        </Offcanvas.Body>
      </Offcanvas>
      <div className="DashboardPage container-fluid py-1">
        {/* Navbar of the dashboard page */}
        <Navbar
          className="bg-body-tertiary container-fluid rounded my-2"
          data-bs-theme="dark"
        >
          <Navbar.Brand>
            <Link to="/" className="btn btn-outline-primary mx-3">
              <FaHome />
            </Link>
            Resumes
          </Navbar.Brand>
          
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end mx-3">
            <Link
              to="/dashboard/settings"
              type="button"
              onClick={() => handleShow("Settings")}
              className="btn btn-outline-primary "
            >
              Settings
            </Link>
          </Navbar.Collapse>
        </Navbar>
        <Resume />
      </div>
    </>
  );
};

export default Dashboard;
