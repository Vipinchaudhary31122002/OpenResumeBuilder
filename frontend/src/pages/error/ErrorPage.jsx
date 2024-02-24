import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center bg-black text-bg-primary" style={{height:"100vh"}}>
        <h1>ErrorPage</h1>
        <Link to="/" className="btn btn-outline-primary">
          Return to HomePage
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
