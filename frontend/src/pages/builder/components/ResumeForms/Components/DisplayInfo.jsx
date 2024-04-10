/* eslint-disable react/prop-types */
import Toast from "react-bootstrap/Toast";
import { useDispatch } from "react-redux";

import {
  DeleteProjectDetails,
  DeleteLinkDetails,
  DeleteEducationDetails,
  DeleteWorkExperienceDetails,
  DeleteSkillDetails,
  DeleteHobbyDetails,
  DeleteSpokenLanguageDetails,
} from "src/redux/ResumeSlice";

const DisplayWorkExperience = (props) => {
  const dispatch = useDispatch();
  const DeleteData = () =>
    dispatch(DeleteWorkExperienceDetails(props.workexperience.id));
  return (
    <>
      <Toast show={true} onClose={DeleteData} bg="primary" className="my-2">
        <Toast.Header>
          <strong
            className="me-auto"
            onClick={() => alert("Click is working")}
            style={{ cursor: "pointer" }}
          >
            {props.workexperience.company}
          </strong>
        </Toast.Header>
      </Toast>
    </>
  );
};

const DisplayEducation = (props) => {
  const dispatch = useDispatch();
  const DeleteData = () => dispatch(DeleteEducationDetails(props.education.id));
  return (
    <>
      <Toast show={true} onClose={DeleteData} bg="primary" className="my-2">
        <Toast.Header>
          <strong className="me-auto">{props.education.universityname}</strong>
        </Toast.Header>
      </Toast>
    </>
  );
};

const DisplayProject = (props) => {
  const dispatch = useDispatch();
  const DeleteData = () => dispatch(DeleteProjectDetails(props.project.id));
  return (
    <>
      <Toast show={true} onClose={DeleteData} bg="primary" className="my-2">
        <Toast.Header>
          <strong className="me-auto">{props.project.name}</strong>
          <br />
        </Toast.Header>
      </Toast>
    </>
  );
};

const DisplayLink = (props) => {
  const dispatch = useDispatch();
  const DeleteData = () => dispatch(DeleteLinkDetails(props.link.id));
  return (
    <>
      <Toast show={true} onClose={DeleteData} bg="primary" className="my-2">
        <Toast.Header>
          <strong className="me-auto">{props.link.networkname}</strong>
        </Toast.Header>
      </Toast>
    </>
  );
};

const DisplaySkill = (props) => {
  const dispatch = useDispatch();
  const DeleteData = () => dispatch(DeleteSkillDetails(props.skill.id));
  return (
    <>
      <Toast show={true} onClose={DeleteData} bg="primary" className="my-2">
        <Toast.Header>
          <strong className="me-auto">{props.skill.skills}</strong>
        </Toast.Header>
      </Toast>
    </>
  );
};

const DisplaySpokenLanguage = (props) => {
  const dispatch = useDispatch();
  const DeleteData = () =>
    dispatch(DeleteSpokenLanguageDetails(props.spokenlanguage.id));
  return (
    <>
      <Toast show={true} onClose={DeleteData} bg="primary" className="my-2">
        <Toast.Header>
          <strong className="me-auto">
            {props.spokenlanguage.spokenlanguage}
          </strong>
        </Toast.Header>
      </Toast>
    </>
  );
};

const DisplayHobby = (props) => {
  const dispatch = useDispatch();
  const DeleteData = () => dispatch(DeleteHobbyDetails(props.hobby.id));
  return (
    <>
      <Toast show={true} onClose={DeleteData} bg="primary" className="my-2">
        <Toast.Header>
          <strong className="me-auto">{props.hobby.hobby}</strong>
        </Toast.Header>
      </Toast>
    </>
  );
};

export {
  DisplayLink,
  DisplaySkill,
  DisplaySpokenLanguage,
  DisplayHobby,
  DisplayProject,
  DisplayWorkExperience,
  DisplayEducation,
};
