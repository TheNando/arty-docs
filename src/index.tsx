import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Helix Css
import "helix-ui/dist/styles/helix-ui.min.css";

// Converts ES5 custom element constructor functions to ES6 classes -->
import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js";

// loader appends polyfills, if needed -->
import "@webcomponents/webcomponentsjs/webcomponents-loader.js";

// Helix UI client library
import "helix-ui/dist/scripts/helix-ui";

ReactDOM.render(<App />, document.getElementById("app"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
