import Spinner from "react-bootstrap/Spinner";
const LoadingIndicator = () => {
  return (
    <div
      className="Container d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Spinner animation="border" role="status">
      </Spinner>
      <h1>Loading...</h1>
    </div>
  );
};

export default LoadingIndicator;
