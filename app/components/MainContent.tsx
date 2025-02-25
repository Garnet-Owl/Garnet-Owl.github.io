"use client";

import React from "react";
import { Box, Container, useTheme } from "@mui/material";
import { useResponsive } from "../context/ResponsiveContext";
import { alpha } from "@mui/material/styles";

interface MainContentProps {
  children: React.ReactNode;
  sx?: any; // Allow additional styling props
}

const MainContent: React.FC<MainContentProps> = ({ children, sx = {} }) => {
  const { spacing, dimensions } = useResponsive();
  const theme = useTheme();

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        width: "100%",
        minHeight: "100vh",
        pt: { xs: `${dimensions.header.height + 16}px`, sm: `${dimensions.header.height + 24}px` }, // Adjusted for header height
        px: 0,
        pb: 6,
        position: "relative",
        zIndex: 1,
        overflowX: "hidden",
        background:
          theme.palette.mode === "dark"
            ? `linear-gradient(to bottom, 
              ${alpha(theme.palette.background.default, 1)} 0%, 
              ${alpha(theme.palette.background.default, 0.98)} 100%)`
            : `linear-gradient(to bottom, 
              ${alpha(theme.palette.background.default, 1)} 0%, 
              ${alpha(theme.palette.background.default, 0.98)} 100%)`,
        // Global background pattern
        "&::before": {
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
        ...sx, // Apply additional styles
      }}
    >
      {children}
    </Box>
  );
};

export default MainContent;
