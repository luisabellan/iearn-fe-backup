// import external modules
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  ChevronRight,
  Users,
  PieChart,
  ShoppingBag,
  Youtube,
  Video,
  Film,
  File,
  HelpCircle,
  Calendar,
  MessageSquare,
  // Bell,
  // Star,
  Award,
  User,
  Settings,
  LogOut,
  UserPlus,
  Bookmark,
  FolderPlus,
} from "react-feather";
import { NavLink } from "react-router-dom";

// Styling
import "../../../../assets/scss/components/sidebar/sidemenu/sidemenu.scss";
// import internal(own) modules
import SideMenu from "../sidemenuHelper";

//Context
import withTitleContext from "../../../../utility/withContexts/withTitle";

const SideMenuContent = (props) => {
  const location = useLocation();

  const hideBottomNav = () => {
    let menus = document.getElementsByClassName("nav-container");
    if (menus[1].classList.contains("active")) {
      menus[1].classList.remove("active");
    } else {
      menus[1].classList.add("active");
    }
  };

  return (
    <>
      <SideMenu
        className="sidebar-content"
        toggleSidebarMenu={props.toggleSidebarMenu}
      >
        {/* <SideMenu.MenuSingleItem>
            <NavLink to="/overview" activeclassname="active">
               <i className="menu-icon">
                  <PieChart size={22} />
               </i>
               <span className="menu-item-text">Overview</span>
            </NavLink>
         </SideMenu.MenuSingleItem> */}

        <SideMenu.MenuMultiItems
          onClick={() => hideBottomNav()}
          name="People"
          Icon={<Users size={22} />}
          ArrowRight={<ChevronRight size={22} />}
          collapsedSidebar={props.collapsedSidebar}
        >
          <NavLink
            to="/people/profile"
            exact
            className="item"
            activeclassname="active"
          >
            <i className="menu-icon">
              <User size={22} />
            </i>{" "}
            <span className="menu-item-text">Profile</span>
          </NavLink>
          {/* <NavLink to="/people/groups" exact className="item" activeclassname="active">
               <i className="menu-icon"><UserPlus size={22} /></i> <span className="menu-item-text">Groups</span>
            </NavLink> */}
          <NavLink
            to="/people/directory"
            exact
            className="item"
            activeclassname="active"
          >
            <i className="menu-icon">
              <Bookmark size={22} />
            </i>{" "}
            <span className="menu-item-text">Directory</span>
          </NavLink>
          <NavLink
            to="/people/resources"
            exact
            className="item"
            activeclassname="active"
          >
            <i className="menu-icon">
              <FolderPlus size={22} />
            </i>{" "}
            <span className="menu-item-text">Resources</span>
          </NavLink>
          <NavLink
            to="/people/deals"
            exact
            className={`item ${
              props.activeSubPage === "Deals" ? "active" : ""
            }`}
            activeclassname="active"
          >
            <i className="menu-icon">
              <Award size={22} />
            </i>{" "}
            <span className="menu-item-text">Deals</span>
          </NavLink>
        </SideMenu.MenuMultiItems>

        <SideMenu.MenuMultiItems
          onClick={() => hideBottomNav()}
          name="Content"
          Icon={<Youtube size={22} />}
          ArrowRight={<ChevronRight size={22} />}
          collapsedSidebar={props.collapsedSidebar}
        >
          {/* <NavLink to="/content/courses" exact className={`item ${props.activeSubPage === "Courses" ? "active" : ""}`} activeclassname="active">
               <i className="menu-icon"><Video size={22} /></i> <span className="menu-item-text">Courses</span>
            </NavLink>
            <NavLink to="/content/videos" exact className="item" activeclassname="active">
               <i className="menu-icon"><Film size={22} /></i> <span className="menu-item-text">Videos</span>
            </NavLink> */}
          <NavLink
            to="/content/files"
            exact
            className="item"
            activeclassname="active"
          >
            <i className="menu-icon">
              <File size={22} />
            </i>{" "}
            <span className="menu-item-text">Files</span>
          </NavLink>
          <NavLink
            to="/content/faqs"
            exact
            className="item"
            activeclassname="active"
          >
            <i className="menu-icon">
              <HelpCircle size={22} />
            </i>{" "}
            <span className="menu-item-text">FAQ</span>
          </NavLink>
        </SideMenu.MenuMultiItems>

        {/* <SideMenu.MenuSingleItem>
            <NavLink to="/calendar" activeclassname="active">
               <i className="menu-icon">
                  <Calendar size={22} />
               </i>
               <span className="menu-item-text">Calendar</span>
            </NavLink>
         </SideMenu.MenuSingleItem> */}

        {/* <SideMenu.MenuSingleItem>
            <NavLink to="/alerts" activeclassname="active">
               <i className="menu-icon">
                  <Bell size={22} />
               </i>
               <span className="menu-item-text">Alerts</span>
            </NavLink>
         </SideMenu.MenuSingleItem>

         <SideMenu.MenuSingleItem>
            <NavLink to="/subscription" activeclassname="active">
               <i className="menu-icon">
                  <Star size={22} />
               </i>
               <span className="menu-item-text">Subscription</span>
            </NavLink>
         </SideMenu.MenuSingleItem> */}
      </SideMenu>
      <SideMenu
        className="sidebar-content"
        toggleSidebarMenu={props.toggleSidebarMenu}
      >
        <SideMenu.MenuSingleItem>
          <hr />
        </SideMenu.MenuSingleItem>

        {/* <SideMenu.MenuSingleItem>
            <NavLink to="/store" activeclassname="active">
               <i className="menu-icon">
                  <ShoppingBag size={22} />
               </i>
               <span className="menu-item-text">Store</span>
            </NavLink>
         </SideMenu.MenuSingleItem> */}

        <SideMenu.MenuSingleItem>
          <NavLink
            to={`/settings/${
              location.pathname.includes("contact") ? "contact" : "account"
            }`}
            activeclassname="active"
          >
            <i className="menu-icon">
              <Settings size={22} />
            </i>
            <span className="menu-item-text">Settings</span>
          </NavLink>
        </SideMenu.MenuSingleItem>

        <SideMenu.MenuSingleItem>
          <NavLink to="/support" activeclassname="active">
            <i className="menu-icon">
              <MessageSquare size={22} />
            </i>
            <span className="menu-item-text">Support</span>
          </NavLink>
        </SideMenu.MenuSingleItem>

        <SideMenu.MenuSingleItem>
          <NavLink
            to="/login"
            activeclassname="active"
            onClick={() => localStorage.removeItem("token")}
          >
            <i className="menu-icon">
              <LogOut size={22} />
            </i>
            <span className="menu-item-text">Logout</span>
          </NavLink>
        </SideMenu.MenuSingleItem>
      </SideMenu>
    </>
  );
};

export default withTitleContext(SideMenuContent);
