import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import Main from "./components/index";
import store from "./store/index";
import "./types/css-modules.d.ts";

const App = ({uri}: {uri: string}) => {
  return (
    <Provider store={store}>
      <Main uri={uri}/>
    </Provider>
  );
};

export default App;
