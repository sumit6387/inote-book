import React, { useContext } from "react";
import alertContext from "../context/alert/alertContext";

function Alert() {
  const context = useContext(alertContext);
  const { alert } = context;
  return (
    <>
      {alert.alertType && alert.msg && (
        <div className={`alert alert-${alert.alertType} mt-2`} role="alert">
          <strong>{alert.alertType}!</strong> {alert.msg}
        </div>
      )}
    </>
  );
}

export default Alert;
