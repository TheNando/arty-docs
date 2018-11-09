import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Page from "./Page";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div id="stage">
          <Nav />
          <Route exact path="/:category?/:page" component={Page} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
