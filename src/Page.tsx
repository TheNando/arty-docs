import React, { Component } from "react";
import { withRouter, RouteComponentProps } from "react-router";
import MarkdownUtils from "./modules/MarkdownUtils";

export interface RouteParamProps {
  category: string;
  page: string;
}

export interface RouteProps extends RouteComponentProps<RouteParamProps> {}

interface State {
  content: Object;
}

class Page extends Component<RouteProps, State> {
  state = {
    content: { __html: "" }
  };

  // Set content on initial call only
  componentWillMount() {
    this.setContent();
  }

  // Set content on route changes only
  componentDidUpdate(prevProps: RouteProps) {
    if (this.props.location !== prevProps.location) {
      this.setContent();
    }
  }

  async setContent() {
    const { category, page } = this.props.match.params;
    const content = await MarkdownUtils.getPageContent(category, page);
    this.setState(content);
  }

  render() {
    const { content } = this.state;
    return (
      <main
        role="main"
        id="content"
        className="hxBox hxLg markdown"
        dangerouslySetInnerHTML={content}
      />
    );
  }
}

export default withRouter(Page);
