import { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
        return (
            <div className="w-[90%] mx-auto h-[40vh] flex flex-col items-center justify-center text-center space-y-6">
              <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
              <p className="text-lg text-gray-700">
                Something went wrong. Please try again later.
              </p>
              <a 
                href="/" 
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg"
              >
                Return to Home
              </a>
            </div>
          );
          
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
