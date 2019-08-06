import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink className="navlink" to="/" exact >Home</NavLink>
      <NavLink className="navlink" to="/temperature">Temperature</NavLink>
      <NavLink className="navlink" to="/customize-image">Customize Image</NavLink>
      <NavLink className="navlink" to="/celebrities">Celebrities</NavLink>
    </nav>
  );
}
