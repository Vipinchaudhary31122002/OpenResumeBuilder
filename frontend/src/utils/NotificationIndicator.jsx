import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NotificationIndicator = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1200}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
        transition:Bounce
      />
    </>
  );
};

export default NotificationIndicator;
