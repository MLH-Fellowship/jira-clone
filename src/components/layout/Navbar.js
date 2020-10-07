import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ isSignedIn, signOut }) => {
  const links = isSignedIn ? (
    <ul>
      <li>
        <NavLink to="/" style={{ fontSize: "28px" }}>
          Jira Clone
        </NavLink>
      </li>
      <li style={{ float: "right" }}>
        <a onClick={signOut}>Log Out</a>
      </li>
      <li style={{ float: "right" }}>
        <NavLink to="/create">Create Issue</NavLink>
      </li>
    </ul>
  ) : (
    <ul>
      <li>
        <NavLink to="/" style={{ fontSize: "28px" }}>
          Jira Clone
        </NavLink>
      </li>
      <li style={{ float: "right" }}>
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
      <li style={{ float: "right" }}>
        <NavLink to="/signin">Log In</NavLink>
      </li>
    </ul>
  );

  return <div>{links}</div>;
};

export default Navbar;
