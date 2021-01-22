// import external modules
import React, { Component } from "react";

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
   Bell,
   Star,
   Award,
   User,
   Settings,
   LogOut
} from "react-feather";
import { NavLink } from "react-router-dom";

// Styling
import "../../../../assets/scss/components/sidebar/sidemenu/sidemenu.scss";
// import internal(own) modules
import SideMenu from "../sidemenuHelper";

class SideMenuContent extends Component {
   render() {
      return (
         <SideMenu className="sidebar-content" toggleSidebarMenu={this.props.toggleSidebarMenu}>
            <SideMenu.MenuSingleItem>
               <NavLink to="/" activeclassname="active">
                  <i className="menu-icon">
                     <PieChart size={22} />
                  </i>
                  <span className="menu-item-text">Overview</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            <SideMenu.MenuSingleItem>
               <NavLink to="/people" activeclassname="active">
                  <i className="menu-icon">
                     <Users size={22} />
                  </i>
                  <span className="menu-item-text">People</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            <SideMenu.MenuSingleItem>
               <NavLink to="/store" activeclassname="active">
                  <i className="menu-icon">
                     <ShoppingBag size={22} />
                  </i>
                  <span className="menu-item-text">Store</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            <SideMenu.MenuMultiItems
               name="Content"
               Icon={<Youtube size={22} />}
               ArrowRight={<ChevronRight size={22} />}
               collapsedSidebar={this.props.collapsedSidebar}
            >
               <NavLink to="/content/courses" exact className="item" activeclassname="active">
                  <i className="menu-icon"><Video size={22} /></i> <span className="menu-item-text">Courses</span>
               </NavLink>
               <NavLink to="/content/videos" exact className="item" activeclassname="active">
                  <i className="menu-icon"><Film size={22} /></i> <span className="menu-item-text">Videos</span>
               </NavLink>
               <NavLink to="/content/files" exact className="item" activeclassname="active">
                  <i className="menu-icon"><File size={22} /></i> <span className="menu-item-text">Files</span>
               </NavLink>
               <NavLink to="/content/faq" exact className="item" activeclassname="active">
                  <i className="menu-icon"><HelpCircle size={22} /></i> <span className="menu-item-text">FAQ</span>
               </NavLink>
            </SideMenu.MenuMultiItems>
            
            <SideMenu.MenuSingleItem>
               <NavLink to="/calendar" activeclassname="active">
                  <i className="menu-icon">
                     <Calendar size={22} />
                  </i>
                  <span className="menu-item-text">Calendar</span>
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
            </SideMenu.MenuSingleItem>

            <SideMenu.MenuSingleItem>
               <NavLink to="/deal-flow" activeclassname="active">
                  <i className="menu-icon">
                     <Award size={22} />
                  </i>
                  <span className="menu-item-text">Deal Flow</span>
               </NavLink>
            </SideMenu.MenuSingleItem>

            <SideMenu.MenuSingleItem>
               <hr className="mt-5"/>
            </SideMenu.MenuSingleItem>

            <SideMenu.MenuSingleItem>
               <NavLink to="/profile" activeclassname="active">
                  <i className="menu-icon">
                     <User size={22} />
                  </i>
                  <span className="menu-item-text">Profile</span>
               </NavLink>
            </SideMenu.MenuSingleItem>

            <SideMenu.MenuSingleItem>
               <NavLink to="/settings" activeclassname="active">
                  <i className="menu-icon">
                     <Settings size={22} />
                  </i>
                  <span className="menu-item-text">Settings</span>
               </NavLink>
            </SideMenu.MenuSingleItem>

            <SideMenu.MenuSingleItem>
               <NavLink to="/login" activeclassname="active">
                  <i className="menu-icon">
                     <LogOut size={22} />
                  </i>
                  <span className="menu-item-text">Logout</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            
         </SideMenu>
      );
   }
}

export default SideMenuContent;
