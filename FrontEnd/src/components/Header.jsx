import React from "react";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          ☁ DYRUL SYAZNAN
        </div>

        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/skills">Skills</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

