"use client";

import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Chip,
  Stack,
  IconButton,
  Grid,
} from "@mui/material";
import { GitHub as GitHubIcon, Public as PublicIcon } from "@mui/icons-material";
import Link from "next/link";
import { projects, getProjectAffiliation } from "../../content/projects";

export default function ProjectsGrid() {
  return (
    <Grid container spacing={3}>
      {projects.map((project) => (
        <Grid key={project.slug} size={{ xs: 12, sm: 6, md: 4 }}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardActionArea
              component={Link}
              href={`/projects/${project.slug}`}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                flex: 1,
              }}
            >
              <CardMedia
                component="img"
                image={project.imageUrl}
                alt={project.title}
                sx={{ height: 180, width: "100%", objectFit: "cover" }}
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  {project.title}
                </Typography>

                <Chip
                  label={getProjectAffiliation(project)}
                  size="small"
                  variant="outlined"
                  color={project.context === "employer" ? "primary" : "default"}
                  sx={{ mb: 1.5 }}
                />

                <Stack
                  direction="row"
                  sx={{ flexWrap: "wrap", gap: 0.5, mb: 2 }}
                >
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Chip key={tech} label={tech} size="small" variant="outlined" />
                  ))}
                  {project.technologies.length > 4 && (
                    <Chip
                      label={`+${project.technologies.length - 4} more`}
                      size="small"
                    />
                  )}
                </Stack>

                <Typography variant="body2" color="text.secondary">
                  {project.shortDescription}
                </Typography>
              </CardContent>
            </CardActionArea>

            {(project.githubUrl || project.liveUrl) && (
              <CardActions sx={{ px: 2, pb: 2 }}>
                <Box sx={{ flexGrow: 1 }} />
                {project.githubUrl && (
                  <IconButton
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <GitHubIcon fontSize="small" />
                  </IconButton>
                )}
                {project.liveUrl && (
                  <IconButton
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    color="primary"
                    aria-label={`${project.title}, learn more`}
                  >
                    <PublicIcon fontSize="small" />
                  </IconButton>
                )}
              </CardActions>
            )}
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
