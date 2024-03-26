import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { decrement, increment } from "src/redux/ResumeSlice.js";

const PersonalDetailsForm = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Form.Control type="text" placeholder="Enter your fullname" />
      <Form.Control
        type="email"
        placeholder="Enter your email address"
        className="my-3"
      />
      <Form.Control
        type="digit"
        placeholder="Enter your phone number"
        className="my-3"
      />
      <Form.Control
        type="text"
        placeholder="Enter your location"
        className="my-3"
      />
      <button
        className="btn btn-primary me-2"
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        INCREMENT
      </button>
      <button
        className="btn btn-primary"
        aria-label="Increment value"
        onClick={() => dispatch(decrement())}
      >
        DECREMENT
      </button>
    </>
  );
};

const WorkExperienceForm = () => {
  return <div> WorkExperienceForm</div>;
};

const SummaryForm = () => {
  return (
    <>
      <Form.Control
        as="textarea"
        placeholder="Enter a summary about yourself"
        style={{ height: "200px" }}
      />
    </>
  );
};

const SpokenLanguagesForm = () => {
  return <div>SpokenLanguagesForm</div>;
};

const SkillsForm = () => {
  return <div>SkillsForm</div>;
};

const ProjectsForm = () => {
  return (
    <>
      <h1>This is ProjectsFrom</h1>
    </>
  );
};

const LinksForm = () => {
  return <div>LinksForm</div>;
};

const EducationForm = () => {
  return <div>EducationForm</div>;
};

const CustomSectionsForm = () => {
  return <div>CustomSectionsForm</div>;
};

const CertificatesForm = () => {
  return <div>CertificatesForm</div>;
};

export {
  PersonalDetailsForm,
  CertificatesForm,
  CustomSectionsForm,
  SkillsForm,
  SpokenLanguagesForm,
  ProjectsForm,
  LinksForm,
  WorkExperienceForm,
  SummaryForm,
  EducationForm,
};
