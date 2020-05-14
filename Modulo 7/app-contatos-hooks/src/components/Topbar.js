import React from "react";
import { ReactComponent as LogoSvg } from "../assets/img/logo.svg";

import "./Topbar.scss";

class Topbar extends React.Component {
  render() {
    return (
      <header className="topbar" data-testid="topbar">
        <div className="container">
          <a href="/" className="topbar__logo">
            <LogoSvg alt="Logo Instagram" />
          </a>
        </div>
      </header>
    );
  }
}

export default Topbar;
