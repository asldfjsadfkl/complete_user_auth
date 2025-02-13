import { useState } from "react";
import { userContext } from "./userContext.js";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
