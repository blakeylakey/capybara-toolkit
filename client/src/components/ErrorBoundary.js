import React from "react";
import NotFound from "./NotFound";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <NotFound error />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
