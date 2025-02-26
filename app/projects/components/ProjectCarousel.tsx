"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Button,
  Chip,
  useTheme,
  CardActions,
  Paper,
} from "@mui/material";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  PlayArrow as PlayIcon,
  Pause as PauseIcon,
  GitHub as GitHubIcon,
  Public as PublicIcon,
} from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { alpha } from "@mui/material/styles";
import { projectsData } from "../data/projects";

export default function ProjectCarousel() {
  const router = useRouter();
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true); // Start immediately
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Function to clear auto-play interval
  const clearAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  // Function to advance to next slide
  const advanceSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  // Logic to handle auto-playing the carousel continuously
  useEffect(() => {
    if (!isAutoPlaying) return;

    clearAutoPlay();
    autoPlayRef.current = setInterval(advanceSlide, 3000); // Change slide every 3 seconds

    // Clean up on component unmount
    return clearAutoPlay;
    // projectsData.length is intentionally excluded as it's a constant value
  }, [isAutoPlaying]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying((prevState) => !prevState);
  };

  const activeProject = projectsData[activeIndex];

  return (
    <Box sx={{ width: "100%", position: "relative", overflow: "hidden" }}>
      <Paper
        elevation={2}
        sx={{
          bgcolor: alpha(
            theme.palette.background.paper,
            theme.palette.mode === "dark" ? 0.3 : 0.6
          ),
          borderRadius: 2,
          p: 2,
          width: "100%",
          maxWidth: 900,
          mx: "auto",
          position: "relative",
        }}
      >
        <Box
          sx={{
            mb: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Featured Projects ({activeIndex + 1}/{projectsData.length})
          </Typography>
          <Box>
            <IconButton onClick={toggleAutoPlay} color="primary" size="small">
              {isAutoPlaying ? <PauseIcon /> : <PlayIcon />}
            </IconButton>
          </Box>
        </Box>

        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            overflow: "hidden",
            mb: 2,
            maxWidth: "100%",
            bgcolor: alpha(
              theme.palette.background.paper,
              theme.palette.mode === "dark" ? 0.5 : 0.8
            ),
          }}
        >
          <Box
            sx={{
              height: { xs: 200, md: 300 },
              width: { xs: "100%", md: 400 },
              cursor: "pointer",
              position: "relative",
            }}
            onClick={() => router.push(`/projects/${activeProject.slug}`)}
          >
            <CardMedia
              component="img"
              image={activeProject.imageUrl}
              alt={activeProject.title}
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />

            {/* Left and right navigation arrows positioned at the center of image sides */}
            <IconButton
              onClick={(e) => {
                e.stopPropagation(); // Prevent the card click event
                handlePrev();
              }}
              size="medium"
              sx={{
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: alpha(theme.palette.common.white, 0.7),
                color: theme.palette.grey[800],
                "&:hover": { bgcolor: alpha(theme.palette.common.white, 0.9) },
                zIndex: 2,
              }}
            >
              <ChevronLeftIcon />
            </IconButton>

            <IconButton
              onClick={(e) => {
                e.stopPropagation(); // Prevent the card click event
                handleNext();
              }}
              size="medium"
              sx={{
                position: "absolute",
                right: 10,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: alpha(theme.palette.common.white, 0.7),
                color: theme.palette.grey[800],
                "&:hover": { bgcolor: alpha(theme.palette.common.white, 0.9) },
                zIndex: 2,
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography variant="h5" component="h2" gutterBottom>
                {activeProject.title}
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}>
                {activeProject.technologies.slice(0, 4).map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    variant="outlined"
                  />
                ))}
                {activeProject.technologies.length > 4 && (
                  <Chip
                    label={`+${activeProject.technologies.length - 4} more`}
                    size="small"
                  />
                )}
              </Box>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {activeProject.shortDescription}
              </Typography>
            </CardContent>

            <CardActions sx={{ px: 2, pb: 2 }}>
              <Button
                component={Link}
                href={`/projects/${activeProject.slug}`}
                variant="contained"
                size="small"
              >
                View Details
              </Button>

              {activeProject.githubUrl && (
                <IconButton
                  href={activeProject.githubUrl}
                  target="_blank"
                  size="small"
                  aria-label="GitHub Repository"
                >
                  <GitHubIcon fontSize="small" />
                </IconButton>
              )}

              {activeProject.liveUrl && (
                <IconButton
                  href={activeProject.liveUrl}
                  target="_blank"
                  size="small"
                  color="primary"
                  aria-label="Live Demo"
                >
                  <PublicIcon fontSize="small" />
                </IconButton>
              )}
            </CardActions>
          </Box>
        </Card>
      </Paper>
    </Box>
  );
}
