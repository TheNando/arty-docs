import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Page from "./Page";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="stage">
          <Nav />
          <Route exact path="/:category/:page" component={Page} />
          <Route exact path="/:category" component={Page} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
