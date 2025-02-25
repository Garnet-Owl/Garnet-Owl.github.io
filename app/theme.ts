import { createTheme, alpha } from "@mui/material/styles";

// Define custom colors for both themes
export const darkTheme = {
  primaryMain: "#6F42C1", // Deep purple primary
  secondaryMain: "#7950F2", // Lighter purple accent
  backgroundMain: "#0A0817", // Very dark purple-black
  backgroundPaper: "#161130", // Slightly lighter dark purple
};

export const lightTheme = {
  primaryMain: "#2196f3", // Blue primary
  secondaryMain: "#1976d2", // Darker blue accent
  backgroundMain: "#ffffff", // White background
  backgroundPaper: "#f5f5f5", // Light gray paper
};

// Function to create a theme based on mode
export const createAppTheme = (mode: 'light' | 'dark') => {
  const colors = mode === 'dark' ? darkTheme : lightTheme;
  
  return createTheme({
    // Color palette
    palette: {
      mode,
      primary: {
        main: colors.primaryMain,
        light: alpha(colors.primaryMain, 0.8),
        dark: alpha(colors.primaryMain, 1.2),
      },
      secondary: {
        main: colors.secondaryMain,
        light: alpha(colors.secondaryMain, 0.8),
        dark: alpha(colors.secondaryMain, 1.2),
      },
      background: {
        default: colors.backgroundMain,
        paper: colors.backgroundPaper,
      },
      text: {
        primary: mode === 'dark' ? "#fff" : "rgba(0, 0, 0, 0.87)",
        secondary: mode === 'dark' ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.6)",
      },
    },

    // Typography settings
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
        fontSize: "2.5rem",
        lineHeight: 1.2,
        "@media (min-width:600px)": {
          fontSize: "3rem",
        },
      },
      h2: {
        fontWeight: 600,
        fontSize: "2rem",
        lineHeight: 1.3,
        "@media (min-width:600px)": {
          fontSize: "2.25rem",
        },
      },
      h3: {
        fontWeight: 600,
        fontSize: "1.75rem",
        lineHeight: 1.4,
        "@media (min-width:600px)": {
          fontSize: "1.875rem",
        },
      },
      h4: {
        fontWeight: 600,
        fontSize: "1.25rem",
        lineHeight: 1.4,
      },
      h5: {
        fontWeight: 500,
        fontSize: "1rem",
        lineHeight: 1.4,
      },
      h6: {
        fontWeight: 500,
        fontSize: "0.875rem",
        lineHeight: 1.4,
      },
      body1: {
        fontSize: "1rem",
        lineHeight: 1.5,
      },
      body2: {
        fontSize: "0.875rem",
        lineHeight: 1.5,
      },
    },

    // Component overrides
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
      MuiContainer: {
        styleOverrides: {
          root: {
            paddingLeft: 24,
            paddingRight: 24,
          },
        },
      },
    },

    // Shape settings
    shape: {
      borderRadius: 8,
    },
  });
};

// Default theme (dark mode)
const defaultTheme = createAppTheme('dark');
export default defaultTheme;