import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('Uncaught error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center px-6 text-center">
          <div>
            <h1 className="font-display text-2xl font-bold mb-2">Something went wrong</h1>
            <p className="text-text-secondary dark:text-text-dark-secondary">
              Please refresh the page. If the problem persists, try again later.
            </p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
