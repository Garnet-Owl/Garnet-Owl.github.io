"use client";

import React from "react";
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
        height: isMobile ? "calc(100vh - 64px)" : "calc(100vh - 72px)",
        display: "flex",
        alignItems: "center",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Container maxWidth="lg">
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
            Hi, I&apos;m James Wanjiku, a
            <Box
              component="span"
              sx={{
                display: "block",
                color: "primary.main",
                mt: 1,
              }}
            >
              Junior Software Engineer
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
            Crafting robust and scalable solutions with modern technologies.
            Passionate about building exceptional software that makes a
            difference.
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
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "text.primary" }}
            >
              GitHub
            </Button>
            <Button
              variant="text"
              startIcon={<LinkedIn />}
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "text.primary" }}
            >
              LinkedIn
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
