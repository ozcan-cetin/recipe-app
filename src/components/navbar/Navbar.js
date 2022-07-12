import React, { useState } from "react";
import Style from "./Style";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
// const location = useLocation();
// const start = location.state;
const [start, setStart] = useState(true)
  return (
    <div>
      {start && <Style>
      <div>
        <h1>RECIPE</h1>
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
    </Style>}
    </div>
   
  );
};

export default Navbar;
