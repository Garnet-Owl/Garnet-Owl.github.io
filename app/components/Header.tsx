"use client";

import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { useTheme } from "../context/ThemeContext";
import {
  Brightness7 as LightModeIcon,
  Brightness4 as DarkModeIcon,
} from "@mui/icons-material";
import { alpha } from "@mui/material/styles";

const Header = () => {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <AppBar
      position="fixed"
      sx={{
        background: (theme) => alpha(theme.palette.background.default, 0.8),
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid",
        borderColor: "divider",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo/Brand */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
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
