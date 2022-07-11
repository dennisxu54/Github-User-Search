import "./toast.css";

const Toast = ({ message }) => {
  return (
    <div className="notification-container">
      <button className="toast-close-button">X</button>
      <p>{message}</p> 
    </div>
  );
};

export default Toast;
