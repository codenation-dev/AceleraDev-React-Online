import React, { Component } from "react";
import "./Select.css";

export default class Select extends Component {
  render() {
    const options = this.props.options;
    return (
      <select
        data-testid="select"
        className="select"
        onChange={(event) => this.props.handleChange(event.target.value)}
      >
        {options.map((number) => {
          return (
            <option value={number} key={number}>
              {number}
            </option>
          );
        })}
      </select>
    );
  }
}
