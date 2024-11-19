import "./Alert.css";
import AlertProvider from "./AlertProvider";
import { useAlert } from "./useAlert";

const Alert = ({ type = "info", title, text, ltr = false }) => {
  return (
    <div className={`rtc-main-alert ${type}`}>
      <div></div>
      <h3>{title}</h3>
      <p>{text}</p>
      <img src={`./${type}.png`} alt={type} />
    </div>
  );
};

export default Alert;
