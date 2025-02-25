"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";

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
  mainPaddingTop: number;
  mainPaddingX: number;
  mainPaddingBottom: number;
}

interface Dimensions {
  header: { height: number };
  profileImage: { width: number | string; height: number | string };
}

interface BackgroundStyles {
  mainBackground: unknown; // Using unknown to accommodate MUI's sx prop
  backgroundPattern: unknown; // Using unknown to accommodate MUI's sx prop
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
  dimensions: Dimensions;

  // Background styles
  backgroundStyles: BackgroundStyles;

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
    mainPaddingTop: 48, // 6 in MUI spacing
    mainPaddingX: 16, // 2 in MUI spacing
    mainPaddingBottom: 48, // 6 in MUI spacing
  },
  sm: {
    containerPadding: 24,
    sectionSpacing: 48,
    elementSpacing: 24,
    mainPaddingTop: 64, // 8 in MUI spacing
    mainPaddingX: 24, // 3 in MUI spacing
    mainPaddingBottom: 48, // 6 in MUI spacing
  },
  md: {
    containerPadding: 32,
    sectionSpacing: 64,
    elementSpacing: 32,
    mainPaddingTop: 64, // 8 in MUI spacing
    mainPaddingX: 32, // 4 in MUI spacing
    mainPaddingBottom: 48, // 6 in MUI spacing
  },
  lg: {
    containerPadding: 40,
    sectionSpacing: 80,
    elementSpacing: 40,
    mainPaddingTop: 64, // 8 in MUI spacing
    mainPaddingX: 32, // 4 in MUI spacing
    mainPaddingBottom: 48, // 6 in MUI spacing
  },
  xl: {
    containerPadding: 48,
    sectionSpacing: 96,
    elementSpacing: 48,
    mainPaddingTop: 64, // 8 in MUI spacing
    mainPaddingX: 32, // 4 in MUI spacing
    mainPaddingBottom: 48, // 6 in MUI spacing
  },
};

// Define standard dimensions for components
const defaultDimensions: { [key in BreakPoint]: Dimensions } = {
  xs: {
    header: { height: 64 },
    profileImage: { width: 220, height: 220 },
  },
  sm: {
    header: { height: 72 },
    profileImage: { width: 240, height: 240 },
  },
  md: {
    header: { height: 80 },
    profileImage: { width: 280, height: 280 },
  },
  lg: {
    header: { height: 88 },
    profileImage: { width: 280, height: 280 },
  },
  xl: {
    header: { height: 96 },
    profileImage: { width: 300, height: 300 },
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

  // Background styles calculation
  const backgroundStyles = useMemo(() => {
    return {
      mainBackground: {
        background: `linear-gradient(to bottom, 
              ${alpha(theme.palette.background.default, 1)} 0%, 
              ${alpha(theme.palette.background.default, 0.98)} 100%)`,
        flexGrow: 1,
        width: "100%",
        minHeight: "100vh",
        pt: {
          xs: `${defaultDimensions.xs.header.height + 16}px`,
          sm: `${defaultDimensions.sm.header.height + 24}px`,
          md: `${defaultDimensions.md.header.height + 24}px`,
          lg: `${defaultDimensions.lg.header.height + 24}px`,
          xl: `${defaultDimensions.xl.header.height + 24}px`,
        },
        pb: 6,
        position: "relative",
        zIndex: 1,
        overflowX: "hidden",
      },
      backgroundPattern: {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage:
          theme.palette.mode === "dark"
            ? `radial-gradient(${alpha(
                theme.palette.primary.main,
                0.07
              )} 1px, transparent 1px)`
            : `radial-gradient(${alpha(
                theme.palette.primary.main,
                0.05
              )} 1px, transparent 1px)`,
        backgroundSize: "30px 30px",
        backgroundPosition: "0 0",
        opacity: 0.3,
        zIndex: -1,
        pointerEvents: "none",
      },
    };
  }, [
    theme.palette.mode,
    theme.palette.background.default,
    theme.palette.primary.main,
  ]);

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
      dimensions: defaultDimensions[currentBreakpoint],

      // Background styles
      backgroundStyles,

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
      backgroundStyles,
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
