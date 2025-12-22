import React, { useEffect, useState } from "react";
import {
  trackCoreWebVitals,
  checkPerformanceBudget,
  getMemoryUsage,
} from "../utils/performance";

interface PerformanceMetrics {
  LCP: number;
  FID: number;
  CLS: number;
  TTFB: number;
  memoryUsage?: {
    used: number;
    total: number;
    limit: number;
  };
}

interface PerformanceMonitorProps {
  showPanel?: boolean;
  enableAlerts?: boolean;
  collectMetrics?: boolean;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showPanel = process.env.NODE_ENV === "development",
  enableAlerts = true,
  collectMetrics = true,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    LCP: 0,
    FID: 0,
    CLS: 0,
    TTFB: 0,
  });
  const [isVisible, setIsVisible] = useState(false);
  const [performanceScore, setPerformanceScore] = useState(0);

  useEffect(() => {
    if (!collectMetrics) return;

    // Start tracking Core Web Vitals
    trackCoreWebVitals();

    // Check performance budgets
    const budgetResults = checkPerformanceBudget();

    // Get memory usage if available
    const memoryInfo = getMemoryUsage();

    // Update metrics
    setMetrics((prev) => ({
      ...prev,
      TTFB: budgetResults.TTFB,
      memoryUsage: memoryInfo || undefined,
    }));

    // Set up performance observer for LCP
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      setMetrics((prev) => ({ ...prev, LCP: lastEntry.startTime }));
    });
    lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });

    // Set up performance observer for FID
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === "first-input") {
          const fidEntry = entry as PerformanceEventTiming;
          const fid = fidEntry.processingStart - fidEntry.startTime;
          setMetrics((prev) => ({ ...prev, FID: fid }));
        }
      });
    });
    fidObserver.observe({ entryTypes: ["first-input"] });

    // Set up performance observer for CLS
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === "layout-shift" && "hadRecentInput" in entry) {
          const clsEntry = entry as any;
          if (!clsEntry.hadRecentInput) {
            clsValue += clsEntry.value;
            setMetrics((prev) => ({ ...prev, CLS: clsValue }));
          }
        }
      });
    });
    clsObserver.observe({ entryTypes: ["layout-shift"] });

    // Calculate performance score
    const calculateScore = () => {
      let score = 100;

      // LCP penalty (good: <2.5s, needs improvement: 2.5-4s, poor: >4s)
      if (metrics.LCP > 4000) score -= 30;
      else if (metrics.LCP > 2500) score -= 15;

      // FID penalty (good: <100ms, needs improvement: 100-300ms, poor: >300ms)
      if (metrics.FID > 300) score -= 30;
      else if (metrics.FID > 100) score -= 15;

      // CLS penalty (good: <0.1, needs improvement: 0.1-0.25, poor: >0.25)
      if (metrics.CLS > 0.25) score -= 30;
      else if (metrics.CLS > 0.1) score -= 15;

      // TTFB penalty (good: <600ms, needs improvement: 600-1500ms, poor: >1500ms)
      if (metrics.TTFB > 1500) score -= 20;
      else if (metrics.TTFB > 600) score -= 10;

      setPerformanceScore(Math.max(0, score));
    };

    // Update score when metrics change
    const scoreInterval = setInterval(calculateScore, 1000);

    // Performance alerts
    if (enableAlerts) {
      const checkAlerts = () => {
        if (metrics.LCP > 2500 && metrics.LCP < 4000) {
          console.warn("⚠️ LCP needs improvement:", metrics.LCP, "ms");
        } else if (metrics.LCP >= 4000) {
          console.error("🚨 LCP is poor:", metrics.LCP, "ms");
        }

        if (metrics.FID > 100 && metrics.FID < 300) {
          console.warn("⚠️ FID needs improvement:", metrics.FID, "ms");
        } else if (metrics.FID >= 300) {
          console.error("🚨 FID is poor:", metrics.FID, "ms");
        }

        if (metrics.CLS > 0.1 && metrics.CLS < 0.25) {
          console.warn("⚠️ CLS needs improvement:", metrics.CLS);
        } else if (metrics.CLS >= 0.25) {
          console.error("🚨 CLS is poor:", metrics.CLS);
        }
      };

      const alertInterval = setInterval(checkAlerts, 2000);

      return () => {
        clearInterval(alertInterval);
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        clearInterval(scoreInterval);
      };
    }

    return () => {
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      clearInterval(scoreInterval);
    };
  }, [
    collectMetrics,
    enableAlerts,
    metrics.LCP,
    metrics.FID,
    metrics.CLS,
    metrics.TTFB,
  ]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return "bg-green-100 border-green-200";
    if (score >= 50) return "bg-yellow-100 border-yellow-200";
    return "bg-red-100 border-red-200";
  };

  if (!showPanel) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className={`mb-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${getScoreBg(
          performanceScore
        )} ${getScoreColor(performanceScore)}`}
      >
        ⚡ {performanceScore}
      </button>

      {isVisible && (
        <div
          className={`p-4 rounded-lg shadow-lg border min-w-80 ${getScoreBg(
            performanceScore
          )}`}
        >
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-sm">Performance Metrics</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-xs text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span>LCP (Largest Contentful Paint):</span>
              <span
                className={`font-mono ${
                  metrics.LCP > 2500 ? "text-red-600" : "text-green-600"
                }`}
              >
                {metrics.LCP.toFixed(0)}ms
              </span>
            </div>

            <div className="flex justify-between">
              <span>FID (First Input Delay):</span>
              <span
                className={`font-mono ${
                  metrics.FID > 100 ? "text-red-600" : "text-green-600"
                }`}
              >
                {metrics.FID.toFixed(0)}ms
              </span>
            </div>

            <div className="flex justify-between">
              <span>CLS (Cumulative Layout Shift):</span>
              <span
                className={`font-mono ${
                  metrics.CLS > 0.1 ? "text-red-600" : "text-green-600"
                }`}
              >
                {metrics.CLS.toFixed(3)}
              </span>
            </div>

            <div className="flex justify-between">
              <span>TTFB (Time to First Byte):</span>
              <span
                className={`font-mono ${
                  metrics.TTFB > 600 ? "text-red-600" : "text-green-600"
                }`}
              >
                {metrics.TTFB.toFixed(0)}ms
              </span>
            </div>

            {metrics.memoryUsage && (
              <div className="flex justify-between">
                <span>Memory Usage:</span>
                <span className="font-mono">
                  {metrics.memoryUsage.used}MB / {metrics.memoryUsage.total}MB
                </span>
              </div>
            )}

            <div className="flex justify-between border-t pt-2 mt-2">
              <span>Performance Score:</span>
              <span className={`font-bold ${getScoreColor(performanceScore)}`}>
                {performanceScore}/100
              </span>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t">
            <div className="text-xs text-gray-600 space-y-1">
              <div className="flex justify-between">
                <span>⚡ Good</span>
                <span className="text-green-600">90-100</span>
              </div>
              <div className="flex justify-between">
                <span>⚠️ Needs Improvement</span>
                <span className="text-yellow-600">50-89</span>
              </div>
              <div className="flex justify-between">
                <span>🚨 Poor</span>
                <span className="text-red-600">0-49</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Hook for performance monitoring
export const usePerformanceMonitoring = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);

  const startMonitoring = () => {
    setIsMonitoring(true);

    trackCoreWebVitals();

    const interval = setInterval(() => {
      const budgetResults = checkPerformanceBudget();
      const memoryInfo = getMemoryUsage();

      setMetrics((prev) => ({
        LCP: prev?.LCP || 0,
        FID: prev?.FID || 0,
        CLS: prev?.CLS || 0,
        TTFB: budgetResults.TTFB,
        memoryUsage: memoryInfo || undefined,
      }));
    }, 1000);

    return () => clearInterval(interval);
  };

  const stopMonitoring = () => {
    setIsMonitoring(false);
  };

  return {
    metrics,
    isMonitoring,
    startMonitoring,
    stopMonitoring,
  };
};

// Performance boundary component
interface PerformanceBoundaryState {
  hasError: boolean;
  error: Error | null;
}

interface PerformanceBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error }>;
}

export class PerformanceBoundary extends React.Component<
  PerformanceBoundaryProps,
  PerformanceBoundaryState
> {
  constructor(props: PerformanceBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): PerformanceBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Performance Boundary caught an error:", error, errorInfo);

    // Log performance-related errors
    if (
      error.message.includes("performance") ||
      error.message.includes("memory")
    ) {
      console.error("Performance-related error detected");
    }
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return <FallbackComponent error={this.state.error!} />;
    }

    return this.props.children;
  }
}

const DefaultErrorFallback: React.FC<{ error: Error }> = ({ error }) => (
  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
    <h3 className="text-red-800 font-semibold mb-2">Something went wrong</h3>
    <p className="text-red-600 text-sm mb-3">{error.message}</p>
    <button
      onClick={() => window.location.reload()}
      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
    >
      Reload Page
    </button>
  </div>
);
