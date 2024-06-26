// import { Outlet, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useEffect } from "react";
// import { useCookies } from "react-cookie";
// import { toast } from "react-toastify";
// import Modal from "react-bootstrap/Modal";
import "./HomePage.css";
import { DisplayLinkButton } from "src/utils/DisplayButton";
// import axios from "axios";
const HomePage = () => {
  // const [show, setShow] = useState(false);
  // const [modalTitle, setModalTitle] = useState("Sign up");
  // const navigate = useNavigate();
  // const handleClose = () => {
  //   setShow(false);
  //   navigate("/");
  // };
  // const handleShow = (title) => {
  //   setShow(true);
  //   setModalTitle(title);
  // };
  // const [cookies, removeCookie] = useCookies([]);
  // useEffect(() => {
  //   const verifyCookie = async () => {
  //     if (!cookies.token) {
  //       navigate("/login");
  //     }
  //     const { data } = await axios.post(
  //       "http://localhost:4000",
  //       {},
  //       { withCredentials: true }
  //     );
  //     const { status, user } = data;
  //     return status
  //       ? toast(`Hello ${user}`, {
  //           position: "top-right",
  //         })
  //       : (removeCookie("token"), navigate("/login"));
  //   };
  //   verifyCookie();
  // }, [cookies, navigate, removeCookie]);
  // const Logout = () => {
  //   removeCookie("token");
  //   navigate("/");
  // };
  return (
    <>
      {/* modal box */}
      {/* <Modal show={show} onHide={handleClose} data-bs-theme="dark" centered>
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
      </Modal> */}
      <div id = "HomePage" className="container-fluid d-flex flex-column justify-content-center align-items-center">
        <span>OpenResumeBuilder</span>
        <div className="d-flex justify-content-center">
          <DisplayLinkButton
            path="/builder"
            variant="btn btn-outline-primary"
            title="Get Started"
          />
          {/* <Link
            to="/signin"
            type="button"
            onClick={() => handleShow("Sign In")}
            className="btn btn-outline-primary m-1"
          >
            Get Started
          </Link> */}
          {/* <Link
            to="dashboard/resumes"
            type="button"
            className="btn btn-outline-primary m-1"
          >
            Go To Dashboard
          </Link> */}
          {/* <button
            className="btn btn-outline-primary m-1"
            type="button"
            onClick={() => toast("Testing Notification Indicator!")}
          >
            Testing Notification
          </button> */}
          {/* <Link
            to="/"
            type="button"
            className="btn btn-outline-primary m-1"
            onClick={Logout}
          >
            LogOut
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
