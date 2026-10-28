"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import ProjectsGrid from "./ProjectsGrid";

export default function ProjectsPageContent() {
  return (
    <Container maxWidth="lg" sx={{ pt: 4, pb: 8 }}>
      <Box sx={{ mb: 4, maxWidth: 720 }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: 700,
            mb: 1.5,
          }}
        >
          Projects
        </Typography>

        <Typography variant="body1" color="text.secondary">
          Work from AAI Labs and my research, plus things I build on my own time.
          Open a card for the details, or the icons for the code and live pages.
        </Typography>
      </Box>

      <ProjectsGrid />
    </Container>
  );
}
