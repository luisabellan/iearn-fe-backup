// import external modules
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import PerfectScrollbar from "react-perfect-scrollbar";
// Styling
import "../../../assets/scss/components/sidebar/sidebar.scss";
// import internal(own) modules
import SideMenuContent from "./sidemenu/sidemenu";
import SidebarHeader from "./sidebarHeader/sidebarHeader";
import { FoldedContentConsumer } from "../../../utility/context/toggleContentContext";
import templateConfig from "../../../templateConfig";
import {
  sidebarImage,
  sidebarImageUrl,
  sidebarBgColor,
  sidebarCollapsed,
  sidebarSize,
} from "../../../redux/actions/customizer/customizerActions";

class Sidebar extends Component {
  state = {
    collapsedSidebar: templateConfig.sidebar.collapsed,
    width: window.innerWidth,
  };
  updateWidth = () => {
    this.setState((prevState) => ({
      width: window.innerWidth,
    }));
  };

  handleCollapsedSidebar = (collapsedSidebar) => {
    this.setState({ collapsedSidebar });
  };

  componentDidMount() {
    if (window !== "undefined") {
      window.addEventListener("resize", this.updateWidth, false);
    }
  }

  componentWillUnmount() {
    if (window !== "undefined") {
      window.removeEventListener("resize", this.updateWidth, false);
    }
  }
  handleMouseEnter = (e) => {
    this.setState((prevState) => ({
      collapsedSidebar: false,
    }));
  };

  handleMouseLeave = (e) => {
    this.setState((prevState) => ({
      collapsedSidebar: true,
    }));
  };

  render() {
    return (
      <Fragment>
        <FoldedContentConsumer>
          {(context) => (
            <div
              style={{ backgroundColor: "#0C2340" }}
              className={classnames(
                "app-sidebar",
                {
                  "": !this.state.collapsedSidebar,
                  collapsed: this.state.collapsedSidebar,
                },
                {
                  "hide-sidebar":
                    this.state.width < 991 &&
                    this.props.sidebarState === "close",
                  "": this.props.sidebarState === "open",
                }
              )}
              onMouseEnter={
                context.foldedContent ? this.handleMouseEnter : null
              }
              onMouseLeave={
                context.foldedContent ? this.handleMouseLeave : null
              }
            >
              <SidebarHeader
                toggleSidebarMenu={this.props.toggleSidebarMenu}
                sidebarBgColor={this.props.color}
              />
              <PerfectScrollbar className="sidebar-content">
                <SideMenuContent
                  collapsedSidebar={this.state.collapsedSidebar}
                  toggleSidebarMenu={this.props.toggleSidebarMenu}
                />
              </PerfectScrollbar>
            </div>
          )}
        </FoldedContentConsumer>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  color: state.customizer.sidebarBgColor,
  img: state.customizer.sidebarImage,
  imgurl: state.customizer.sidebarImageUrl,
  size: state.customizer.sidebarSize,
  collapsed: state.customizer.sidebarCollapsed,
});

const mapDispatchToProps = (dispatch) => ({
  sidebarBgColor: (color) => dispatch(sidebarBgColor(color)),
  sidebarImage: (img) => dispatch(sidebarImage(img)),
  sidebarImageUrl: (imgurl) => dispatch(sidebarImageUrl(imgurl)),
  sidebarSize: (size) => dispatch(sidebarSize(size)),
  sidebarCollapsed: (collapsed) => dispatch(sidebarCollapsed(collapsed)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
