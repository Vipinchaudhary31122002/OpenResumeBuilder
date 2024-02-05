import Button from "react-bootstrap/Button";

const DeleteAccountSettings = () => {
  return (
    <>
      <h2>Danger Zone</h2>
      <form className="DeleteForm">
        <Button variant="danger">Delete my account</Button>
      </form>
    </>
  );
};

export default DeleteAccountSettings;
