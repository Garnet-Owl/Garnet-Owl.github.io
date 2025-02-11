"use client";

import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { useTheme } from "../context/ThemeContext";
import { useResponsive } from "../context/ResponsiveContext";
import {
  WbSunny as SunIcon,
  NightsStay as MoonIcon,
} from "@mui/icons-material";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";

const Header = () => {
  const { toggleTheme, isDarkMode } = useTheme();
  const { fontSize, spacing, getResponsiveValue } = useResponsive();

  const headerHeight = getResponsiveValue(
    {
      xs: 64,
      sm: 72,
      md: 80,
      lg: 88,
      xl: 96,
    },
    72
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        background: (theme) => theme.palette.background.default,
        borderBottom: "1px solid",
        borderColor: "divider",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        top: 0,
        left: 0,
        right: 0,
        height: headerHeight,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          minHeight: getResponsiveValue(
            {
              xs: 64,
              sm: 72,
              md: 80,
              lg: 88,
              xl: 96,
            },
            72
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
          variant="h5"
          sx={{
            fontWeight: 700,
            fontSize: getResponsiveValue(
              {
                xs: fontSize.h6,
                sm: fontSize.h5,
                md: fontSize.h5,
                lg: fontSize.h4,
                xl: fontSize.h4,
              },
              fontSize.h5
            ),
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
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </Box>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
