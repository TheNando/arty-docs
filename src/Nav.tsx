import React, { Component } from "react";
import { Link } from "react-router-dom";
import MarkdownUtils from "./modules/MarkdownUtils";

export interface NavItem {
  name: string;
  link: string;
}

export interface NavCategory {
  name: string;
  items: Array<NavItem>;
  link: string;
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
            <Link className="nav-category" to={category.link}>
              {category.name}
            </Link>

            {/* Render Nav Category's Nav Items */}
            {category.items.map((item: NavItem) => (
              <Link className="nav-item" key={item.name} to={item.link}>
                {item.name}
              </Link>
            ))}
          </React.Fragment>
        ))}
      </nav>
    );
  }
}

export default Nav;
