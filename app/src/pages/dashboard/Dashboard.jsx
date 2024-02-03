import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";

const Dashboard = () => {
  return (
    <>
      <Navbar
        className="bg-body-tertiary container-fluid rounded my-1"
        bg="dark"
        data-bs-theme="dark"
      >
        <Navbar.Brand>
          <Link to="/" className="btn btn-primary mx-3">
            <FaHome />
          </Link>
          Resume
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Dropdown>
            <Dropdown.Toggle
              variant="primary"
              id="dropdown-basic"
              className="mx-4"
            >
              Settings
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Account</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Password Change</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Delete account</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* <Link to="settings" className="btn btn-primary mx-3">
            Settings
          </Link> */}
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Dashboard;
