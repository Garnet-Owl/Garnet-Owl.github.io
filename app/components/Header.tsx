"use client";

import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { useTheme } from "../context/ThemeContext";
import { useResponsive } from "../context/ResponsiveContext";
import {
  Brightness7 as LightModeIcon,
  Brightness4 as DarkModeIcon,
} from "@mui/icons-material";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";

const Header = () => {
  const { toggleTheme, isDarkMode } = useTheme();
  const { fontSize, spacing, getResponsiveValue } = useResponsive();

  return (
    <AppBar
      position="fixed"
      sx={{
        background: (theme) => alpha(theme.palette.background.default, 0.8),
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid",
        borderColor: "divider",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          minHeight: getResponsiveValue(
            {
              xs: 56,
              sm: 64,
              md: 72,
              lg: 80,
              xl: 88,
            },
            64
          ),
          px: getResponsiveValue(
            {
              xs: spacing.containerPadding,
              sm: spacing.containerPadding,
              md: spacing.containerPadding,
              lg: spacing.containerPadding,
              xl: spacing.containerPadding,
            },
            spacing.containerPadding
          ),
        }}
      >
        {/* Logo/Brand */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: fontSize.h6,
            background: isDarkMode
              ? "linear-gradient(45deg, #6F42C1, #7950F2)"
              : "linear-gradient(45deg, #2196f3, #1976d2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "0.02em",
          }}
        >
          James Wanjiku
        </Typography>

        {/* Theme Toggle */}
        <IconButton
          onClick={toggleTheme}
          sx={{
            color: "text.primary",
            transition: "transform 0.2s ease-in-out",
            padding: getResponsiveValue(
              {
                xs: "8px",
                sm: "10px",
                md: "12px",
                lg: "14px",
                xl: "16px",
              },
              "12px"
            ),
            "&:hover": {
              transform: "scale(1.1)",
              backgroundColor: (theme) =>
                alpha(theme.palette.primary.main, 0.1),
            },
          }}
          aria-label="Toggle theme"
        >
          <Box
            sx={{
              width: getResponsiveValue(
                {
                  xs: 20,
                  sm: 22,
                  md: 24,
                  lg: 26,
                  xl: 28,
                },
                24
              ),
              height: "auto",
            }}
          >
            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </Box>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
