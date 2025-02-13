import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useContext } from "react";
import Home from "./components/Home";
import Signup from "./Authenticaion/Signup.jsx";
import NavBar from "./components/NavBar";
import CreateList from "./components/CreateList";
import Table from "./components/Table";
import { userContext } from "./Context/userContext.js";
import axios from "axios";
import { backend_url } from "./Utils/backend_url_.js";
import UpdateList from "./components/UpdateList.jsx";
import { RefreshContext } from "./Context/RefreshContext.js";
const App = () => {
  const { setUser } = useContext(userContext);
  const { refresh, setRefresh } = useContext(RefreshContext);
  React.useEffect(() => {
    async function userapi() {
      try {
        const { data } = await axios.get(`${backend_url}/api/v1/getuser`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        setUser(data);
      } catch (error) {}
    }
    userapi();
  }, [refresh]);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/createlist" element={<CreateList />} />
        <Route path="/update/:id" element={<UpdateList />} />
        <Route path="/data" element={<Table />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
