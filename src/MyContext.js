import React, { createContext, useContext } from "react";

const MyContext = createContext();

export function MyContextProvider({ children }) {
  const lang = "en"; // Set the default value for 'lang'

  return <MyContext.Provider value={{ lang }}>{children}</MyContext.Provider>;
}

export function useMyContext() {
  return useContext(MyContext);
}
