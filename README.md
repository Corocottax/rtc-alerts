# RTC-ALERTS2
## La librería de alertas para React que necesitas

Esta librería de alertas se centra en tener un poco peso y ser fácil de utilizar, además de intentar adaptarse a cada equipo de desarrollo con sus necesidades


## GET STARTED

### Install
```sh
npm install rtc-alerts2
```

### Provider
Tienes que proveer a tu aplicación con el AlertProvider para poder utilizar las alertas en tu proyecto
```js
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AlertProvider from "rtc-alerts2/AlertProvider.jsx";

createRoot(document.getElementById("root")).render(
  <AlertProvider>
    <App />
  </AlertProvider>
);
```

### Uso
Donde quieras utilizar alguna alerta, tendrás que traer la función alert, de nuestro custom hook useAlert
```js
import { useEffect, useState } from 'react'
import './App.css'
import useAlert from 'rtc-alerts2/useAlert';

function App() {
  const { alert } = useAlert();

  return (
    <div>
      App
    </div>
  )
}

export default App
```

Una vez te has traido la función alert de useAlert, puedes invocar una alerta cuando quieras, recuerda que es una función a la que le tienes que pasar un objeto:
```js
    alert({
        type: "info",
        title: "El título que quieras",
        text: "El texto que quieras",
        time: 2000
     })
```

### types
Para utilizar correctamente los tipos de la alerta tenemos las siguientes posibilidades:
- success
-
![success](https://res.cloudinary.com/dvxk7aq5u/image/upload/v1732015740/rtc-alerts2/Screenshot_4_h9qwix.jpg)

- error
- 
![error](https://res.cloudinary.com/dvxk7aq5u/image/upload/v1732015741/rtc-alerts2/Screenshot_2_p3vdws.jpg)

- warning
- 
![warning](https://res.cloudinary.com/dvxk7aq5u/image/upload/v1732015741/rtc-alerts2/Screenshot_3_rqpw8z.jpg)

- info
- 
![info](https://res.cloudinary.com/dvxk7aq5u/image/upload/v1732015740/rtc-alerts2/Screenshot_1_n0mvm2.jpg)
