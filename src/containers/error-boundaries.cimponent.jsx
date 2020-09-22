import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false, error: null, errorMessage: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({error: error, errorMessage: errorInfo, hasError: true});
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Something went wrong.</h1>
          <p>{this.state.errorMessage}</p>
        </>);
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
