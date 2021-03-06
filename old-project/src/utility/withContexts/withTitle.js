import React, { useContext } from "react";
import { TitleContext } from "../context/title-context";

export default function withTitleContext(Component) {
  return (props) => <Component {...props} {...useContext(TitleContext)} />;
}
