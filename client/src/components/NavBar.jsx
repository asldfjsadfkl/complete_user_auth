import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../Actions/Action.js";
import { userContext } from "../Context/userContext.js";
import { searchContext } from "../Context/SearchContext.js";

const NavBar = () => {
  const { user } = useContext(userContext);
  const { setInput } = useContext(searchContext);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await logout();
    navigate("/");
    // alterantive of this exist
    window.location.reload();
  };
  const status = user?.success;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand " href="#">
          Authentication
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className={status ? "nav-item" : "d-none"}>
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className={status ? "nav-item" : "d-none"}>
              <NavLink className="nav-link" to="createlist">
                CreateList
              </NavLink>
            </li>

            <li className={status ? "nav-item" : "d-none"}>
              <NavLink className="nav-link" to="/data">
                Data
              </NavLink>
            </li>

            <li className={status ? "d-none" : "nav-item"}>
              <NavLink className="nav-link" to="/signup">
                Sign In
              </NavLink>
            </li>
            <li className={status ? "nav-item" : "d-none"}>
              <NavLink className="nav-link" onClick={handleSubmit} to="#">
                Logout
              </NavLink>
            </li>
          </ul>

          <form className={status ? "d-flex" : "d-none"}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search list data"
              aria-label="Search"
              onChange={(e) => setInput(e.target.value)}
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
