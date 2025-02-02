"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import { useMediaQuery, useTheme } from "@mui/material";

type BreakPoint = "xs" | "sm" | "md" | "lg" | "xl";

interface FontSizes {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
  subtitle1: string;
  subtitle2: string;
  body1: string;
  body2: string;
  button: string;
  caption: string;
}

interface Spacing {
  containerPadding: number;
  sectionSpacing: number;
  elementSpacing: number;
}

type ResponsiveContextType = {
  // Screen size indicators
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLargeDesktop: boolean;

  // Current breakpoint
  currentBreakpoint: BreakPoint;

  // Dynamic values
  fontSize: FontSizes;
  spacing: Spacing;

  // Screen dimensions
  screenWidth: number;
  screenHeight: number;

  // Utility functions
  getResponsiveValue: <T>(
    values: { [key in BreakPoint]?: T },
    defaultValue: T
  ) => T;
};

const defaultFontSizes: { [key in BreakPoint]: FontSizes } = {
  xs: {
    h1: "2rem", // 32px
    h2: "1.75rem", // 28px
    h3: "1.5rem", // 24px
    h4: "1.25rem", // 20px
    h5: "1.1rem", // 17.6px
    h6: "1rem", // 16px
    subtitle1: "1rem",
    subtitle2: "0.875rem",
    body1: "0.875rem",
    body2: "0.8125rem",
    button: "0.875rem",
    caption: "0.75rem",
  },
  sm: {
    h1: "2.5rem", // 40px
    h2: "2rem", // 32px
    h3: "1.75rem", // 28px
    h4: "1.5rem", // 24px
    h5: "1.25rem", // 20px
    h6: "1.1rem", // 17.6px
    subtitle1: "1.1rem",
    subtitle2: "0.9375rem",
    body1: "0.9375rem",
    body2: "0.875rem",
    button: "0.9375rem",
    caption: "0.8125rem",
  },
  md: {
    h1: "3rem", // 48px
    h2: "2.5rem", // 40px
    h3: "2rem", // 32px
    h4: "1.75rem", // 28px
    h5: "1.5rem", // 24px
    h6: "1.25rem", // 20px
    subtitle1: "1.25rem",
    subtitle2: "1rem",
    body1: "1rem",
    body2: "0.9375rem",
    button: "1rem",
    caption: "0.875rem",
  },
  lg: {
    h1: "3.5rem", // 56px
    h2: "3rem", // 48px
    h3: "2.5rem", // 40px
    h4: "2rem", // 32px
    h5: "1.75rem", // 28px
    h6: "1.5rem", // 24px
    subtitle1: "1.5rem",
    subtitle2: "1.25rem",
    body1: "1.125rem",
    body2: "1rem",
    button: "1.125rem",
    caption: "1rem",
  },
  xl: {
    h1: "4rem", // 64px
    h2: "3.5rem", // 56px
    h3: "3rem", // 48px
    h4: "2.5rem", // 40px
    h5: "2rem", // 32px
    h6: "1.75rem", // 28px
    subtitle1: "1.75rem",
    subtitle2: "1.5rem",
    body1: "1.25rem",
    body2: "1.125rem",
    button: "1.25rem",
    caption: "1.125rem",
  },
};

const defaultSpacing: { [key in BreakPoint]: Spacing } = {
  xs: {
    containerPadding: 16,
    sectionSpacing: 32,
    elementSpacing: 16,
  },
  sm: {
    containerPadding: 24,
    sectionSpacing: 48,
    elementSpacing: 24,
  },
  md: {
    containerPadding: 32,
    sectionSpacing: 64,
    elementSpacing: 32,
  },
  lg: {
    containerPadding: 40,
    sectionSpacing: 80,
    elementSpacing: 40,
  },
  xl: {
    containerPadding: 48,
    sectionSpacing: 96,
    elementSpacing: 48,
  },
};

const ResponsiveContext = createContext<ResponsiveContextType | undefined>(
  undefined
);

export const ResponsiveProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const theme = useTheme();

  // Screen size checks
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl"));
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));

  // Simplified breakpoint indicators
  const isMobile = isXs;
  const isTablet = isSm;
  const isDesktop = isMd || isLg;
  const isLargeDesktop = isXl;

  // Get current breakpoint
  const currentBreakpoint = useMemo((): BreakPoint => {
    if (isXl) return "xl";
    if (isLg) return "lg";
    if (isMd) return "md";
    if (isSm) return "sm";
    return "xs";
  }, [isXl, isLg, isMd, isSm]);

  // Screen dimensions
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const value = useMemo(
    () => ({
      // Screen size indicators
      isMobile,
      isTablet,
      isDesktop,
      isLargeDesktop,

      // Current breakpoint
      currentBreakpoint,

      // Dynamic values
      fontSize: defaultFontSizes[currentBreakpoint],
      spacing: defaultSpacing[currentBreakpoint],

      // Screen dimensions
      screenWidth: dimensions.width,
      screenHeight: dimensions.height,

      // Utility functions
      getResponsiveValue: <T,>(
        values: { [key in BreakPoint]?: T },
        defaultValue: T
      ): T => {
        return values[currentBreakpoint] ?? defaultValue;
      },
    }),
    [
      isMobile,
      isTablet,
      isDesktop,
      isLargeDesktop,
      currentBreakpoint,
      dimensions.width,
      dimensions.height,
    ]
  );

  return (
    <ResponsiveContext.Provider value={value}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export const useResponsive = () => {
  const context = useContext(ResponsiveContext);
  if (context === undefined) {
    throw new Error("useResponsive must be used within a ResponsiveProvider");
  }
  return context;
};
