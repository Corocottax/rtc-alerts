import { createContext, useState } from "react";
import Alert from "./Alert";

export const AlertContext = createContext();

const AlertProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);

  return (
    <AlertContext.Provider value={{ alerts, setAlerts }}>
      <div style={{ position: "absolute", width: "100%", top: 0, left: 0, zIndex: 999999999999999999999999999 }}>
        {alerts.map((alert, index) => (
          <Alert
            key={index}
            type={alert?.type}
            text={alert?.text}
            title={alert.title}
          />
        ))}
      </div>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;