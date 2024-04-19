/* eslint-disable react/prop-types */
import Toast from "react-bootstrap/Toast";
import { useDispatch } from "react-redux";
import {
  SetSelectedLinkID,
  SetSelectedProjectID,
  SetSelectedEducationID,
  SetSelectedWorkExperienceID,
} from "src/redux/ResumeSlice";

import {
  DeleteProject,
  DeleteLink,
  DeleteEducation,
  DeleteWorkExperience,
  DeleteSkill,
  DeleteHobby,
  DeleteSpokenLanguage,
} from "src/redux/ResumeSlice";

const DisplayWorkExperience = (props) => {
  const dispatch = useDispatch();
  const DeleteData = () =>
    dispatch(DeleteWorkExperience(props.workexperience.id));
  const SetSelectedID = () =>
    dispatch(SetSelectedWorkExperienceID(props.workexperience.id));
  return (
    <>
      <Toast show={true} onClose={DeleteData} bg="primary" className="my-2">
        <Toast.Header>
          <strong
            className="me-auto"
            onClick={SetSelectedID}
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
  const DeleteData = () => dispatch(DeleteEducation(props.education.id));
  const SetSelectedID = () =>
    dispatch(SetSelectedEducationID(props.education.id));
  return (
    <>
      <Toast show={true} onClose={DeleteData} bg="primary" className="my-2">
        <Toast.Header>
          <strong
            className="me-auto"
            onClick={SetSelectedID}
            style={{ cursor: "pointer" }}
          >
            {props.education.universityname}
          </strong>
        </Toast.Header>
      </Toast>
    </>
  );
};

const DisplayProject = (props) => {
  const dispatch = useDispatch();
  const DeleteData = () => dispatch(DeleteProject(props.project.id));
  const SetSelectedID = () => dispatch(SetSelectedProjectID(props.project.id));
  return (
    <>
      <Toast
        show={true}
        onClose={DeleteData}
        onClick={SetSelectedID}
        style={{ cursor: "pointer" }}
        bg="primary"
        className="my-2"
      >
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
  const DeleteData = () => dispatch(DeleteLink(props.link.id));
  const SetSelectedID = () => dispatch(SetSelectedLinkID(props.link.id));
  return (
    <>
      <Toast show={true} onClose={DeleteData} bg="primary" className="my-2">
        <Toast.Header>
          <strong
            className="me-auto"
            onClick={SetSelectedID}
            style={{ cursor: "pointer" }}
          >
            {props.link.networkname}
          </strong>
        </Toast.Header>
      </Toast>
    </>
  );
};

const DisplaySkill = (props) => {
  const dispatch = useDispatch();
  const DeleteData = () => dispatch(DeleteSkill(props.skill.id));
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
    dispatch(DeleteSpokenLanguage(props.spokenlanguage.id));
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
  const DeleteData = () => dispatch(DeleteHobby(props.hobby.id));
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
