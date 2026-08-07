"use client";

import React from "react";
import { Container, Typography, Paper, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import ProjectsGrid from "./ProjectsGrid";

export default function ProjectsPageContent() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ pt: 4, pb: 8 }}>
      <Paper
        elevation={1}
        sx={{
          bgcolor: alpha(
            theme.palette.background.paper,
            theme.palette.mode === "dark" ? 0.9 : 0.6
          ),
          borderRadius: 2,
          p: { xs: 2, sm: 3, md: 4 },
          mb: 4,
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 3,
          }}
        >
          My Projects
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          Here you can explore the various projects I&apos;ve worked on. Each
          project represents a challenge I&apos;ve tackled and skills I&apos;ve
          developed along the way.
        </Typography>
      </Paper>

      <ProjectsGrid />
    </Container>
  );
}
