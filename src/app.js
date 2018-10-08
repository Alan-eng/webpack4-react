import React from "react";
import ButtonRed from "./components/buttonRed"
import ButtonBlue from "./components/buttonBlue"
import { hot } from 'react-hot-loader'

const App = () => {
  return (
    <div>
        <div>
            <ButtonRed />
        </div>
        <div>
            <ButtonBlue />
        </div>
    </div>
  )
  
};

export default hot(module)(App)