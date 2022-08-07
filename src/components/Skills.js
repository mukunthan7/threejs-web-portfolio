import React from "react";
import "./Skills.css";
import HTML from "./icons/html.svg";
import CSS from "./icons/css.svg";
import Sass from "./icons/sass.svg";
import TailwindCSS from "./icons/tailwindcss.svg";
import JS from "./icons/javascript.svg";
import ReactIcon from "./icons/react.svg";
import Vue from "./icons/vuejs.svg";
import Node from "./icons/nodejs.svg";
import Docker from "./icons/docker.svg";
import Linux from "./icons/linux.svg";
import Postgresql from "./icons/postgresql.svg";
import Mysql from "./icons/mysql.svg";
import C from "./icons/c.svg";
import CPP from "./icons/c++.svg";
import Java from "./icons/java.svg";
import Python from "./icons/python.svg";

const skills = () => {
  return (
    <div className="my_skills">
      <h2 className="skills_line">Skills</h2>
      <img src={HTML} alt="html" className="skills_icon" />
      <img src={CSS} alt="css" className="skills_icon" />
      <img src={Sass} alt="sass" className="skills_icon" />
      <img src={TailwindCSS} alt="tailwindcss" className="skills_icon" />
      <img src={JS} alt="js" className="skills_icon" />
      <img src={ReactIcon} alt="react" className="skills_icon" />
      <img src={Vue} alt="vue" className="skills_icon" />
      <img src={Node} alt="node" className="skills_icon" />
      <img src={Docker} alt="docker" className="skills_icon" />
      <img src={Linux} alt="linux" className="skills_icon" />
      <img src={Postgresql} alt="postgresql" className="skills_icon" />
      <img src={Mysql} alt="mysql" className="skills_icon" />
      <img src={C} alt="c" className="skills_icon" />
      <img src={CPP} alt="c++" className="skills_icon" />
      <img src={Java} alt="java" className="skills_icon" />
      <img src={Python} alt="python" className="skills_icon" />
    </div>
  );
};

export default skills;
