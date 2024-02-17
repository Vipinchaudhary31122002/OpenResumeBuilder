import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { House } from "react-bootstrap-icons";
import Navbar from "react-bootstrap/Navbar";
import Modal from "react-bootstrap/Modal";
import Resume from "./components/resume/Resume";

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
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Outlet />
        </Modal.Body>
        <Modal.Footer>
          <Link
            to="/dashboard/settings/account"
            className="btn btn-primary m-2"
            onClick={() => handleShow("Account Settings")}
          >
            Account
          </Link>
          <Link
            to="/dashboard/settings/passwordchange"
            className="btn btn-primary m-2"
            onClick={() => handleShow("Password Change Settings")}
          >
            Password Change
          </Link>
          <Link
            to="/dashboard/settings/deleteaccount"
            className="btn btn-primary m-2"
            onClick={() => handleShow("Delete Account Settings")}
          >
            Delete account
          </Link>
        </Modal.Footer>
      </Modal>
      {/* Navbar of the dashboard page */}
      <Navbar
        className="bg-body-tertiary container-fluid rounded my-1"
        bg="dark"
        data-bs-theme="dark"
      >
        <Navbar.Brand>
          <Link to="/" className="btn btn-primary mx-3">
            <House />
          </Link>
          Resumes
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Link
            to="/dashboard/settings/account"
            type="button"
            onClick={() => handleShow("Account Settings")}
            className="btn btn-primary mx-3"
          >
            Settings
          </Link>
        </Navbar.Collapse>
      </Navbar>
      <Resume />
    </>
  );
};

export default Dashboard;
