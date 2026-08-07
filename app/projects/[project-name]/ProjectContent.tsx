"use client";

import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Button,
  Chip,
  Stack,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { alpha } from "@mui/material/styles";
import { ArrowBack, GitHub, Public } from "@mui/icons-material";
import Link from "next/link";
import { Project } from "../../content/types";
import { getProjectAffiliation } from "../../content/projects";

interface ProjectContentProps {
  project: Project;
}

export default function ProjectContent({
  project,
}: Readonly<ProjectContentProps>) {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ pt: 4, pb: 8 }}>
      <Button
        component={Link}
        href="/projects"
        startIcon={<ArrowBack />}
        sx={{ mb: 3 }}
      >
        Back to Projects
      </Button>

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
            mb: 1,
          }}
        >
          {project.title}
        </Typography>

        <Chip
          label={getProjectAffiliation(project)}
          size="small"
          variant="outlined"
          color={project.context === "employer" ? "primary" : "default"}
          sx={{ mb: 3 }}
        />

        <Box
          sx={{
            height: { xs: 200, sm: 300, md: 400 },
            width: "100%",
            borderRadius: 1,
            overflow: "hidden",
            mb: 3,
            position: "relative",
            backgroundColor: "rgba(0,0,0,0.1)",
            "& img": {
              objectFit: "cover",
              width: "100%",
              height: "100%",
            },
          }}
        >
          {/* Use Next/Image component to display the project image */}
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </Box>

        <Stack
          direction="row"
          spacing={1}
          sx={{ mb: 3, gap: 1, flexWrap: "wrap" }}
        >
          {project.technologies.map((tech) => (
            <Chip key={tech} label={tech} size="small" />
          ))}
        </Stack>

        <Typography variant="body1" sx={{ mb: 2 }}>
          {project.description}
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ mt: 4 }}
        >
          {project.githubUrl && (
            <Button
              variant="outlined"
              startIcon={<GitHub />}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </Button>
          )}

          {project.liveUrl && (
            <Button
              variant="contained"
              startIcon={<Public />}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </Button>
          )}
        </Stack>
      </Paper>
    </Container>
  );
}
