import React from "react";
import "react";
import Viewer from "./components/Viewer";
import Welcome from "./components/Welcome";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Technology from "./components/Technology";
import Love from "./components/Love";
import Web from "./components/Web";

export const App = () => {
  return (
    <div>
      <Viewer />
      <Welcome />
      <Bio />
      <Skills />
      <Technology />
      <Love />
      <Web />
    </div>
  );
};

export default App;
