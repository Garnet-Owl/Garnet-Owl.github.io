"use client";

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  useTheme,
  Container,
} from "@mui/material";
import { useTheme as useAppTheme } from "../context/ThemeContext";
import { useResponsive } from "../context/ResponsiveContext";
import {
  WbSunny as SunIcon,
  NightsStay as MoonIcon,
  GitHub,
  LinkedIn,
} from "@mui/icons-material";
import { alpha } from "@mui/material/styles";

const Header = () => {
  const { toggleTheme, isDarkMode } = useAppTheme();
  const { fontSize, dimensions } = useResponsive();
  const theme = useTheme();

  const [hasScrolled, setHasScrolled] = useState(false);

  // Check if page has been scrolled
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Get background color based on theme mode
  const bgColor = isDarkMode ? "#0A0817" : "#f3f4f6";

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: bgColor,
        borderBottom: "1px solid",
        borderColor: alpha(theme.palette.divider, hasScrolled ? 0.2 : 0.1),
        transition: "all 0.3s ease",
        zIndex: theme.zIndex.drawer + 1,
        top: 0,
        left: 0,
        right: 0,
        height: dimensions.header.height,
        boxShadow: (() => {
          if (!hasScrolled) return "none";
          return theme.palette.mode === "dark"
            ? `0 4px 20px -5px ${alpha("#000", 0.4)}`
            : `0 4px 20px -5px ${alpha("#000", 0.1)}`;
        })(),
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            minHeight: dimensions.header.height,
          }}
        >
          {/* Logo/Brand */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              fontSize: { xs: fontSize.h6, sm: fontSize.h5, md: fontSize.h4 },
              background:
                theme.palette.mode === "dark"
                  ? "linear-gradient(45deg, #6F42C1, #7950F2)"
                  : "linear-gradient(45deg, #2196f3, #1976d2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "0.02em",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-1px)",
                filter: "brightness(1.1)",
              },
            }}
          >
            James Wanjiku
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {/* Social Links */}
            <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1, mr: 2 }}>
              <IconButton
                href="https://github.com/Garnet-Owl"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  color: "text.secondary",
                  "&:hover": {
                    color: "text.primary",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <GitHub fontSize="small" />
              </IconButton>
              <IconButton
                href="https://linkedin.com/in/james-wanjiku"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  color: "text.secondary",
                  "&:hover": {
                    color: "text.primary",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <LinkedIn fontSize="small" />
              </IconButton>
            </Box>

            {/* Theme Toggle */}
            <IconButton
              onClick={toggleTheme}
              size="small"
              sx={{
                color: "text.primary",
                transition: "all 0.3s ease",
                ml: 1,
                bgcolor: alpha(theme.palette.primary.main, 0.08),
                "&:hover": {
                  transform: "scale(1.1) rotate(5deg)",
                  bgcolor: alpha(theme.palette.primary.main, 0.15),
                },
                height: { xs: 36, md: 40 },
                width: { xs: 36, md: 40 },
              }}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <SunIcon sx={{ fontSize: { xs: 20, md: 22 } }} />
              ) : (
                <MoonIcon sx={{ fontSize: { xs: 20, md: 22 } }} />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
