import React, { useState } from "react";
import AlertContext from "./alertContext";

function AlertState(props) {
  const [alert, setAlert] = useState({ msg: "", alertType: "" });
  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
}

export default AlertState;
