"use client";

import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { useTheme } from "../context/ThemeContext";
import { useResponsive } from "../context/ResponsiveContext";
import {
  Brightness7 as LightModeIcon,
  Brightness4 as DarkModeIcon,
} from "@mui/icons-material";
import { alpha } from "@mui/material/styles";

const Header = () => {
  const { toggleTheme, isDarkMode } = useTheme();
  const { isMobile } = useResponsive();

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
          minHeight: { xs: "56px", sm: "64px" }, // Responsive height
          px: { xs: 2, sm: 3, md: 4 }, // Responsive padding
        }}
      >
        {/* Logo/Brand */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: isMobile ? "1.1rem" : "1.25rem",
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
            padding: isMobile ? "8px" : "12px",
            "&:hover": {
              transform: "scale(1.1)",
              backgroundColor: (theme) =>
                alpha(theme.palette.primary.main, 0.1),
            },
          }}
          aria-label="Toggle theme"
        >
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
