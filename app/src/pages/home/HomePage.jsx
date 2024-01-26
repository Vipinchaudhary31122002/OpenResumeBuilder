import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
        <h1>HomePage</h1>
        <div className="container d-flex flex-column">
          <Link to="/" type="button" className="btn btn-primary">
            GetStarted
          </Link>
          <Link to="/dashboard" type="button" className="btn btn-primary">
            GoToDashboard
          </Link>
          <Link to="/" type="button" className="btn btn-primary">
            LogOut
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
