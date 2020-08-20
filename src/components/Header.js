import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div className="header">
    <h1>Expensify</h1>
    <NavLink exact={true} activeClassName="is-active" to="/">
      Home
    </NavLink>
    <NavLink activeClassName="is-active" to="/create">
      Create
    </NavLink>
    <NavLink activeClassName="is-active" to="/help">
      Help
    </NavLink>
  </div>
);

export default Header;
