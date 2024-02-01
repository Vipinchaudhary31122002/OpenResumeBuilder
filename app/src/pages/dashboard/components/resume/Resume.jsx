import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <>
      <h1>Resumes</h1>
      <div className="card" style={{ width: "18rem" }}>
        <Link to="/builder">
          <BsPlusLg className="card-img-top" style={{ height: "18rem" }} />
        </Link>
        <div className="card-body">
          <p className="card-text">
            <b>Create a new resume</b>
            <br />
            Start building from scratch
          </p>
        </div>
      </div>
    </>
  );
};

export default Resume;
