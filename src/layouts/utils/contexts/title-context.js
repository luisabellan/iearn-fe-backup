import React, { createContext, useState } from "react";

export const TitleContext = createContext({ pageTitle: "" });

export default function TitleContextProvider(props) {
  const [pageTitle, setPageTitle] = useState("");

  return (
    <TitleContext.Provider value={{ ...{ pageTitle, setPageTitle } }}>
      {props.children}
    </TitleContext.Provider>
  );
}
