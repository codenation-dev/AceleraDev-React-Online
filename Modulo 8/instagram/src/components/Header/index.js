import React from "react";

export default function Header() {
  return (
    <header className="topbar">
      <div className="container">
        <a href="/" className="topbar__logo">
          <img src="img/instagram-logo.svg" alt="Instagram logo" />
        </a>

        <button className="topbar__icon">
          <i className="far fa-paper-plane"></i>
        </button>
      </div>
    </header>
  );
}
