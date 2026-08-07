"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Chip,
  Typography,
  IconButton,
  Button,
  useTheme,
  Paper,
  Grid,
} from "@mui/material";
import {
  ArrowForward as ArrowForwardIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Pause as PauseIcon,
  PlayArrow as PlayIcon,
} from "@mui/icons-material";
import Link from "next/link";
import { alpha } from "@mui/material/styles";
import { projects, getProjectAffiliation } from "../../content/projects";

const HIGHLIGHT_COUNT = 3;
const ROTATE_INTERVAL_MS = 10000;

interface HomeProjectCarouselProps {
  autoplay?: boolean;
  onTypewriterDone?: boolean;
}

export default function HomeProjectCarousel({
  autoplay = true,
  onTypewriterDone,
}: Readonly<HomeProjectCarouselProps>) {
  const theme = useTheme();
  const [startIndex, setStartIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoplay);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncs internal play state when the autoplay prop changes
    setIsAutoPlaying(autoplay);
  }, [autoplay]);

  const clearAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  useEffect(() => {
    if (!isAutoPlaying || onTypewriterDone === false) return;

    clearAutoPlay();
    autoPlayRef.current = setInterval(() => {
      setStartIndex((prev) => (prev + HIGHLIGHT_COUNT) % projects.length);
    }, ROTATE_INTERVAL_MS);

    return clearAutoPlay;
    // projects.length is intentionally excluded as it's a constant value
  }, [isAutoPlaying, onTypewriterDone]);

  const highlighted = Array.from(
    { length: HIGHLIGHT_COUNT },
    (_, i) => projects[(startIndex + i) % projects.length]
  );

  const pageCount = Math.ceil(projects.length / HIGHLIGHT_COUNT);
  const currentPage = Math.floor(startIndex / HIGHLIGHT_COUNT);

  const handlePrev = () => {
    setStartIndex(
      (prev) =>
        ((prev - HIGHLIGHT_COUNT) % projects.length + projects.length) %
        projects.length
    );
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + HIGHLIGHT_COUNT) % projects.length);
  };

  return (
    <Box sx={{ width: "100%", position: "relative", mt: 3, mb: 4 }}>
      <Paper
        elevation={1}
        sx={{
          borderRadius: 2,
          p: { xs: 1, sm: 2 },
          width: "100%",
          maxWidth: 1100,
          mx: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
            px: 1,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Featured Projects
          </Typography>
          <IconButton
            onClick={() => setIsAutoPlaying((prev) => !prev)}
            size="small"
            sx={{
              color: isAutoPlaying ? "primary.main" : "text.secondary",
              "&:hover": { bgcolor: alpha(theme.palette.primary.main, 0.1) },
            }}
            aria-label={isAutoPlaying ? "Pause rotation" : "Resume rotation"}
          >
            {isAutoPlaying ? (
              <PauseIcon fontSize="small" />
            ) : (
              <PlayIcon fontSize="small" />
            )}
          </IconButton>
        </Box>

        <Box sx={{ position: "relative", px: { xs: 4, sm: 5 } }}>
          <IconButton
            onClick={handlePrev}
            aria-label="Previous projects"
            sx={{
              position: "absolute",
              left: { xs: -8, sm: -18 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              bgcolor: "background.paper",
              boxShadow: 2,
              "&:hover": { bgcolor: alpha(theme.palette.primary.main, 0.12) },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>

          <IconButton
            onClick={handleNext}
            aria-label="Next projects"
            sx={{
              position: "absolute",
              right: { xs: -8, sm: -18 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              bgcolor: "background.paper",
              boxShadow: 2,
              "&:hover": { bgcolor: alpha(theme.palette.primary.main, 0.12) },
            }}
          >
            <ChevronRightIcon />
          </IconButton>

        <Grid container spacing={2}>
          {highlighted.map((project) => (
            <Grid key={project.slug} size={{ xs: 12, sm: 4 }}>
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
                    sx={{ height: 150, width: "100%", objectFit: "cover" }}
                  />
                  <CardContent sx={{ flex: 1 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                      {project.title}
                    </Typography>
                    <Chip
                      label={getProjectAffiliation(project)}
                      size="small"
                      variant="outlined"
                      color={project.context === "employer" ? "primary" : "default"}
                      sx={{ mb: 1 }}
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

        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 2 }}>
          {Array.from({ length: pageCount }, (_, page) => (
            <Box
              key={page}
              component="button"
              onClick={() => setStartIndex(page * HIGHLIGHT_COUNT)}
              aria-label={`Go to project group ${page + 1} of ${pageCount}`}
              aria-current={page === currentPage}
              sx={{
                border: "none",
                p: 0,
                cursor: "pointer",
                width: page === currentPage ? 22 : 8,
                height: 8,
                borderRadius: 4,
                bgcolor:
                  page === currentPage
                    ? "primary.main"
                    : alpha(theme.palette.text.primary, 0.2),
                transition: "all 0.25s ease",
                "&:hover": {
                  bgcolor:
                    page === currentPage
                      ? "primary.main"
                      : alpha(theme.palette.text.primary, 0.35),
                },
              }}
            />
          ))}
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button
            component={Link}
            href="/projects"
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            sx={{ textTransform: "none" }}
          >
            View All Projects
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
