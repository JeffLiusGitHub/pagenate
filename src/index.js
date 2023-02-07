import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
// import One from "./components/One";
import OneFunctionComponents from "./components/OneFunctionComponents";
// import Two from "./components/Two";
import TwoFunctionComponents from "./components/TwoFunctionComponents";
import Three from "./components/Three";
import Four from "./components/Four";
import Five from "./components/Five";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>NetEngine FE test</h1>
      <div className="container">
        {/* <One /> */}
        <OneFunctionComponents />
        {/* <Two /> */}
        <TwoFunctionComponents />
        <Three />
        <Four />
        <Five />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
