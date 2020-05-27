import React from "react";

import logo from "../../images/instagram-logo.svg";

export default function Header() {
  return (
    <header className="topbar">
      <div className="container">
        <a href="/" className="topbar__logo">
          <img src={logo} alt="Instagram logo" />
        </a>

        <button className="topbar__icon">
          <i className="far fa-paper-plane"></i>
        </button>
      </div>
    </header>
  );
}
