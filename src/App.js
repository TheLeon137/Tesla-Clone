import React from "react";
import Cybertruck from "./components/Cybertruck";
import Model from "./components/Model";
import ModelS from "./components/ModelS";
import ModelX from "./components/ModelX";
import ModelY from "./components/ModelY";

function App() {
  return (
    <div>
      <div id="modelS">
        <ModelS />
      </div>
      <div id="model">
        <Model />
      </div>
      <div id="modelX">
        <ModelX />
      </div>
      <div id="modelY">
        <ModelY />
      </div>
      <div id="cybertruck">
        <Cybertruck />
      </div>
    </div>
  );
}

export default App;
