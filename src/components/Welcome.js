import React from "react";
import profile from "./image/Profile.jpg";
import "./Welcome.css";

export const Welcome = () => {
  return (
    <div className="about">
      <p className="hello_me">Hello, I'm an web developer based in India!</p>
      <div className="Profile_container">
        <div className="profie_dev">
          <h2 className="profile_Name">M.Mukunthan</h2>
          <span>Web Designer(UI/UX Designer / Developer)</span>
        </div>
        <img className="profile" src={profile} alt="profile" />
      </div>
      <p className="my_self">
        <h2 className="about_line">About</h2>A passionate Full Stack Web
        Developer and Cyber Security having an experience of building Web
        applications with JavaScript / Reactjs / Nodejs / MySQL / Docker / Linux
        / Git and some other technologies.
      </p>
      <div className="Button_container">
        <button className="Github">
          <a href="https://github.com/mukunthan7">Github Profile</a>
        </button>
        <button className="Project">
          <a href="https://github.com/mukunthan7?tab=repositories">Projects</a>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
