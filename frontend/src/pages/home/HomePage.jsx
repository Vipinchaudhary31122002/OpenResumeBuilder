import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./HomePage.css";

const HomePage = () => {
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("Sign up");
  const navigate = useNavigate();
  const handleClose = () => {
    setShow(false);
    navigate("/");
  };
  const handleShow = (title) => {
    setShow(true);
    setModalTitle(title);
  };
  return (
    <>
      {/* modal box */}
      <Modal show={show} onHide={handleClose} data-bs-theme="dark" centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "white" }}>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Outlet />
        </Modal.Body>
        <Modal.Footer>
          <Link
            to="/signup"
            className="btn btn-outline-primary m-2"
            onClick={() => handleShow("Sign Up")}
          >
            SignUp
          </Link>
          <Link
            to="/signin"
            className="btn btn-outline-primary m-2"
            onClick={() => handleShow("Sign In")}
          >
            SignIn
          </Link>
          <Link
            to="/forgotpassword"
            className="btn btn-outline-primary m-2"
            onClick={() => handleShow("Forgot Password")}
          >
            Forgot Password
          </Link>
        </Modal.Footer>
      </Modal>
      <div className="HomePage container-fluid d-flex flex-column justify-content-center align-items-center">
        <span>OpenResumeBuilder</span>
        <div className="d-flex justify-content-center">
          <Link
            to="/signin"
            type="button"
            onClick={() => handleShow("Sign In")}
            className="btn btn-outline-primary m-1"
          >
            Get Started
          </Link>
          <Link
            to="dashboard"
            type="button"
            className="btn btn-outline-primary m-1"
          >
            Go To Dashboard
          </Link>
          <Link to="/" type="button" className="btn btn-outline-primary m-1">
            LogOut
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
