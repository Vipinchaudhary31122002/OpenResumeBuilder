import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Link to="/" className="btn btn-primary m-2">
        Go To Homepage
      </Link>
      <Link to="resume" className="btn btn-primary m-2">
        Resume
      </Link>
      <Link to="settings" className="btn btn-primary m-2">
        Settings
      </Link>
      <h1> Welcome to Dashboard</h1>
      <Outlet />
    </>
  );
};

export default Dashboard;
