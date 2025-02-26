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
  Button,
} from "@mui/material";
import { useTheme as useAppTheme } from "../context/ThemeContext";
import { useResponsive } from "../context/ResponsiveContext";
import {
  WbSunny as SunIcon,
  NightsStay as MoonIcon,
  GitHub,
  LinkedIn,
  Home as HomeIcon,
} from "@mui/icons-material";
import { alpha } from "@mui/material/styles";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const { toggleTheme, isDarkMode } = useAppTheme();
  const { fontSize, dimensions, isMobile, isTablet, isDesktop } =
    useResponsive();
  const theme = useTheme();
  const pathname = usePathname();

  const [hasScrolled, setHasScrolled] = useState(false);

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
      <Container
        maxWidth="lg"
        sx={{
          px: (() => {
            if (isMobile) return 0.5;
            if (isTablet) return 1;
            return 2;
          })(),
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            minHeight: dimensions.header.height,
          }}
        >
          {/* Logo/Brand with Home Icon */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& .MuiIconButton-root": {
                padding: isMobile ? "6px" : "8px",
                mr: isMobile ? 0.5 : 1,
              },
            }}
          >
            <IconButton
              component={Link}
              href="/"
              aria-label="Home"
              sx={{
                color: "text.primary",
                "&:hover": {
                  transform: "translateY(-2px)",
                },
              }}
            >
              <HomeIcon />
            </IconButton>

            <Typography
              variant="h5"
              component={Link}
              href="/"
              sx={{
                fontWeight: 700,
                fontSize: (() => {
                  if (isMobile) return "1rem";
                  if (isTablet) return fontSize.h6;
                  if (isDesktop) return fontSize.h5;
                  return fontSize.h4;
                })(),
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(45deg, #6F42C1, #7950F2)"
                    : "linear-gradient(45deg, #2196f3, #1976d2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "0.02em",
                transition: "all 0.3s ease",
                textDecoration: "none",
                "&:hover": {
                  transform: "translateY(-1px)",
                  filter: "brightness(1.1)",
                },
              }}
            >
              James Wanjiku
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 0.5, sm: 1 },
            }}
          >
            {/* Navigation Links */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mr: { xs: 1, sm: 2, md: 3 },
                "& .MuiButton-root": {
                  px: { xs: 1, sm: 1.5 },
                  fontSize: { xs: "0.75rem", sm: "inherit" },
                  minWidth: { xs: "auto", sm: "64px" },
                },
              }}
            >
              <Button
                component={Link}
                href="/projects"
                color="inherit"
                sx={{
                  fontWeight: pathname === "/projects" ? 700 : 500,
                  color:
                    pathname === "/projects" ? "primary.main" : "text.primary",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "primary.main",
                  },
                }}
              >
                Projects
              </Button>

              <Button
                component={Link}
                href="/about"
                color="inherit"
                sx={{
                  fontWeight: pathname === "/about" ? 700 : 500,
                  color:
                    pathname === "/about" ? "primary.main" : "text.primary",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "primary.main",
                  },
                }}
              >
                About Me
              </Button>
            </Box>

            {/* Social Links */}
            <Box
              sx={{
                display: "flex",
                gap: { xs: 0.5, sm: 1 },
                mr: { xs: 0.5, sm: 1, md: 2 },
                "& .MuiIconButton-root": {
                  padding: { xs: "4px", sm: "6px" },
                },
              }}
            >
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
                ml: { xs: 0.25, sm: 0.5, md: 1 },
                bgcolor: alpha(theme.palette.primary.main, 0.08),
                "&:hover": {
                  transform: "scale(1.1) rotate(5deg)",
                  bgcolor: alpha(theme.palette.primary.main, 0.15),
                },
                height: { xs: 32, sm: 36, md: 40 },
                width: { xs: 32, sm: 36, md: 40 },
                padding: { xs: "4px", sm: "6px" },
              }}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <SunIcon sx={{ fontSize: { xs: 18, sm: 20, md: 22 } }} />
              ) : (
                <MoonIcon sx={{ fontSize: { xs: 18, sm: 20, md: 22 } }} />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
