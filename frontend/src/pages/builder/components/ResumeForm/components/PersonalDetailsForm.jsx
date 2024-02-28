import Form from "react-bootstrap/Form";

const PersonalDetailsForm = () => {
  return (
    <>
      <Form.Control type="file" className="my-3" />
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
    </>
  );
};

export default PersonalDetailsForm;
