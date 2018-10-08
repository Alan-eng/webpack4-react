import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

const Index = () => {
  return <App />
}

ReactDOM.render(<Index />, document.getElementById("index"));

if (module.hot) { // this is for Webpack HMR
    module.hot.accept();
}