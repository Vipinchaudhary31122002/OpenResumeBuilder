import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h1>ErrorPage</h1>
      <Button variant="primary">
        <Link to="/">Return to HomePage</Link>
      </Button>
    </>
  );
};

export default ErrorPage;
