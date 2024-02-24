import {BsPlus} from "react-icons/bs"
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <>
      <div className="card mx-1 text-bg-dark" style={{ width: "20rem" }}>
        <Link to="/builder">
          <BsPlus
            className="card-img-top"
            style={{ height: "20rem", color: "white" }}
          />
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
