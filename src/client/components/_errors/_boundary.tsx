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

    try {
      return this.props.children;
    } catch (error) {
      return null;
    }
  }
}

export default ErrorBoundary;
