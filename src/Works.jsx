import React from "react";
import avatar from "./assets/avatar.png";

export default function Works() {
  return (
    <div>
      <div className="work-container" id="work-bar">
        <img
          src={avatar}
          alt="avatar"
          height={100}
          width={100}
          className="avatar-img"
        />
        <h2>Works</h2>
        <p className="work-desc">
          All my works up until now can be found on my{" "}
          <a href="https://github.com/Saban-Adhikari" className="github-link">
            GitHub
          </a>{" "}
          !
        </p>
      </div>
    </div>
  );
}
