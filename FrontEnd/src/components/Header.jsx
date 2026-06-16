import React from "react";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          ☁ DYRUL SYAZNAN
        </div>

        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/Skills">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contacts</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

