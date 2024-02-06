import { Link, Outlet, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const HomePage = () => {
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("Sign In");
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
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Outlet />
        </Modal.Body>
        <Modal.Footer>
          <Link
            to="/signup"
            className="btn btn-primary m-2"
            onClick={() => handleShow("Sign Up")}
          >
            SignUp
          </Link>
          <Link
            to="/signin"
            className="btn btn-primary m-2"
            onClick={() => handleShow("Sign In")}
          >
            SignIn
          </Link>
          <Link
            to="/forgotpassword"
            className="btn btn-primary m-2"
            onClick={() => handleShow("Forgot Password")}
          >
            Forgot Password
          </Link>
        </Modal.Footer>
      </Modal>
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
        <h1>HomePage</h1>
        <div className="container d-flex justify-content-center">
          <Link
            to="/signin"
            type="button"
            onClick={() => handleShow("Sign In")}
            className="btn btn-primary m-1"
          >
            Get Started
          </Link>
          <Link to="dashboard" type="button" className="btn btn-primary m-1">
            Go To Dashboard
          </Link>
          <Link to="/" type="button" className="btn btn-primary m-1">
            LogOut
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
