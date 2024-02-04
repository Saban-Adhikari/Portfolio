import React from "react";
import MainAvatar from "./assets/avatar-main.png";

export default function Navbar() {
  return (
    <div>
      <div className="image">
        <img
          src={MainAvatar}
          alt="Main Avatar"
          height={120}
          width={120}
          className="main-avatar"
        />
      </div>
      <ul className="navbar">
        <li>
          <a href="#heading-bar">about</a>
        </li>
        <li>
          <a href="#work-bar">work</a>
        </li>
        <li>
          <a href="#contact-bar">contact</a>
        </li>
      </ul>
    </div>
  );
}
