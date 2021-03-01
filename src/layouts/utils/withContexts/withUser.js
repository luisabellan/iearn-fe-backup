import React, { useContext } from "react";
import { UserContext } from "../contexts/user-context";

export default function withUserContext(Component) {
  return (props) => <Component {...props} {...useContext(UserContext)} />;
}
