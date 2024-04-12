/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
// Redux imports
import { useDispatch } from "react-redux";
import {
  // UpdatePersonal,
  // CreateProject,
  // CreateWorkExperience,
  // CreateEducation,
  CreateLink,
  // CreateSkill,
  // CreateSpokenLanguage,
  // CreateHobby,
} from "src/redux/ResumeSlice";

// React Bootstrap imports
import Form from "react-bootstrap/Form";
// import Stack from "react-bootstrap/Stack";

// function that display notification indicator on error
const DisplayError = (text) => toast.error(text);
import { DisplayFormButton } from "src/utils/DisplayButton";
import Modal from "react-bootstrap/Modal";

const FormModalBox = (props) => {
  const [show, setShow] = useState(false);
  console.log("FormModalBox ", show);
  const handleClose = () => {
    setShow(false);
  };
  useEffect(() => {
    setShow(props.show);
  }, [props.show]);
  return (
    <>
      <Modal show={show} onHide={handleClose} data-bs-theme="dark" centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "white" }}>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Link />
        </Modal.Body>
      </Modal>
    </>
  );
};

const Link = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    if (data.networkname.length == 0) {
      DisplayError("Network name is required");
    } else {
      dispatch(CreateLink(data));
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-1">
        <Form.Label className="mb-0">Network name</Form.Label>
        <Form.Control
          type="text"
          placeholder="LinkedIn"
          size="sm"
          {...register("networkname")}
        />
      </Form.Group>
      <Form.Group className="mb-1">
        <Form.Label className="mb-0">Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="jhonedoe"
          size="sm"
          {...register("username")}
        />
      </Form.Group>
      <Form.Group className="mb-1">
        <Form.Label className="mb-0">Profile URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="jhonedoe@linkedin.com"
          size="sm"
          {...register("profileurl")}
        />
      </Form.Group>
      <hr />
      <div className="d-flex justify-content-between">
        <DisplayFormButton
          variant="outline-primary"
          title="Add"
          type="submit"
        />
        <DisplayFormButton
          variant="outline-primary"
          title="Save Changes"
          type="submit"
        />
      </div>
    </form>
  );
};

export { Link, FormModalBox };
