import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const HomePage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Link to="signup" className="btn btn-primary m-2">
            SignUp
          </Link>
          <Link to="signin" className="btn btn-primary m-2">
            SignIn
          </Link>
          <Link to="forgotpassword" className="btn btn-primary m-2">
            Forgot Password
          </Link>
          <Outlet />
        </Modal.Body>
      </Modal>

      <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
        <h1>HomePage</h1>
        <div className="container d-flex justify-content-center">
          <Link
            to="signin"
            type="button"
            onClick={handleShow}
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
