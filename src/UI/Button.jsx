import React from "react";

function Button({ children, version, type, isDisabled }) {
  return (
    <button
      type={type ? type : "button"}
      disabled={isDisabled ? isDisabled : false}
      className={`btn btn-${version ? version : "primary"}`}
    >
      {children}
    </button>
  );
}

export default Button;
