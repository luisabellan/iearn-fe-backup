import React, { useContext } from "react";
import { TitleContext } from "../contexts/title-context";

export default function withTitleContext(Component) {
  return (props) => <Component {...props} {...useContext(TitleContext)} />;
}
