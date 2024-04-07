/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const DisplayButton = (props) => {
  return (
    <>
      <Button variant={props.variant}>{props.title}</Button>
    </>
  );
};

const DisplayFormButton = (props) => {
  return (
    <>
      <Button
        variant={props.variant}
        type={props.type}
        className={props.className}
      >
        {props.title}
      </Button>
    </>
  );
};

const DisplayLinkButton = (props) => {
  return (
    <>
      <Link to={props.path} className={props.variant}>
        {props.title}
      </Link>
    </>
  );
};

const DisplayHomeIconButton = (props) => {
  return (
    <>
      <Link to={props.path} className={props.variant}>
        <FaHome />
      </Link>
    </>
  );
};

const DisplayBuilderFormButton = (props) => {
  return (
    <>
      <Button onClick={props.function} key={props.id} variant={props.variant}>
        {props.title}
      </Button>
    </>
  );
};
export {
  DisplayButton,
  DisplayLinkButton,
  DisplayHomeIconButton,
  DisplayFormButton,
  DisplayBuilderFormButton,
};
