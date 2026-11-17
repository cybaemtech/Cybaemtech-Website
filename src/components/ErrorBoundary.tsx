import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error in application:", error, errorInfo);

    // Check for chunk load error (common when a new deployment happens or on rapid refresh)
    const isChunkLoadFailed =
      error?.name === "ChunkLoadError" ||
      error?.message?.includes("Failed to fetch dynamically imported module") ||
      error?.message?.includes("Loading chunk") ||
      error?.message?.includes("error loading dynamically imported module");

    if (isChunkLoadFailed) {
      const storageKey = "cybaem_chunk_retry_time";
      const lastRetry = sessionStorage.getItem(storageKey);
      const now = Date.now();

      // Only auto-reload if we haven't reloaded in the last 10 seconds
      if (!lastRetry || now - parseInt(lastRetry, 10) > 10000) {
        sessionStorage.setItem(storageKey, String(now));
        window.location.reload();
      }
    }
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
          <p className="text-slate-400 text-sm max-w-md mb-6">
            We encountered an unexpected error. Please refresh the page to continue.
          </p>

          {this.state.error && (
            <div className="mb-6 p-4 bg-red-950/60 border border-red-500/40 rounded-xl text-left max-w-xl text-xs font-mono text-red-200 overflow-auto max-h-48">
              <p className="font-bold text-red-400 mb-1">
                {this.state.error.name}: {this.state.error.message}
              </p>
              {this.state.error.stack && (
                <pre className="whitespace-pre-wrap opacity-80 text-[11px]">
                  {this.state.error.stack}
                </pre>
              )}
            </div>
          )}

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                this.setState({ hasError: false });
                window.location.reload();
              }}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors text-sm cursor-pointer"
            >
              Reload Page
            </button>
            <button
              onClick={() => {
                this.setState({ hasError: false });
                window.location.href = "/";
              }}
              className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors text-sm cursor-pointer border border-slate-700"
            >
              Go to Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
