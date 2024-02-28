import Form from "react-bootstrap/Form";

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

export default SummaryForm;
