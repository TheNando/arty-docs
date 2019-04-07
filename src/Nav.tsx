import React, { Component } from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import { RouteProps } from "./Page";
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

class Nav extends Component<RouteProps> {
  state = {
    categories: []
  };

  async componentDidMount() {
    const categories = await MarkdownUtils.getTableOfContents();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    const url = this.props.location.pathname;

    return (
      <nav id="nav" className="hxNav">
        <div className="nav-title">Arty</div>

        <div className="nav-subtitle">A React/Typescript Stack</div>

        {categories.map((category: NavCategory) => (
          <React.Fragment key={category.name}>
            {/* Render the Nav Category */}
            <NavLink
              className="nav-category"
              isActive={e => encodeURI(url) === category.link}
              to={category.link}
            >
              {category.name}
            </NavLink>

            {/* Render Nav Category's Nav Items */}
            {category.items.map((item: NavItem) => (
              <NavLink
                key={item.name}
                className="nav-item"
                isActive={e => encodeURI(url) === item.link}
                to={item.link}
              >
                {item.name}
              </NavLink>
            ))}
          </React.Fragment>
        ))}
      </nav>
    );
  }
}

export default withRouter(Nav);
