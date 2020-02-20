import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import Home from './Home';
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

import CapybaraRouter from "./Router";

const routing = <CapybaraRouter />;

ReactDOM.render(routing, document.getElementById("root"));
serviceWorker.unregister();
