import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <Link to="/" className="btn btn-primary">
        Go To Homepage
      </Link>
    </>
  );
};

export default Dashboard;
