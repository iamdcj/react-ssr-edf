import React, { Component, ErrorInfo } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error);
    console.info(info);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return null;
    }

    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;
