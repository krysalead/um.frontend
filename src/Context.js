import React from "react";
export const config = {
  baseUrl: "http://localhost:4000/v1",
};
export const AppContext = React.createContext(config);
