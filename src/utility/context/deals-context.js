import React, { createContext, useState } from "react";

export const DealsContext = createContext({ dealList: [] });

export default function DealsContextProvider(props) {
  const [dealList, setDealList] = useState([
    {
      collaborators: "Carpenter, Lily",
      price: 123123.0,
      address: "111 WInding Way",
      city: "Palm Bay",
      state: "FL",
      zip: "32908",
      notes:
        "Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatu",
    },
  ]);

  return (
    <DealsContext.Provider value={{ ...{ dealList, setDealList } }}>
      {props.children}
    </DealsContext.Provider>
  );
}
