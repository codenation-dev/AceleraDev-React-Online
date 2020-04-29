import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button
      type="button"
      onClick={props.handleClick}
      className="btn btn-secondary"
    >
      {props.name}
    </button>
  );
}

export default Button;
