import React, { Component } from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Page from "./Page";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div id="stage">
          <Nav />
          <Switch>
            <Route exact path="/:category?/:page" component={Page} />
            <Redirect to="/README.md" />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
