import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import Navbar from "react-bootstrap/Navbar";
import Modal from "react-bootstrap/Modal";
import Resume from "./components/resume/Resume";

import "./Dashboard.css";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("Account Settings");
  const navigate = useNavigate();
  const handleClose = () => {
    setShow(false);
    navigate("/dashboard");
  };
  const handleShow = (title) => {
    setShow(true);
    setModalTitle(title);
  };
  return (
    <>
      {/* modal box */}
      <Modal show={show} onHide={handleClose} size="lg" centered data-bs-theme="dark">
        <Modal.Header closeButton>
          <Modal.Title style={{color:"white"}}>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Outlet />
        </Modal.Body>
        <Modal.Footer>
          <Link
            to="/dashboard/settings/account"
            className="btn btn-outline-primary m-2"
            onClick={() => handleShow("Account Settings")}
          >
            Account
          </Link>
          <Link
            to="/dashboard/settings/passwordchange"
            className="btn btn-outline-primary m-2"
            onClick={() => handleShow("Password Change Settings")}
          >
            Password Change
          </Link>
          <Link
            to="/dashboard/settings/deleteaccount"
            className="btn btn-outline-primary m-2"
            onClick={() => handleShow("Delete Account Settings")}
          >
            Delete account
          </Link>
        </Modal.Footer>
      </Modal>
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
          <Navbar.Collapse className="justify-content-end">
            <Link
              to="/dashboard/settings/account"
              type="button"
              onClick={() => handleShow("Account Settings")}
              className="btn btn-outline-primary mx-3"
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
