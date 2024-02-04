import React from "react";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Works from "./Works.jsx";
import Contact from "./Contact.jsx";
import "./MainPage.css";

export default function MainPage() {
  return (
    <div>
      <div className="container">
        <Navbar />
        <Hero />
        <Works />
        <Contact />
      </div>
    </div>
  );
}
