import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Page from "./Page";

const INDEX_URL =
  "https://github.rackspace.com/api/v3/repos/CARE/arty-docs/contents/docs/index.md?access_token=0ca7dc5a20542093a1b6daf90f918e74e88069ff";

class App extends Component {
  async componentDidMount() {
    const response = await fetch(INDEX_URL);
    const meta = await response.json();
    console.log(atob(meta.content));
  }

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
