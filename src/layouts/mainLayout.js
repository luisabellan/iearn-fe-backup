// import external modules
import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { withRouter } from "react-router-dom";

// import internal(own) modules
import {
  FoldedContentConsumer,
  FoldedContentProvider,
} from "../utility/context/toggleContentContext";
import Sidebar from "./components/sidebar/sidebar";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import templateConfig from "../templateConfig";

const MainLayout = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [sidebarState, setSideBarState] = useState("close");
  const [sidebarSize, setSidebarSize] = useState("");
  const [layout, setLayout] = useState("");

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  const handleSidebarSize = (sidebarSize) => {
    setSidebarSize({ sidebarSize });
  };

  const handleLayout = (layout) => {
    setLayout({ layout });
  };

  useEffect(() => {
    if (window !== "undefined") {
      window.addEventListener("resize", updateWidth, false);
    }
  }, []);

  const toggleSidebarMenu = (sidebarState) => {
    setSideBarState({ sidebarState });
  };

  return (
    <FoldedContentProvider>
      <FoldedContentConsumer>
        {(context) => (
          <div
            className={classnames("wrapper ", {
              "menu-collapsed": context.foldedContent || width < 991,
              "main-layout": !context.foldedContent,
              [`${templateConfig.sidebar.size}`]: sidebarSize === "",
              [`${sidebarSize}`]: sidebarSize !== "",
              //    "layout-dark": (layout === 'layout-dark'),
              //    " layout-dark": (layout === '' && templateConfig.layoutDark === true)
              [`${templateConfig.layoutColor}`]: layout === "",
              [`${layout}`]: layout !== "",
            })}
          >
            <Sidebar
              toggleSidebarMenu={toggleSidebarMenu}
              sidebarState={sidebarState}
              handleSidebarSize={handleSidebarSize}
              handleLayout={handleLayout}
            />
            <Navbar
              toggleSidebarMenu={toggleSidebarMenu}
              sidebarState={sidebarState}
            />
            <main>{props.children}</main>
            <Footer />
          </div>
        )}
      </FoldedContentConsumer>
    </FoldedContentProvider>
  );
};

export default withRouter(MainLayout);
