import React, { useState } from "react";
export const searchContext = React.createContext();

const SearchProvider = ({ children }) => {
  const [input, setInput] = useState();
  return (
    <searchContext.Provider value={{ input, setInput }}>
      {children}
    </searchContext.Provider>
  );
};

export default SearchProvider;
