import React, { useContext } from "react";
import { UserContext } from "../../../utility/context/user-context";

export default function withUserContext(Component) {
  return (props) => <Component {...props} {...useContext(UserContext)} />;
}
