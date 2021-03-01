import React, { createContext, useState } from "react";

export const UserContext = createContext({ type: "", name: "" });

export default function UserContextProvider(props) {
  const [type, setType] = useState("mentor");
  const [name, setName] = useState("James Dean");

  return (
    <UserContext.Provider value={{ ...{ type, setType, name, setName } }}>
      {props.children}
    </UserContext.Provider>
  );
}
