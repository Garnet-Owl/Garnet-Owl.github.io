"use client";

import React, { useEffect, useState } from "react";
import { Box, Fade, CircularProgress, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    // Simulate page loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading screen */}
      <Fade in={isLoading} timeout={300} unmountOnExit>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme.palette.background.default,
            zIndex: 9999,
          }}
        >
          <CircularProgress
            size={60}
            thickness={4}
            sx={{
              color: theme.palette.primary.main,
              boxShadow: `0 0 20px ${alpha(theme.palette.primary.main, 0.3)}`,
              borderRadius: "50%",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "3px",
              bottom: 0,
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundImage:
                  theme.palette.mode === "dark"
                    ? `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
                    : `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                animation: "progress 1.5s linear infinite",
                "@keyframes progress": {
                  "0%": {
                    transform: "translateX(-100%)",
                  },
                  "100%": {
                    transform: "translateX(100%)",
                  },
                },
              }}
            />
          </Box>
        </Box>
      </Fade>

      {/* Page content with fade-in effect */}
      <Fade
        in={!isLoading}
        timeout={500}
        style={{ transitionDelay: !isLoading ? "300ms" : "0ms" }}
      >
        <Box>{children}</Box>
      </Fade>
    </>
  );
};

export default PageTransition;
