/* eslint-disable react/prop-types */
import { useState } from "react";
import Toast from "react-bootstrap/Toast";

const DisplayField = (props) => {
  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(!show);
  return (
    <>
      <Toast show={show} onClose={toggleShow} bg="primary" className="my-2">
        <Toast.Header>
          <strong className="me-auto">{props.link.network}</strong>
        </Toast.Header>
      </Toast>
    </>
  );
};

export default DisplayField;
