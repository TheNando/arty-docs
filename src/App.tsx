import React, { Component } from "react";
import Nav from "./Nav";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="stage">
        <Nav />
      </div>
    );
  }
}

export default App;
