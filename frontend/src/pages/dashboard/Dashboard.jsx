import { Link, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Navbar from "react-bootstrap/Navbar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
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
          <Navbar.Collapse className="justify-content-end mx-3 gap-3">
            <Link
              to="/dashboard/resumes"
              type="button"
              className="btn btn-outline-primary "
            >
              Resumes
            </Link>
            <Link
              to="/dashboard/appliedjobs"
              type="button"
              className="btn btn-outline-primary "
            >
              Applied Jobs
            </Link>
            <Link
              to="/dashboard/settings"
              type="button"
              className="btn btn-outline-primary "
            >
              Settings
            </Link>
          </Navbar.Collapse>
        </Navbar>
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
