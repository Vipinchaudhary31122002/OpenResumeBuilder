import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
        <h1>HomePage</h1>
        <div className="container d-flex justify-content-center">
          <Link to="auth" type="button" className="btn btn-primary m-1">
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
