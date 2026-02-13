import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
          <div className="max-w-md w-full">
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Something went wrong</AlertTitle>
              <AlertDescription>
                {this.state.error?.message || 'An unexpected error occurred'}
              </AlertDescription>
            </Alert>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-4">What happened?</h2>
              <p className="text-sm text-gray-600 mb-4">
                The application encountered an error. This has been logged and we'll look into it.
              </p>
              
              {import.meta.env.DEV && this.state.errorInfo && (
                <details className="mb-4 p-3 bg-gray-100 rounded text-xs overflow-auto">
                  <summary className="cursor-pointer font-semibold mb-2">
                    Error Details (Dev Mode)
                  </summary>
                  <pre className="whitespace-pre-wrap text-red-600">
                    {this.state.error?.stack}
                  </pre>
                  <pre className="whitespace-pre-wrap mt-2">
                    {this.state.errorInfo.componentStack}
                  </pre>
                </details>
              )}
              
              <div className="flex gap-2">
                <Button onClick={this.handleReset} className="flex-1">
                  Return Home
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => window.location.reload()}
                  className="flex-1"
                >
                  Reload Page
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
