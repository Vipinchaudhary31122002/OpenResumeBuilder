import { DisplayLinkButton } from "src/utils/DisplayButton";

const ErrorPage = () => {
  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center bg-black text-bg-primary"
        style={{ height: "100vh" }}
      >
        <h1>ErrorPage</h1>
        <DisplayLinkButton
          path="/"
          variant="btn btn-outline-primary"
          title="Return to HomePage"
        />
      </div>
    </>
  );
};

export default ErrorPage;
