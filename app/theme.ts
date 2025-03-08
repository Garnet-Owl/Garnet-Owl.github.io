import { createTheme, alpha } from "@mui/material/styles";

export const darkTheme = {
  primaryMain: "#6F42C1", // Deep purple primary
  secondaryMain: "#7950F2", // Lighter purple accent
  backgroundMain: "#0A0817", // Very dark purple-black
  backgroundPaper: "#161130", // Slightly lighter dark purple
  accent1: "#FF5E5B", // Soft coral accent
  accent2: "#00C896", // Teal accent
};

export const lightTheme = {
  primaryMain: "#2196f3", // Blue primary
  secondaryMain: "#1976d2", // Darker blue accent
  backgroundMain: "#f3f4f6", // Light gray background (updated)
  backgroundPaper: "#ffffff", // White paper
  accent1: "#FF5E5B", // Soft coral accent
  accent2: "#00C896", // Teal accent
};

const typography = {
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
    letterSpacing: "-0.01em",
    "@media (min-width:600px)": { fontSize: "3rem" },
  },
  h2: {
    fontWeight: 600,
    fontSize: "2rem",
    lineHeight: 1.3,
    letterSpacing: "-0.005em",
    "@media (min-width:600px)": { fontSize: "2.25rem" },
  },
  h3: {
    fontWeight: 600,
    fontSize: "1.75rem",
    lineHeight: 1.4,
    letterSpacing: "0",
    "@media (min-width:600px)": { fontSize: "1.875rem" },
  },
  h4: {
    fontWeight: 600,
    fontSize: "1.25rem",
    lineHeight: 1.4,
    letterSpacing: "0.005em",
  },
  h5: {
    fontWeight: 500,
    fontSize: "1rem",
    lineHeight: 1.4,
    letterSpacing: "0.005em",
  },
  h6: {
    fontWeight: 500,
    fontSize: "0.875rem",
    lineHeight: 1.4,
    letterSpacing: "0.01em",
  },
  body1: { fontSize: "1rem", lineHeight: 1.5, letterSpacing: "0.002em" },
  body2: { fontSize: "0.875rem", lineHeight: 1.5, letterSpacing: "0.002em" },
  button: { fontWeight: 500, letterSpacing: "0.01em" },
  caption: { fontSize: "0.75rem", letterSpacing: "0.02em" },
  subtitle1: { fontSize: "1rem", fontWeight: 500, letterSpacing: "0.005em" },
  subtitle2: {
    fontSize: "0.875rem",
    fontWeight: 500,
    letterSpacing: "0.005em",
  },
};

// Function to create a theme based on mode
export const createAppTheme = (mode: "light" | "dark") => {
  const colors = mode === "dark" ? darkTheme : lightTheme;

  return createTheme({
    palette: {
      mode,
      primary: {
        main: colors.primaryMain,
        light: alpha(colors.primaryMain, 0.8),
        dark: alpha(colors.primaryMain, 1.0),
      },
      secondary: {
        main: colors.secondaryMain,
        light: alpha(colors.secondaryMain, 0.8),
        dark: alpha(colors.secondaryMain, 1.0),
      },
      background: {
        default: colors.backgroundMain,
        paper: colors.backgroundPaper,
      },
      text: {
        primary: mode === "dark" ? "#fff" : "rgba(0, 0, 0, 0.87)",
        secondary:
          mode === "dark" ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.6)",
      },
      error: { main: "#f44336" },
      warning: { main: "#ff9800" },
      info: { main: colors.secondaryMain },
      success: { main: colors.accent2 },
    },
    typography,
    shape: { borderRadius: 12 },
    components: getComponentOverrides(mode, colors),
  });
};

// Component overrides extracted to separate function
function getComponentOverrides(
  mode: "light" | "dark",
  colors: typeof darkTheme
) {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: "smooth",
          transition: "background-color 0.3s ease",
          backgroundColor: colors.backgroundMain,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: colors.backgroundMain,
          boxShadow: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          padding: "8px 16px",
          transition: "all 0.3s ease",
          fontWeight: 500,
          variants: [],
        },
        contained: {
          boxShadow:
            mode === "dark"
              ? `0 4px 14px ${alpha(colors.primaryMain, 0.4)}`
              : `0 4px 14px ${alpha(colors.primaryMain, 0.2)}`,
          "&:hover": {
            boxShadow:
              mode === "dark"
                ? `0 6px 20px ${alpha(colors.primaryMain, 0.6)}`
                : `0 6px 20px ${alpha(colors.primaryMain, 0.3)}`,
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow:
            mode === "dark"
              ? `0 8px 32px -4px ${alpha("#000", 0.3)}`
              : `0 8px 32px -4px ${alpha("#000", 0.1)}`,
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow:
              mode === "dark"
                ? `0 12px 40px -4px ${alpha("#000", 0.4)}`
                : `0 12px 40px -4px ${alpha("#000", 0.15)}`,
          },
        },
      },
    },
  };
}

const defaultTheme = createAppTheme("dark");
export default defaultTheme;
