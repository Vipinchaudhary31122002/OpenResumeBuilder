import Spinner from "react-bootstrap/Spinner";
const LoadingIndicator = () => {
  return (
    <div
      className="Container d-flex justify-content-center align-items-center bg-black"
      style={{ height: "100vh" }}
    >
      <Spinner animation="border" variant="light"></Spinner>
      <h1 style={{ color: "white" }}>Loading...</h1>
    </div>
  );
};

export default LoadingIndicator;
