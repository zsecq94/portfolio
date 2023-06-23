import React from "react";
import Canvas from "./Layout/Canvas";
import Header from "./Layout/Header";
import Main from "./pages/Main";

import "./App.scss";

function App() {
  return (
    <div className="App-wrapper">
      <Header />
      <Main />
      <Canvas />
    </div>
  );
}

export default App;
