import React from "react";

function Alert(props) {
  const { description, success } = props;
  return (
    <div
      class={`alert alert-${success} alert-dismissible fade show`}
      role="alert"
    >
      <strong>{success}!</strong> {description}
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}

export default Alert;
