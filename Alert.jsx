import "./Alert.css";
import errorImg from './error.png';
import infoImg from './info.png';
import successImg from './success.png';
import warningImg from './warning.png';

const images = {
  error: errorImg,
  info: infoImg,
  success: successImg,
  warning: warningImg,
};

const Alert = ({ type = "info", title, text, ltr = false }) => {
  return (
    <div className={`rtc-main-alert ${type}`}>
      <div></div>
      <h3>{title}</h3>
      <p>{text}</p>
      <img src={images[type]} alt={type} />
    </div>
  );
};

export default Alert;
