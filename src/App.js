import React from "react";

import MainLayout from "./components/MainLayout";
import Social from "./components/social";

import { ReactComponent as Logo } from "./logo.svg";
import "./style/App.scss";

import NavBar from "./components/navbar";

function App() {
  return (
    <div classNameName="App">
      <MainLayout>
        <div className="mainTitle" id="titleDiv">
          <h1 className="mainTitle-title">Aref Maddah</h1>
          <h2 className="mainTitle-subtitle">
            Front-End Developer | Android Developer
          </h2>
        </div>

        <Social id="social" />
      </MainLayout>
    </div>
  );
}

export default App;
