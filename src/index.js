import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { Provider } from "react-redux";

import addArticle from "./actions";

import { createStore } from "redux";
import rootReducer from "./reducers"

/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //You may also pass an initial state to createStore. But most of the times you don’t have to. Passing an initial state is useful for server side rendering. Anyway, the state comes from reducers. While an initial state is useful for SSR, in Redux the state must return entirely from reducers.The Redux store exposes a simple API for managing the state. The most important methods are:
// getState for accessing the current state of the application
// dispatch for dispatching an action
// subscribe for listening on state changes
// window.store = store;
// window.addArticle = addArticle;
/* eslint-enable */

// https://www.valentinog.com/blog/react-redux-tutorial-beginners/

const Index = () => (
    <Provider store={ store }>
        <App />
    </Provider>
)


ReactDOM.render(<Index />, document.getElementById("index"));

if (module.hot) { // this is for Webpack HMR
    module.hot.accept();
}