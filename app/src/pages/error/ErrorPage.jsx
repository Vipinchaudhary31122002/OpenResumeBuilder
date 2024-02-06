import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <h1>ErrorPage</h1>
        <Link to="/" className="btn btn-primary">
          Return to HomePage
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
