import React, { createContext, useState } from "react";

export const TitleContext = createContext({ pageTitle: "", subPage: "" });

export default function TitleContextProvider(props) {
  const [pageTitle, setPageTitle] = useState("");
  const [activeSubPage, setActiveSubPage] = useState("");

  return (
    <TitleContext.Provider value={{ ...{ pageTitle, setPageTitle, activeSubPage, setActiveSubPage } }}>
      {props.children}
    </TitleContext.Provider>
  );
}
