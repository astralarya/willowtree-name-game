import React from "react";
import ReactDOM from "react-dom";
import App from "./app/index";

const API_ENDPOINT = "https://willowtreeapps.com/api/v1.0/profiles";

ReactDOM.render(<App uri={API_ENDPOINT} />, document.getElementById("app"));
