import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "./store/index";
import Main from "./components/index";
import "./types/css-modules.d.ts";

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
