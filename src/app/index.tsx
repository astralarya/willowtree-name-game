import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "./store/index.tsx";
import Main from "./components/index.tsx";

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
