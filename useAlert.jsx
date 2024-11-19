import { useContext } from "react";
import { AlertContext } from "./AlertProvider";

const alertsArr = [];

let id = 0;

const useAlert = () => {
  const { alerts, setAlerts } = useContext(AlertContext);

  const alert = ({ title, text, type, time = 2000 }) => {
    id += 1;
    const alertId = id;
    setAlerts([...alerts, { id, title, text, type }]);
    alertsArr.push({ id, title, text, type });
    setTimeout(() => {
      const el = alertsArr.find((al) => al.id === alertId);
      alertsArr.splice(alertsArr.indexOf(el), 1);
      setAlerts([...alertsArr]);
    }, time);
  };

  return { alert };
};

export default useAlert;