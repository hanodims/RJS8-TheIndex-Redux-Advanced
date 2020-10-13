import React from "react";
import { NavLink } from "react-router-dom";

// Logo
import logo from "./assets/theindex.svg";

const Sidebar = () => (
  <div id="sidebar">
    <img src={logo} className="logo" alt="the index logo" />
    <section>
      <h4 className="menu-item">
        <NavLink to="/authors">AUTHORS</NavLink>
      </h4>
      <h4 className="menu-item">
        <NavLink to="/books">BOOKS</NavLink>
      </h4>
    </section>
  </div>
);
const mapDispatchToProps = (dispatch) => {
  return {
    authors: () => dispatch({ type: "SET_AUTHORS" }),
  };
};
export default Sidebar;
