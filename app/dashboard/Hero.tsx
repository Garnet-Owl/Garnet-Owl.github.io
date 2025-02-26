"use client";

import React from "react";
import TypewriterEffect from "@/app/components/TypewriterEffect";
import ProfileImage from "@/app/dashboard/components/ProfileImage";
import {
  Box,
  Typography,
  Container,
  Stack,
  Divider,
  useTheme,
  Paper,
} from "@mui/material";
import { useResponsive } from "@/app/context/ResponsiveContext";
import { alpha } from "@mui/material/styles";

const Hero = () => {
  const { isMobile } = useResponsive();
  const theme = useTheme();

  // Background gradient based on theme mode
  const heroBackground = {
    backgroundImage:
      theme.palette.mode === "dark"
        ? `radial-gradient(circle at top right, ${alpha(
            "#6F42C1",
            0.15
          )}, transparent 60%),
           radial-gradient(circle at bottom left, ${alpha(
             "#7950F2",
             0.1
           )}, transparent 60%)`
        : `radial-gradient(circle at top right, ${alpha(
            "#2196f3",
            0.08
          )}, transparent 60%),
           radial-gradient(circle at bottom left, ${alpha(
             "#1976d2",
             0.05
           )}, transparent 60%)`,
  };

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: "40vh", // Reduced from 100vh to 40vh to make it more compact
        display: "flex",
        alignItems: "center",
        bgcolor: "background.default", // Use theme-aware background color
        py: 3, // Reduced padding
        ...heroBackground,
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={1}
          className="hero-card"
          sx={{
            bgcolor: alpha(
              theme.palette.background.paper,
              theme.palette.mode === "dark" ? 0.4 : 0.6
            ),
            borderRadius: 2, // Reduced border radius
            p: { xs: 2, sm: 3, md: 4 }, // Reduced padding
            mt: 2, // Added margin top
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "center" : "flex-start",
              gap: { xs: 5, md: 8 },
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: { xs: 1, sm: 2, md: 3 },
              }}
            >
              <ProfileImage />
            </Box>

            <Stack
              spacing={3} // Increased spacing slightly to compensate for removed elements
              sx={{
                width: "100%",
                maxWidth: isMobile ? "unset" : "md",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              <Box>
                <Typography
                  component="h1"
                  variant="h1"
                  className="hero-title"
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "1.875rem", md: "2.25rem" }, // Further reduced font size
                  }}
                >
                  <TypewriterEffect
                    text="Hi. My name is James Wanjiku."
                    speed={70}
                  />
                </Typography>

                <Typography
                  variant="h2"
                  className="hero-subtitle"
                  sx={{
                    fontSize: { xs: "1.125rem", sm: "1.25rem", md: "1.5rem" }, // Further reduced font size
                    mt: 1, // Reduced margin top
                    mb: 1,
                  }}
                >
                  <TypewriterEffect
                    text="A Junior Software Engineer."
                    speed={70}
                    delay={3300}
                  />
                </Typography>
              </Box>

              <Divider
                sx={{
                  width: isMobile ? "80%" : "70%",
                  alignSelf: isMobile ? "center" : "flex-start",
                  borderColor: alpha(theme.palette.divider, 0.6),
                  my: 1,
                }}
              />

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" }, // Reduced font size
                  color: "text.secondary",
                  maxWidth: "650px",
                }}
              >
                <TypewriterEffect
                  text="Passionate about building exceptional software that makes a difference, I craft robust and scalable solutions with modern technologies."
                  speed={40}
                  delay={5600}
                />
              </Typography>
            </Stack>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Hero;
