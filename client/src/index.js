import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import Home from './Home';
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

import CapybaraRouter from "./Router";
import NavigationTopBar from "./components/NavBars/NavigationTopBar";
import FooterContent from "./components/FooterContent";

const routing = (
  <>
    <NavigationTopBar noShadow />
    <CapybaraRouter />
    <FooterContent noMarginTop />
  </>
);

ReactDOM.render(routing, document.getElementById("root"));
serviceWorker.unregister();
