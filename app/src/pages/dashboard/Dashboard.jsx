import { Outlet, Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("Account Settings");
  const navigate = useNavigate();
  const handleClose = () => {
    setShow(false);
    navigate("resumes");
  };
  const handleShow = (title) => {
    setShow(true);
    setModalTitle(title);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Outlet />
        </Modal.Body>
      </Modal>
      {/* Navbar of the dashboard page */}
      <Navbar
        className="bg-body-tertiary container-fluid rounded my-1"
        bg="dark"
        data-bs-theme="dark"
      >
        <Navbar.Brand>
          <Link to="/" className="btn btn-primary mx-3">
            <FaHome />
          </Link>
          Resumes
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Dropdown>
            <Dropdown.Toggle
              variant="primary"
              id="dropdown-basic"
              className="mx-5"
            >
              Settings
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Link
                to="settings/account"
                className="btn btn-primary m-2"
                onClick={() => handleShow("Account Settings")}
              >
                Account
              </Link>
              <Link
                to="settings/passwordchange"
                className="btn btn-primary m-2"
                onClick={() => handleShow("Password Change Settings")}
              >
                Password Change
              </Link>
              <Link
                to="settings/deleteaccount"
                className="btn btn-primary m-2"
                onClick={() => handleShow("Delete Account Settings")}
              >
                Delete account
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Dashboard;
