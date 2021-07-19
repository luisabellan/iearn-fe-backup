import React from "react";
import templateConfig from "../templateConfig";
import classnames from "classnames";
// import { Row, Col } from "reactstrap";
import "./layouts.scss";

//Assets
import logo from "../assets/img/_main/logo.svg";

const FullPageLayout = ({ children, ...rest }) => {
  return (
    <div
      className={classnames("login-layout wrapper ", {
        "layout-dark": templateConfig.layoutDark,
      })}
    >
      <div className="full-layout-header">
        <div>
          <img src={logo} alt="Logo" />
        </div>{" "}
        <div>
          <h1>Subto</h1>
        </div>
      </div>
      <main className="main text-muted">{children}</main>
    </div>
  );
};

export default FullPageLayout;
