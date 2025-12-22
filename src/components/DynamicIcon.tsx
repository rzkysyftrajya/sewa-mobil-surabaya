import React, { useMemo } from "react";

// Dynamic icon loader to reduce bundle size
interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size?: number | string;
  className?: string;
}

// Cache for loaded icons
const iconCache = new Map<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
>();

// Icon imports mapping
const iconImports = {
  ArrowRight: () => import("lucide-react").then((mod) => mod.ArrowRight),
  Car: () => import("lucide-react").then((mod) => mod.Car),
  Star: () => import("lucide-react").then((mod) => mod.Star),
  Users: () => import("lucide-react").then((mod) => mod.Users),
  Clock: () => import("lucide-react").then((mod) => mod.Clock),
  Shield: () => import("lucide-react").then((mod) => mod.Shield),
  Phone: () => import("lucide-react").then((mod) => mod.Phone),
  MapPin: () => import("lucide-react").then((mod) => mod.MapPin),
  CheckCircle: () => import("lucide-react").then((mod) => mod.CheckCircle),
  Award: () => import("lucide-react").then((mod) => mod.Award),
  Heart: () => import("lucide-react").then((mod) => mod.Heart),
  Zap: () => import("lucide-react").then((mod) => mod.Zap),
  PhoneCall: () => import("lucide-react").then((mod) => mod.PhoneCall),
  ChevronLeft: () => import("lucide-react").then((mod) => mod.ChevronLeft),
  ChevronRight: () => import("lucide-react").then((mod) => mod.ChevronRight),
  Play: () => import("lucide-react").then((mod) => mod.Play),
  Pause: () => import("lucide-react").then((mod) => mod.Pause),
  MessageCircle: () => import("lucide-react").then((mod) => mod.MessageCircle),
  Briefcase: () => import("lucide-react").then((mod) => mod.Briefcase),
  Quote: () => import("lucide-react").then((mod) => mod.Quote),
  Plane: () => import("lucide-react").then((mod) => mod.Plane),
  Calendar: () => import("lucide-react").then((mod) => mod.Calendar),
  TrendingUp: () => import("lucide-react").then((mod) => mod.TrendingUp),
  Key: () => import("lucide-react").then((mod) => mod.Key),
};

// Dynamic icon component
export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className = "",
  ...props
}) => {
  const IconComponent = useMemo(() => {
    if (iconCache.has(name)) {
      return iconCache.get(name)!;
    }

    const importFn = iconImports[name as keyof typeof iconImports];

    if (!importFn) {
      console.warn(`Icon "${name}" not found`);
      return () => null;
    }

    const Component = React.lazy(importFn);
    iconCache.set(name, Component);
    return Component;
  }, [name]);

  return (
    <React.Suspense
      fallback={
        <svg width={size} height={size} className={className} {...props}>
          <rect width={size} height={size} fill="currentColor" opacity="0.1" />
        </svg>
      }
    >
      <IconComponent size={size} className={className} {...props} />
    </React.Suspense>
  );
};

// Preload critical icons
export const preloadIcons = (iconNames: string[]) => {
  iconNames.forEach((name) => {
    const importFn = iconImports[name as keyof typeof iconImports];
    if (importFn && !iconCache.has(name)) {
      importFn().then((Component) => {
        iconCache.set(name, Component);
      });
    }
  });
};

// Common icon presets for better performance
export const iconPresets = {
  // Hero section icons
  hero: ["Award", "MapPin", "Phone"],

  // Service section icons
  services: ["Car", "Users", "MapPin", "Briefcase", "Heart"],

  // Feature icons
  features: ["Clock", "Shield", "Heart"],

  // Action icons
  actions: ["Phone", "ArrowRight", "Play", "CheckCircle"],

  // Stats icons
  stats: ["Users", "Car", "Calendar", "Award"],

  // Testimonial icons
  testimonials: ["Star", "Quote"],

  // Process icons
  process: ["MessageCircle", "Car", "CheckCircle", "Star"],

  // Footer icons
  footer: ["Phone", "MapPin", "Clock", "Heart"],
} as const;

// Optimized icon component with presets
export const OptimizedIcon: React.FC<
  Omit<IconProps, "name"> & { preset: keyof typeof iconPresets }
> = ({ preset, ...props }) => {
  const icons = iconPresets[preset];
  return <Icon name={icons[0]} {...props} />;
};

// Icon wrapper for better tree-shaking
export const createIconComponent = (iconName: keyof typeof iconImports) => {
  return React.memo((props: Omit<IconProps, "name">) => (
    <Icon name={iconName} {...props} />
  ));
};
