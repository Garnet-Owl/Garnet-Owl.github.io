"use client";

import React from "react";
import TypewriterEffect from "@/app/components/TypewriterEffect";
import ProfileImage from "@/app/dashboard/components/ProfileImage";
import { Box, Typography, Container, Button, Stack } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { useResponsive } from "@/app/context/ResponsiveContext";

const Hero = () => {
  const { isMobile } = useResponsive();

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        bgcolor: "background.default",
        color: "text.primary",
        px: 0,
        mx: 0
      }}
    >
      <Container maxWidth="lg" disableGutters>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "flex-start" },
            gap: { xs: 4, md: 8 },
            justifyContent: "center",
          }}
        >
          <ProfileImage />

          <Stack spacing={4} maxWidth="md">
            <Typography
              component="h1"
              variant="h1"
              sx={{
                fontSize: isMobile ? "2.5rem" : "3.5rem",
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              <TypewriterEffect
                text="Hi. My name is James Wanjiku."
                speed={70}
              />
              <Box
                component="span"
                sx={{
                  display: "block",
                  color: "primary.main",
                  mt: 1,
                }}
              >
                <TypewriterEffect
                  text="A Junior Software Engineer."
                  speed={70}
                  delay={3300}
                />
              </Box>
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontSize: isMobile ? "1.25rem" : "1.5rem",
                fontWeight: 400,
                color: "text.secondary",
              }}
            >
              <TypewriterEffect
                text="I craft robust and scalable solutions with modern technologies, and I'm Passionate about building exceptional software that makes a difference."
                speed={40}
                delay={5600}
              />
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ pt: 2 }}
            >
              <Button
                variant="contained"
                size="large"
                href="#projects"
                sx={{
                  minWidth: 140,
                  fontSize: "1rem",
                }}
              >
                View Projects
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="#contact"
                sx={{
                  minWidth: 140,
                  fontSize: "1rem",
                }}
              >
                Contact Me
              </Button>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ pt: 2 }}>
              <Button
                variant="text"
                startIcon={<GitHub />}
                href="https://github.com/Garnet-Owl"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "text.primary" }}
              >
                GitHub
              </Button>
              <Button
                variant="text"
                startIcon={<LinkedIn />}
                href="https://linkedin.com/in/james-wanjiku"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "text.primary" }}
              >
                LinkedIn
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
