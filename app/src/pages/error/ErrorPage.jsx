import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h1>ErrorPage</h1>
      <Link to="/" className="btn btn-primary">Return to HomePage</Link>
    </>
  );
};

export default ErrorPage;
