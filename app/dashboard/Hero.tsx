"use client";

import React from "react";
import TypewriterEffect from "@/app/components/TypewriterEffect";
import ProfileImage from "@/app/dashboard/components/ProfileImage";
import {
  Box,
  Typography,
  Container,
  Button,
  Stack,
  Card,
  Divider,
  useTheme,
} from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
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
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        bgcolor: "background.default", // Use theme-aware background color
        py: 6,
        ...heroBackground,
      }}
    >
      <Container maxWidth="lg">
        <Card
          elevation={0}
          className="hero-card"
          sx={{
            bgcolor: alpha(
              theme.palette.background.paper,
              theme.palette.mode === "dark" ? 0.4 : 0.6
            ),
            borderRadius: 4,
            p: { xs: 3, sm: 4, md: 5 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "center" : "flex-start",
              gap: { xs: 4, md: 6 },
              justifyContent: "space-between",
            }}
          >
            <ProfileImage />

            <Stack
              spacing={4}
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
                    fontSize: { xs: "2.25rem", sm: "2.75rem", md: "3.25rem" },
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
                    fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
                    mt: 2,
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
                  fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
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

              <Stack
                direction={isMobile ? "column" : "row"}
                spacing={2}
                sx={{ alignItems: isMobile ? "center" : "flex-start" }}
              >
                <Button
                  variant="contained"
                  className="hero-button"
                  href="#projects"
                >
                  View Projects
                </Button>
                <Button
                  variant="outlined"
                  className="hero-button"
                  href="#contact"
                >
                  Contact Me
                </Button>
              </Stack>

              <Stack
                direction="row"
                spacing={2}
                sx={{ justifyContent: isMobile ? "center" : "flex-start" }}
              >
                <Button
                  variant="text"
                  className="hero-social-button"
                  startIcon={<GitHub />}
                  href="https://github.com/Garnet-Owl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Button>
                <Button
                  variant="text"
                  className="hero-social-button"
                  startIcon={<LinkedIn />}
                  href="https://linkedin.com/in/james-wanjiku"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default Hero;
