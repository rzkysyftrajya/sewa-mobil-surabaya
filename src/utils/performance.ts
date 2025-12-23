import { useState, useEffect, useCallback } from "react";

// Image optimization utilities
export const createImageObserver = (
  callback: (entry: IntersectionObserverEntry) => void,
  options?: IntersectionObserverInit
) => {
  const defaultOptions: IntersectionObserverInit = {
    rootMargin: "50px 0px",
    threshold: 0.1,
    ...options,
  };

  return new IntersectionObserver((entries) => {
    entries.forEach(callback);
  }, defaultOptions);
};

// Lazy loading hook for images
export const useLazyImage = (
  src: string,
  options?: IntersectionObserverInit
) => {
  const [imageSrc, setImageSrc] = useState<string>("");
  const { setElementRef, inView } = useIntersectionObserver();

  useEffect(() => {
    if (inView && src) {
      setImageSrc(src);
    }
  }, [inView, src]);

  return { imageRef: setElementRef, imageSrc };
};

// Intersection Observer hook
export const useIntersectionObserver = (options?: IntersectionObserverInit) => {
  const [inView, setInView] = useState(false);
  const [elementRef, setElementRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!elementRef) return;

    const observer = createImageObserver((entry) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(elementRef);
      }
    }, options);

    observer.observe(elementRef);

    return () => {
      observer.disconnect();
    };
  }, [elementRef, options]);

  return { setElementRef, inView };
};

// Debounced scroll handler
export const useScrollPosition = (threshold: number = 100) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

  const updateScrollY = useCallback(() => {
    const currentScrollY = window.pageYOffset;
    const direction = currentScrollY > scrollY ? "down" : "up";

    setScrollY(currentScrollY);
    setScrollDirection(direction);
  }, [scrollY]);

  const throttledUpdate = useCallback(
    () => throttle(updateScrollY, 16),
    [updateScrollY]
  );

  useEffect(() => {
    window.addEventListener("scroll", throttledUpdate, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledUpdate);
    };
  }, [throttledUpdate]);

  return { scrollY, scrollDirection };
};

// Throttle function for performance
export const throttle = (func: () => void, limit: number) => {
  let inThrottle: boolean;
  return () => {
    if (!inThrottle) {
      func();
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Performance monitoring
export const measurePerformance = (
  name: string,
  fn: () => void | Promise<void>
) => {
  const start = performance.now();
  const result = fn();

  if (result instanceof Promise) {
    return result.finally(() => {
      const end = performance.now();
      console.log(`${name} took ${end - start} milliseconds`);
    });
  }

  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
  return result;
};

// Core Web Vitals tracking - DISABLED FOR GOOGLE ADS COMPLIANCE
export const trackCoreWebVitals = () => {
  // Performance tracking disabled to avoid Google Ads compliance issues
  console.log("Core Web Vitals tracking disabled for Google Ads compliance");
};

// Image preloading
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Critical resource hints
export const addResourceHints = () => {
  const links = [
    { rel: "dns-prefetch", href: "//fonts.googleapis.com" },
    { rel: "dns-prefetch", href: "//fonts.gstatic.com" },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true },
  ];

  links.forEach(({ rel, href, crossorigin }) => {
    const link = document.createElement("link");
    link.rel = rel;
    link.href = href;
    if (crossorigin) link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  });
};

// Service Worker registration - DISABLED FOR GOOGLE ADS COMPLIANCE
export const registerServiceWorker = async () => {
  // Service Worker registration disabled to avoid Google Ads compliance issues
  console.log("Service Worker registration disabled for Google Ads compliance");
};

// Memory usage tracking
export const getMemoryUsage = () => {
  if ("memory" in performance && performance.memory) {
    const memory = performance.memory as {
      usedJSHeapSize: number;
      totalJSHeapSize: number;
      jsHeapSizeLimit: number;
    };
    return {
      used: Math.round(memory.usedJSHeapSize / 1048576),
      total: Math.round(memory.totalJSHeapSize / 1048576),
      limit: Math.round(memory.jsHeapSizeLimit / 1048576),
    };
  }
  return null;
};

// Performance budget checker
export const checkPerformanceBudget = () => {
  const navigation = performance.getEntriesByType(
    "navigation"
  )[0] as PerformanceNavigationTiming;

  const budgets = {
    TTFB: 600, // Time to First Byte
    DOMContentLoaded: 1500,
    Load: 2500,
  };

  const results = {
    TTFB: navigation.responseStart - navigation.requestStart,
    DOMContentLoaded:
      navigation.domContentLoadedEventEnd - navigation.startTime,
    Load: navigation.loadEventEnd - navigation.startTime,
  };

  Object.entries(results).forEach(([metric, value]) => {
    const budget = budgets[metric as keyof typeof budgets];
    if (typeof budget === "number" && value > budget) {
      console.warn(
        `Performance budget exceeded: ${metric} took ${value}ms, budget is ${budget}ms`
      );
    }
  });

  return results;
};
