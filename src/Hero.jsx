import React from "react";
import swift from "./assets/swift.svg";
import RN from "./assets/react-native.svg";
import sql from "./assets/sql.svg";
import html from "./assets/html.svg";
import CSS from "./assets/CSS.svg";
import figma from "./assets/figma.svg";
import react from "./assets/react.svg";
import javascript from "./assets/javascript.svg";
import Salesforce from "./assets/Salesforce.svg.png";

export default function Hero() {
  return (
    <div>
      <div className="heading-container" id="heading-bar">
        <div className="heading">
          <h1>
            Hi, I'm Saban — A <span className="intro-style">Developer</span>
            based <br />
            in Kathmandu, Nepal.
          </h1>
        </div>
        <div className="heading-description">
          <p>
            As a software developer and recent college graduate, I have
            experience in building both mobile applications and websites. I’m
            passionate about bringing ideas to life through code, and have
            worked with technologies like React, React Native, Salesforce, and
            Swift. I thrive in collaborative environments, where I can
            contribute to projects and learn from more experienced developers
            and mentors. My goal is to continuously grow as a developer while
            delivering impactful, high-quality solutions.
          </p>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <ul className="skillset">
            <li>
              <img src={swift} alt="swift" height={50} />
              <p>swift</p>
            </li>
            <li>
              <img src={Salesforce} alt="next.js" height={50} />
              <p>Salesforce</p>
            </li>
            <li>
              <img src={sql} alt="sql" height={50} />
              <p>SQL</p>
            </li>
            <li>
              <img src={RN} alt="React native" height={50} />
              <p>
                React
                <br />
                Native
              </p>
            </li>
            <li>
              <img src={figma} alt="figma" height={50} />
              <p>Figma</p>
            </li>
            <li>
              <img src={html} alt="html" height={50} />
              <p>HTML5</p>
            </li>
            <li>
              <img src={CSS} alt="css" height={50} />
              <p>CSS3</p>
            </li>
            <li>
              <img src={react} alt="react" height={50} />
              <p>React</p>
            </li>
            <li>
              <img src={javascript} alt="javascript" height={50} />
              <p>JavaScript</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
