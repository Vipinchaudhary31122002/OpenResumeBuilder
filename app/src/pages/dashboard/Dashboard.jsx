import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Link to="resumes" className="btn btn-primary m-2">
        Resume
      </Link>
      <Link to="settings" className="btn btn-primary m-2">
        Settings
      </Link>
      <Link to="/builder" className="btn btn-primary m-2">
        Builder
      </Link>
      <Link to="/" className="btn btn-primary m-2">
        Go To Homepage
      </Link>
      <h1> Welcome to Dashboard</h1>
      <Outlet />
    </>
  );
};

export default Dashboard;
