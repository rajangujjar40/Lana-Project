import React from "react";
import AppContext from "./AppContext";

export default function ContextWrapper({ children }) {
  let data = {};
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}
