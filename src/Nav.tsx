import React, { Component } from "react";
import MarkdownUtils from "./modules/MarkdownUtils";
import "./Nav.css";

export interface NavItem {
  name: string;
}

export interface NavCategory {
  name: string;
  items: Array<NavItem>;
}

class Nav extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    fetch(require("./docs/index.md"))
      .then(response => response.text())
      .then(text => {
        const categories = MarkdownUtils.mdToCategories(text);
        this.setState({ categories });
      });
  }

  render() {
    const { categories } = this.state;
    return (
      <nav id="nav" className="hxNav">
        <div className="nav-title">Arty</div>

        <div className="nav-subtitle">A React/Typescript Stack</div>

        {categories.map((category: NavCategory) => (
          <React.Fragment key={category.name}>
            {/* Render the Nav Category */}
            <a href="#" className="nav-category">
              {category.name}
            </a>

            {/* Render Nav Category's Nav Items */}
            {category.items.map((item: NavItem) => (
              <a href="#" className="nav-item" key={item.name}>
                {item.name}
              </a>
            ))}
          </React.Fragment>
        ))}
      </nav>
    );
  }
}

export default Nav;
