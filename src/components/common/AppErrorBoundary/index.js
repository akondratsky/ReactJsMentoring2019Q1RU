import React, { Component } from 'react';

export class AppErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // update state if need for showing error
    return { hasError: true };
  }

  componentDidCatch(error, info) {
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ooops! Something wrong...</h1>;
    }

    return this.props.children;
  }
}
