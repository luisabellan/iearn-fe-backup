import React from "react";
import { Switch, Route, Link, useLocation, Redirect } from "react-router-dom";

//Routes
import AccountSettings from "./Account/accountSettings";
import ContactSettings from "./Contact/contactSettings";

const Settings = () => {
  const location = useLocation();

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-11">
          <Link
            className={`ml-4 button-transparent-2 ${
              location.pathname.includes("account") ? "font-weight-bold" : ""
            }`}
            to="/settings/account"
          >
            Account Settings
          </Link>
          <Link
            className={`ml-4 button-transparent-2 ${
              location.pathname.includes("contact") ? "font-weight-bold" : ""
            }`}
            to="/settings/contact"
          >
            Contact Settings
          </Link>
        </div>
      </div>
      <Switch>
        <Route exact component={AccountSettings} path="/settings/account" />
        <Route exact component={ContactSettings} path="/settings/contact" />
        <Redirect from="/settings" to="/settings/account" />
      </Switch>
    </>
  );
};

export default Settings;
