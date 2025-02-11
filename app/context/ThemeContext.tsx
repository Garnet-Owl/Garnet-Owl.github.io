"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  alpha,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Define custom colors for both themes
const darkTheme = {
  primaryMain: "#6F42C1",
  secondaryMain: "#7950F2",
  backgroundMain: "#0A0817",
  backgroundPaper: "#161130",
};

const lightTheme = {
  primaryMain: "#2196f3",
  secondaryMain: "#1976d2",
  backgroundMain: "#ffffff",
  backgroundPaper: "#f5f5f5",
};

type ThemeContextType = {
  toggleTheme: () => void;
  isDarkMode: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      return saved ? JSON.parse(saved) : true;
    }
    return true;
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleTheme = useCallback(() => {
    setIsDarkMode((prev: boolean): boolean => !prev);
  }, []);

  // Create theme based on current mode
  const theme = useMemo(() => {
    const colors = isDarkMode ? darkTheme : lightTheme;

    return createTheme({
      palette: {
        mode: isDarkMode ? "dark" : "light",
        primary: {
          main: colors.primaryMain,
          light: alpha(colors.primaryMain, 0.8),
          dark: alpha(colors.primaryMain, 1),
        },
        secondary: {
          main: colors.secondaryMain,
          light: alpha(colors.secondaryMain, 0.8),
          dark: alpha(colors.secondaryMain, 1),
        },
        background: {
          default: colors.backgroundMain,
          paper: colors.backgroundPaper,
        },
        text: {
          primary: isDarkMode ? "#fff" : "rgba(0, 0, 0, 0.87)",
          secondary: isDarkMode
            ? "rgba(255, 255, 255, 0.7)"
            : "rgba(0, 0, 0, 0.6)",
        },
      },
      typography: {
        fontFamily: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ].join(","),
        h1: {
          fontWeight: 700,
          fontSize: "3.5rem",
          lineHeight: 1.2,
        },
        h2: {
          fontWeight: 600,
          fontSize: "2.5rem",
          lineHeight: 1.3,
        },
        h3: {
          fontWeight: 600,
          fontSize: "2rem",
          lineHeight: 1.4,
        },
        h4: {
          fontWeight: 600,
          fontSize: "1.5rem",
          lineHeight: 1.4,
        },
        h5: {
          fontWeight: 500,
          fontSize: "1.25rem",
          lineHeight: 1.4,
        },
        h6: {
          fontWeight: 500,
          fontSize: "1rem",
          lineHeight: 1.4,
        },
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              textTransform: "none",
              borderRadius: 8,
              padding: "8px 16px",
            },
            containedPrimary: {
              "&:hover": {
                boxShadow: `0 8px 16px ${alpha(colors.primaryMain, 0.2)}`,
              },
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 12,
              boxShadow: `0 4px 12px ${alpha("#000", 0.05)}`,
            },
          },
        },
      },
    });
  }, [isDarkMode]);

  const contextValue = useMemo(
    () => ({ toggleTheme, isDarkMode }),
    [toggleTheme, isDarkMode]
  );

  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
