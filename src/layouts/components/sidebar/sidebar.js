// import external modules
import React, { Fragment, useState, useEffect } from "react";
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

const Sidebar = (props) => {
  const [collapsedSidebar, setCollapsedSidebar] = useState(
    templateConfig.sidebar.collapsed
  );
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  const handleCollapsedSidebar = (collapsedSidebar) => {
    setCollapsedSidebar({ collapsedSidebar });
  };

  useEffect(() => {
    if (window !== "undefined") {
      window.addEventListener("resize", updateWidth(), false);
    }

    return () => {
      if (window !== "undefined") {
        window.removeEventListener("resize", updateWidth(), false);
      }
    };
  });

  const handleMouseEnter = (e) => {
    setCollapsedSidebar(false);
  };

  const handleMouseLeave = (e) => {
    setCollapsedSidebar(true);
  };

  return (
    <Fragment>
      <FoldedContentConsumer>
        {(context) => (
          <div
            style={{ backgroundColor: "#0C2340" }}
            className={classnames(
              "app-sidebar",
              {
                "": !collapsedSidebar,
                collapsed: collapsedSidebar,
              },
              {
                "hide-sidebar": width < 991 && props.sidebarState === "close",
                "": props.sidebarState === "open",
              }
            )}
            onMouseEnter={context.foldedContent ? handleMouseEnter() : null}
            onMouseLeave={context.foldedContent ? handleMouseLeave() : null}
          >
            <SidebarHeader
              toggleSidebarMenu={() => props.toggleSidebarMenu()}
              sidebarBgColor={props.color}
            />
            <PerfectScrollbar className="sidebar-content">
              <SideMenuContent
                collapsedSidebar={collapsedSidebar}
                toggleSidebarMenu={() => props.toggleSidebarMenu()}
              />
            </PerfectScrollbar>
          </div>
        )}
      </FoldedContentConsumer>
    </Fragment>
  );
};

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
