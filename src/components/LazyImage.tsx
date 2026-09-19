import React, { useState, useRef, useEffect } from "react";
import { useIntersectionObserver } from "../utils/performance";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = "",
  placeholder,
  priority = false,
  quality = 85,
  sizes,
  onLoad,
  onError,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState("");
  const imgRef = useRef<HTMLImageElement>(null);
  const { setElementRef, inView } = useIntersectionObserver({
    rootMargin: "100px 0px", // Start loading 100px before entering viewport
    threshold: 0.1,
  });

  // Preload priority images
  useEffect(() => {
    if (priority && src) {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      document.head.appendChild(link);

      return () => {
        document.head.removeChild(link);
      };
    }
  }, [src, priority]);

  // Handle image loading
  useEffect(() => {
    if ((inView || priority) && src && !currentSrc) {
      setCurrentSrc(src);
    }
  }, [inView, priority, src, currentSrc]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setIsError(true);
    onError?.();
  };

  // Generate WebP/AVIF URLs if supported
  const generateOptimizedSrc = (originalSrc: string) => {
    if (!originalSrc) return originalSrc;

    // For now, just return the original src
    // In a real implementation, you'd have a CDN that serves WebP/AVIF
    return originalSrc;
  };

  const optimizedSrc = generateOptimizedSrc(currentSrc);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      {!isLoaded && !isError && (
        <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50 animate-pulse" />
      )}

      {/* Error state */}
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground">
          <span className="text-sm">Failed to load image</span>
        </div>
      )}

      {/* Actual image */}
      {optimizedSrc && (
        <img
          ref={(node) => {
            imgRef.current = node;
            setElementRef(node);
          }}
          src={optimizedSrc}
          alt={alt}
          className={`transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } ${className}`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          sizes={sizes}
          {...props}
        />
      )}

      {/* Loading overlay */}
      {!isLoaded && !isError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

// Optimized Image Component with srcSet support
export const ResponsiveImage: React.FC<
  LazyImageProps & {
    srcSet?: { [key: string]: string };
  }
> = ({ srcSet, sizes = "100vw", ...props }) => {
  const srcSetString = srcSet
    ? Object.entries(srcSet)
        .map(([size, url]) => `${url} ${size}`)
        .join(", ")
    : undefined;

  return <LazyImage {...props} srcSet={srcSetString} sizes={sizes} />;
};

// Performance monitoring for images
export const trackImagePerformance = (img: HTMLImageElement) => {
  if ("performance" in window) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name === img.src) {
          // Image loaded successfully
        }
      });
    });

    observer.observe({ entryTypes: ["resource"] });
  }
};
