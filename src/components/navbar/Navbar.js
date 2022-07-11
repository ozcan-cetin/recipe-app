import React from "react";
import Style from "./Style";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Style>
      <div>
        <h1>Özcan</h1>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to="about">ABOUT</NavLink>
          </li>
          <li>
            <a href="https://github.com/">GITHUB</a>
          </li>
          <li>
            <a href="/">LOGOUT</a>
          </li>
        </ul>
      </div>
    </Style>
  );
};

export default Navbar;
