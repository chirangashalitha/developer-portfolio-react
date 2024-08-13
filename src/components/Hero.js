import React from "react";
import NavBar from "./NavBar";
import ProfileImage from "../assets/images/profile.jpg";
import './Hero.css';

function Hero() {
  return (
    <>
      <div>
        <NavBar />
        <div className="hero-image"></div>
        <div className="container">
          <img src={ProfileImage} className="profile-image" />
          <h1 className="profile-name">Chiranga Shalitha</h1>
          <h2 className="profile-title">Web Developer | UI/UX Desginer</h2>
        </div>
      </div>
    </>
  );
}

export default Hero;
