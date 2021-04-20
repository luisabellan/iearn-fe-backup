import React, { useEffect } from "react";

//Context Providers
import withUserContext from "../../../utility/withContexts/withUser";
import withTitleContext from "../../../utility/withContexts/withTitle";

//Components
import UserProfile from "./User";
import MentorProfile from "./Mentor";

const Profile = (props) => {
  useEffect(() => {props.setPageTitle("Profile")});

  return (
    <>
      {(props.type === "user" || props.type === "admin") && <UserProfile />}
      {props.type === "mentor" && <MentorProfile />}
    </>
  );
};

export default withUserContext(withTitleContext(Profile));
