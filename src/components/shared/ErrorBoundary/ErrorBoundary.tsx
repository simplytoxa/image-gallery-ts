import React, { Component } from 'react';
import { Box, WithStyles } from '@material-ui/core';
import styles from './styles';
import ExceptionHandler from '../../../services/ExceptionHandler';

interface PropTypes extends WithStyles<typeof styles> {
  children?: React.ReactNode;
}

interface StateTypes {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<PropTypes, StateTypes> {
  public state = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError = (error: Error): StateTypes => ({
    hasError: true,
    error,
  });

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    ExceptionHandler.catchError(error, errorInfo.componentStack);
  }

  render() {
    const { classes, children } = this.props;
    const { hasError } = this.state;

    if (!hasError) {
      return children;
    }

    return <Box className={classes.root}>Oops!</Box>;
  }
}

export default ErrorBoundary;
