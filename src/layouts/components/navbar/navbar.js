// import external modules
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Form,
  Media,
  Collapse,
  Navbar,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  // Moon,
  Mail,
  Menu,
  MoreVertical,
  Check,
  Bell,
  User,
  AlertTriangle,
  Inbox,
  Phone,
  Calendar,
  Lock,
  X,
  LogOut,
  Search,
} from "react-feather";
// import NavbarSearch from "../../../components/search/Search";
// import ReactCountryFlag from "react-country-flag";

import userImage from "../../../assets/img/portrait/small/avatar-s-1.png";
import userImage2 from "../../../assets/img/portrait/small/avatar-s-2.png";
import userImage3 from "../../../assets/img/portrait/small/avatar-s-3.png";
import userImage4 from "../../../assets/img/portrait/small/avatar-s-4.png";

const ThemeNavbar = (props) => {
  const [
    isOpen,
    setIsOpen
  ] = useState(false);

  const location = useLocation();

  const getPageName = () => {
    let name = location.pathname;
    name = name.slice(1);
    name = name.split("-");

    let header = "";
    name.forEach((x) => (header += ` ${x}`));
    header.trim();

    if (location.pathname === "/") {
      header = "Home";
    }

    if(location.pathname.includes("account")) {
      header = "Account Settings";
    }

    if(location.pathname.includes("contact")) {
      header = "Contact Settings";
    }

    return header;
  };

    const handleClick = (e) => {
      props.toggleSidebarMenu("open");
    };

    const toggle = () => {
      setIsOpen(!isOpen);
    };

  return (
    <Navbar className="navbar navbar-expand-lg navbar-light bg-faded">
      <div className="container-fluid px-0">
        <div className="navbar-header">
          <h2 className="text-capitalize text-blue font-weight-bold tablet-hidden">
            {getPageName()}
          </h2>
          <Menu
            size={14}
            className="navbar-toggle d-lg-none float-left"
            onClick={() => handleClick()}
            data-toggle="collapse"
          />
          
          <MoreVertical
            className="mt-1 navbar-toggler black no-border float-right"
            size={50}
            onClick={() => toggle()}
          />
        </div>

        <div className="navbar-container">
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto float-right" navbar>
              {/* <UncontrolledDropdown nav inNavbar className="pr-1">
                <DropdownToggle nav>
                  <ReactCountryFlag code="us" svg /> EN
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <ReactCountryFlag code="us" svg /> English
                  </DropdownItem>
                  <DropdownItem>
                    <ReactCountryFlag code="fr" svg /> France
                  </DropdownItem>
                  <DropdownItem>
                    <ReactCountryFlag code="es" svg /> Spanish
                  </DropdownItem>
                  <DropdownItem>
                    <ReactCountryFlag code="cn" svg /> Chinese
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              <NavItem className="pr-1">
                <div className="nav-link">
                  <button className="button-transparent">
                    <Search size={20} color="#333" />
                  </button>
                </div>
              </NavItem>
              <UncontrolledDropdown nav inNavbar className="pr-1">
                <DropdownToggle nav>
                  <span className="notification-bell-blink" />
                  <Bell
                    size={21}
                    className="text-dark notification-danger animate-shake"
                  />
                </DropdownToggle>
                <DropdownMenu right className="notification-dropdown">
                  <div className="p-2 text-center  border-bottom-grey border-bottom-lighten-2">
                    <h6 className="mb-0 text-bold-500">Notifications</h6>
                  </div>
                  <PerfectScrollbar className="noti-list bg-grey bg-lighten-5">
                    <Media className="px-3 pt-2 pb-2 media  border-bottom-grey border-bottom-lighten-3">
                      <Media left top href="#">
                        <Media
                          object
                          src={userImage2}
                          alt="Generic placeholder image"
                          className="rounded-circle width-35"
                        />
                      </Media>
                      <Media body>
                        <h6 className="mb-0 text-bold-500 font-small-3">
                          Selina sent you mail
                          <span className="text-bold-300 font-small-2 text-muted float-right">
                            9:00 A.M
                          </span>
                        </h6>
                        <span className="font-small-3 line-height-2">
                          Cras sit amet nibh libero, in gravida nulla.
                        </span>
                      </Media>
                    </Media>
                    <Media className="px-3 pt-2 pb-2 media  border-bottom-grey border-bottom-lighten-3">
                      <Media left middle href="#" className="mr-2">
                        <span className="bg-success rounded-circle width-35 height-35 d-block">
                          <Check
                            size={30}
                            className="p-1 white margin-left-3"
                          />
                        </span>
                      </Media>
                      <Media body>
                        <h6 className="mb-1 text-bold-500 font-small-3">
                          <span className="success">
                            Report generated successfully!
                          </span>
                          <span className="text-bold-300 font-small-2 text-muted float-right">
                            10:15 A.M
                          </span>
                        </h6>
                        <span className="font-small-3 line-height-2">
                          Consectetur adipisicing elit sed do eiusmod.
                        </span>
                      </Media>
                    </Media>
                    <Media className="px-3 pt-2 pb-2 media  border-bottom-grey border-bottom-lighten-3">
                      <Media left middle href="#" className="mr-2">
                        <span className="bg-warning rounded-circle width-35 height-35 d-block">
                          <AlertTriangle
                            size={30}
                            className="p-1 white margin-left-3"
                          />
                        </span>
                      </Media>
                      <Media body>
                        <h6 className="mb-1 text-bold-500 font-small-3">
                          <span className="warning">Warning notificatoin</span>
                          <span className="text-bold-300 font-small-2 text-muted float-right">
                            11:00 A.M
                          </span>
                        </h6>
                        <p className="font-small-3 line-height-2">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit sed do eiusmod tempor.
                        </p>
                      </Media>
                    </Media>
                    <Media className="px-3 pt-2 pb-2 media  border-bottom-grey border-bottom-lighten-3">
                      <Media left top href="#">
                        <Media
                          object
                          src={userImage3}
                          alt="Generic placeholder image"
                          className="rounded-circle width-35"
                        />
                      </Media>
                      <Media body>
                        <h6 className="mb-0 text-bold-500 font-small-3">
                          John started task
                          <span className="text-bold-300 font-small-2 text-muted float-right">
                            5:00 P.M
                          </span>
                        </h6>
                        <span className="font-small-3 line-height-2">
                          Sit amet consectetur adipisicing elit sed.
                        </span>
                      </Media>
                    </Media>
                    <Media className="px-3 pt-2 pb-2 media  border-bottom-grey border-bottom-lighten-3">
                      <Media left middle href="#" className="mr-2">
                        <span className="bg-danger rounded-circle width-35 height-35 d-block">
                          <X size={30} className="p-1 white margin-left-3" />
                        </span>
                      </Media>
                      <Media body>
                        <h6 className="mb-1 text-bold-500 font-small-3">
                          <span className="danger">Error notificarion</span>
                          <span className="text-bold-300 font-small-2 text-muted float-right">
                            12:15 P.M
                          </span>
                        </h6>
                        <span className="font-small-3 line-height-2">
                          Consectetur adipisicing elit sed do eiusmod.
                        </span>
                      </Media>
                    </Media>
                    <Media className="px-3 pt-2 pb-2 media  border-bottom-grey border-bottom-lighten-3">
                      <Media left top href="#">
                        <Media
                          object
                          src={userImage4}
                          alt="Generic placeholder image"
                          className="rounded-circle width-35"
                        />
                      </Media>
                      <Media body>
                        <h6 className="mb-0 text-bold-500 font-small-3">
                          Lisa started task
                          <span className="text-bold-300 font-small-2 text-muted float-right">
                            6:00 P.M
                          </span>
                        </h6>
                        <span className="font-small-3 line-height-2">
                          Sit amet consectetur adipisicing elit sed.
                        </span>
                      </Media>
                    </Media>
                  </PerfectScrollbar>
                  <div className="p-1 text-center border-top-grey border-top-lighten-2">
                    <Link to="/">View All</Link>
                  </div>
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem className="pr-1">
                <div className="nav-link">
                  <button className="button-transparent-2 button-profile">
                    Jones Ferdinand
                    <img
                      src={userImage}
                      alt="logged-in-user"
                      className="rounded-circle width-35"
                    />
                  </button>
                </div>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </div>
    </Navbar>
  );
};

export default ThemeNavbar;
