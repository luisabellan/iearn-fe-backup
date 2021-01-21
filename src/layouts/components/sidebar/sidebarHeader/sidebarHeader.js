// import external modules
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { ToggleLeft, ToggleRight, X } from "react-feather";
// import internal(own) modules
import { FoldedContentConsumer } from "../../../../utility/context/toggleContentContext";

//Assets
import logo from "../../../../assets/img/_main/logo.svg";

class SidebarHeader extends Component {
  handleClick = (e) => {
    this.props.toggleSidebarMenu("close");
  };

  render() {
    return (
      <FoldedContentConsumer>
        {(context) => (
          <div className="sidebar-header">
            <div className="logo clearfix">
              {/* <NavLink to="/" className="logo-text">
              <div className="d-flex">
                <img src={logo} alt="Logo" className="logo-img" />
                <p>Subto<br/>Resource<br/>Center</p>
              </div>
              </NavLink> */}

              <NavLink to="/" className="logo-text d-flex">
                <div className="logo-img">
                  <img src={logo} alt="Logo" className="logo-img" />
                </div>
                <p className="text">
                  Subto
                  <br />
                  Resource
                  <br />
                  Center
                </p>
              </NavLink>

              <span className="nav-toggle d-none d-sm-none d-md-none d-lg-block">
                {context.foldedContent ? (
                  <ToggleLeft
                    onClick={context.makeNormalContent}
                    className="toggle-icon"
                    size={16}
                  />
                ) : (
                  <ToggleRight
                    onClick={context.makeFullContent}
                    className="toggle-icon"
                    size={16}
                  />
                )}
              </span>
              <span
                href=""
                className="nav-close d-block d-md-block d-lg-none d-xl-none"
                id="sidebarClose"
              >
                <X onClick={this.handleClick} size={20} />
              </span>
            </div>
          </div>
        )}
      </FoldedContentConsumer>
    );
  }
}

export default SidebarHeader;
