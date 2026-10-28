"use client";

import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Chip,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";
import Link from "next/link";
import { projects, getProjectAffiliation } from "../../content/projects";

const FEATURED_COUNT = 3;

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, FEATURED_COUNT);

  return (
    <Box component="section" sx={{ mt: { xs: 2, md: 1 }, mb: 8 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          mb: 2.5,
        }}
      >
        <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>
          Featured projects
        </Typography>
        <Button
          component={Link}
          href="/projects"
          endIcon={<ArrowForwardIcon />}
          sx={{ textTransform: "none" }}
        >
          All projects
        </Button>
      </Box>

      <Grid container spacing={3}>
        {featured.map((project) => (
          <Grid key={project.slug} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
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
                  sx={{ height: 160, width: "100%", objectFit: "cover" }}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 600, mb: 0.75 }}>
                    {project.title}
                  </Typography>
                  <Chip
                    label={getProjectAffiliation(project)}
                    size="small"
                    variant="outlined"
                    color={project.context === "employer" ? "primary" : "default"}
                    sx={{ mb: 1.25 }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {project.shortDescription}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
