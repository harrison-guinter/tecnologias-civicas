import React, { createContext } from "react";

export const Environment = createContext();

const EnvironmentProvider = (props) => {
  const baseURL = "http://localhost:3000";
  return (
    <Environment.Provider
      value={{
        baseURL,
      }}
    >
      {props.children}
    </Environment.Provider>
  );
};
export default EnvironmentProvider;
