import { createTheme, alpha } from "@mui/material/styles";

// Define custom colors
const primaryMain = "#6F42C1"; // Deep purple primary
const secondaryMain = "#7950F2"; // Lighter purple accent
const darkBackgroundMain = "#0A0817"; // Very dark purple-black
const darkBackgroundPaper = "#161130"; // Slightly lighter dark purple

// Create theme instance
const theme = createTheme({
  // Color palette
  palette: {
    primary: {
      main: primaryMain,
      light: alpha(primaryMain, 0.8),
      dark: alpha(primaryMain, 1.2),
    },
    secondary: {
      main: secondaryMain,
      light: alpha(secondaryMain, 0.8),
      dark: alpha(secondaryMain, 1.2),
    },
    background: {
      default: darkBackgroundMain,
      paper: darkBackgroundPaper,
    },
    text: {
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
    mode: "dark",
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
            boxShadow: `0 8px 16px ${alpha(primaryMain, 0.2)}`,
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

export default theme;
