import React from "react";
import "./FormGroup.css";

export default function FormGroup(props) {
  return <div className="form-group">{props.children}</div>;
}
