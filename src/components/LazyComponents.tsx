// Lazy loaded components for better performance
import { lazy } from "react";

// Lazy load pages with code splitting
export const HomePage = lazy(() => import("../pages/HomePage"));
export const ArmadaPage = lazy(() => import("../pages/ArmadaPage"));
export const LayananPage = lazy(() => import("../pages/LayananPage"));
export const AreaCakupanPage = lazy(() => import("../pages/AreaCakupanPage"));
export const KenapaKamiPage = lazy(() => import("../pages/KenapaKamiPage"));
export const FAQPage = lazy(() => import("../pages/FAQPage"));
export const KontakPage = lazy(() => import("../pages/KontakPage"));
export const NotFound = lazy(() => import("../pages/NotFound"));

// Lazy load components that are heavy or used infrequently
export const LazyNavbar = lazy(() => import("../components/Navbar"));
export const LazyFooter = lazy(() => import("../components/Footer"));
export const LazyWhatsAppFloat = lazy(
  () => import("../components/WhatsAppFloat")
);

// Preload critical components
export const preloadCriticalComponents = () => {
  // Preload HomePage for immediate navigation
  HomePage.preload?.();

  // Preload navigation components
  import("../components/Navbar");
  import("../components/Footer");
};

// Component loading wrapper with suspense
import React, { Suspense } from "react";
import { Loader2 } from "lucide-react";

interface ComponentWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
}

export const ComponentWrapper: React.FC<ComponentWrapperProps> = ({
  children,
  fallback = (
    <div className="flex items-center justify-center p-8">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  ),
  className = "",
}) => (
  <Suspense fallback={fallback}>
    <div className={className}>{children}</div>
  </Suspense>
);

// Page wrapper with consistent loading states
export const PageWrapper: React.FC<ComponentWrapperProps> = ({
  children,
  className = "",
}) => (
  <ComponentWrapper
    fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    }
    className={className}
  >
    {children}
  </ComponentWrapper>
);

// Route-based preload strategy
export const preloadRoutes = {
  "/": HomePage,
  "/armada": ArmadaPage,
  "/layanan": LayananPage,
  "/area-cakupan": AreaCakupanPage,
  "/kenapa-kami": KenapaKamiPage,
  "/faq": FAQPage,
  "/kontak": KontakPage,
} as const;

// Preload on hover/focus for better UX
export const preloadOnHover = (route: keyof typeof preloadRoutes) => {
  const Component = preloadRoutes[route];
  Component.preload?.();
};

// Intersection observer for prefetching routes
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const useRoutePrefetch = () => {
  const navigate = useNavigate();
  const prefetchRef = useRef<{ [key: string]: boolean }>({});

  const prefetchRoute = (route: string) => {
    if (!prefetchRef.current[route]) {
      const Component = preloadRoutes[route as keyof typeof preloadRoutes];
      Component.preload?.();
      prefetchRef.current[route] = true;
    }
  };

  // Prefetch routes based on user interaction
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const route = e.currentTarget.getAttribute("href");
    if (route && route.startsWith("/")) {
      prefetchRoute(route);
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLAnchorElement>) => {
    const route = e.currentTarget.getAttribute("href");
    if (route && route.startsWith("/")) {
      prefetchRoute(route);
    }
  };

  return { handleMouseEnter, handleFocus, prefetchRoute };
};
