import React from "react";
import { AlertTitle, Alert } from "@material-ui/lab";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, errorMessage: error.message });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <Alert severity="error">
            <AlertTitle>Backend Error</AlertTitle>
            <p>{this.state.errorMessage}</p>
          </Alert>
          {this.props.children}
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
