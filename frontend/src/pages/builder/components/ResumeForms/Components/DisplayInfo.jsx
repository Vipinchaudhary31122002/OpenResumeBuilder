/* eslint-disable react/prop-types */
import { useState } from "react";
import Toast from "react-bootstrap/Toast";

const DisplayWorkExperience = (props) => {
  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(!show);
  return (
    <>
      <Toast show={show} onClose={toggleShow} bg="primary" className="my-2">
        <Toast.Header>
          <strong className="me-auto">{props.workexperience.company}</strong>
        </Toast.Header>
      </Toast>
    </>
  );
};

const DisplayEducation = (props) => {
  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(!show);
  return (
    <>
      <Toast show={show} onClose={toggleShow} bg="primary" className="my-2">
        <Toast.Header>
          <strong className="me-auto">{props.education.universityname}</strong>
        </Toast.Header>
      </Toast>
    </>
  );
};

const DisplayProject = (props) => {
  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(!show);
  return (
    <>
      <Toast show={show} onClose={toggleShow} bg="primary" className="my-2">
        <Toast.Header>
          <strong className="me-auto">{props.project.name}</strong>
        </Toast.Header>
      </Toast>
    </>
  );
};

const DisplayLink = (props) => {
  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(!show);
  return (
    <>
      <Toast show={show} onClose={toggleShow} bg="primary" className="my-2">
        <Toast.Header>
          <strong className="me-auto">{props.link.networkname}</strong>
        </Toast.Header>
      </Toast>
    </>
  );
};

const DisplaySkill = (props) => {
  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(!show);
  return (
    <>
      <Toast show={show} onClose={toggleShow} bg="primary" className="my-2">
        <Toast.Header>
          <strong className="me-auto">{props.skill}</strong>
        </Toast.Header>
      </Toast>
    </>
  );
};

const DisplaySpokenLanguage = (props) => {
  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(!show);
  return (
    <>
      <Toast show={show} onClose={toggleShow} bg="primary" className="my-2">
        <Toast.Header>
          <strong className="me-auto">{props.spokenlanguage}</strong>
        </Toast.Header>
      </Toast>
    </>
  );
};

const DisplayHobby = (props) => {
  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(!show);
  return (
    <>
      <Toast show={show} onClose={toggleShow} bg="primary" className="my-2">
        <Toast.Header>
          <strong className="me-auto">{props.hobby}</strong>
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
