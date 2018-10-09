import React from "react";
import ButtonRed from "./components/buttonRed"
import ButtonBlue from "./components/buttonBlue"
import SimpleFormContainer from "./containers/simpleFormContainer"
import ListContainer from "./containers/listContainer"
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
        <SimpleFormContainer />
        <ListContainer />
    </div>
  )
  
};

export default hot(module)(App)