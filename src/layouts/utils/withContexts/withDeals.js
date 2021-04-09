import React, { useContext } from "react";
import { DealsContext } from "../../../utility/context/deals-context";

export default function withDealsContext(Component) {
  return (props) => <Component {...props} {...useContext(DealsContext)} />;
}
