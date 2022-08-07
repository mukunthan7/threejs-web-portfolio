import React from "react";
import "./Technology.css";
import Ubuntu from "./icons/ubuntu.svg";
import Arch from "./icons/arch.svg";
import Vscode from "./icons/vscode.svg";
import Vim from "./icons/vim.svg";
import Github from "./icons/github.svg";
import Git from "./icons/git.svg";
import Powershell from "./icons/powershell.svg";
import Tmux from "./icons/tmux.svg";
import Nginx from "./icons/nginx.svg";
import Firebase from "./icons/firebase.svg";
import Apache from "./icons/apache.svg";
import Brave from "./icons/brave.svg";
import Npm from "./icons/npm.svg";
import Gimp from "./icons/gimp.svg";
import Figma from "./icons/figma.svg";
import Gitlab from "./icons/gitlab.svg";

const Technologys = () => {
  return (
    <div className="my_technology">
      <h2 className="technology_line">Technologies</h2>
      <img src={Ubuntu} alt="ubuntu" className="technology_icon" />
      <img src={Arch} alt="arch" className="technology_icon" />
      <img src={Vscode} alt="vscode" className="technology_icon" />
      <img src={Vim} alt="vim" className="technology_icon" />
      <img src={Git} alt="git" className="technology_icon" />
      <img src={Gimp} alt="gimp" className="technology_icon" />
      <img src={Figma} alt="figma" className="technology_icon" />
      <img src={Gitlab} alt="gitlab" className="technology_icon" />
      <img src={Nginx} alt="nginx" className="technology_icon" />
      <img src={Github} alt="github" className="technology_icon" />
      <img src={Powershell} alt="powershell" className="technology_icon" />
      <img src={Firebase} alt="firebase" className="technology_icon" />
      <img src={Apache} alt="apache" className="technology_icon" />
      <img src={Npm} alt="npm" className="technology_icon" />
      <img src={Tmux} alt="tmux" className="technology_icon" />
      <img src={Brave} alt="brave" className="technology_icon" />
    </div>
  );
};

export default Technologys;
