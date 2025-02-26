"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  IconButton,
  Button,
  useTheme,
  Paper,
} from "@mui/material";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  ArrowForward as ArrowForwardIcon,
  Pause as PauseIcon,
  PlayArrow as PlayIcon,
} from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { alpha } from "@mui/material/styles";
import { projectsData } from "../data/projects";

interface HomeProjectCarouselProps {
  autoplay?: boolean;
  onTypewriterDone?: boolean;
}

export default function HomeProjectCarousel({
  autoplay = true,
  onTypewriterDone,
}: Readonly<HomeProjectCarouselProps>) {
  const router = useRouter();
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoplay);
  const [visible] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (onTypewriterDone) {
      // Optional: Any actions to take when typewriter effect is done
    }
  }, [onTypewriterDone]);

  useEffect(() => {
    setIsAutoPlaying(autoplay);
  }, [autoplay]);

  const clearAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  const advanceSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  useEffect(() => {
    if (!visible || !isAutoPlaying || onTypewriterDone === false) return;

    clearAutoPlay();
    autoPlayRef.current = setInterval(advanceSlide, 3000); // Change slide every 3 seconds

    // Clean up on component unmount
    return clearAutoPlay;
    // projectsData.length is intentionally excluded as it's a constant value
  }, [isAutoPlaying, visible, onTypewriterDone]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  const activeProject = projectsData[activeIndex];

  if (!visible) return null;

  return (
    <Box sx={{ width: "100%", position: "relative", mt: 3, mb: 4 }}>
      <Paper
        elevation={1}
        sx={{
          bgcolor: alpha(
            theme.palette.background.paper,
            theme.palette.mode === "dark" ? 0.3 : 0.6
          ),
          borderRadius: 2,
          p: { xs: 1, sm: 2 },
          width: "100%",
          maxWidth: 900,
          mx: "auto",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
            px: 1,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Featured Project: {activeProject.title}
          </Typography>
          <IconButton
            onClick={() => setIsAutoPlaying((prev) => !prev)}
            size="small"
            sx={{
              color: isAutoPlaying ? "primary.main" : "text.secondary",
              "&:hover": { bgcolor: alpha(theme.palette.primary.main, 0.1) },
            }}
            aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isAutoPlaying ? (
              <PauseIcon fontSize="small" />
            ) : (
              <PlayIcon fontSize="small" />
            )}
          </IconButton>
        </Box>

        <Card
          sx={{
            overflow: "hidden",
            mb: 1,
            bgcolor: "transparent",
            boxShadow: "none",
          }}
        >
          <Box
            sx={{ position: "relative", cursor: "pointer" }}
            onClick={() => router.push(`/projects/${activeProject.slug}`)}
          >
            <CardMedia
              component="img"
              image={activeProject.imageUrl}
              alt={activeProject.title}
              sx={{
                height: { xs: 240, sm: 320, md: 380 },
                width: "100%",
                objectFit: "cover",
                borderRadius: 1,
              }}
            />

            {/* Left and right navigation arrows positioned at the center of image sides */}
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              size="medium"
              sx={{
                position: "absolute",
                left: 16,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: alpha(theme.palette.common.white, 0.7),
                color: theme.palette.grey[800],
                "&:hover": { bgcolor: alpha(theme.palette.common.white, 0.9) },
                zIndex: 2,
              }}
            >
              <ChevronLeftIcon fontSize="small" />
            </IconButton>

            <IconButton
              onClick={(e) => {
                e.stopPropagation(); // Prevent the card click event
                handleNext();
              }}
              size="medium"
              sx={{
                position: "absolute",
                right: 16,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: alpha(theme.palette.common.white, 0.7),
                color: theme.palette.grey[800],
                "&:hover": { bgcolor: alpha(theme.palette.common.white, 0.9) },
                zIndex: 2,
              }}
            >
              <ChevronRightIcon fontSize="small" />
            </IconButton>

            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                p: 3,
                background: `linear-gradient(transparent, ${alpha(
                  theme.palette.common.black,
                  0.8
                )})`,
                color: "white",
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: 500, mb: 1 }}>
                {activeProject.shortDescription}
              </Typography>

              <Button
                component={Link}
                href={`/projects/${activeProject.slug}`}
                size="medium"
                variant="outlined"
                sx={{ color: "white", borderColor: "white", mt: 1 }}
              >
                View Details
              </Button>
            </Box>
          </Box>
        </Card>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            px: 1,
          }}
        >
          <Button
            component={Link}
            href="/projects"
            size="small"
            endIcon={<ArrowForwardIcon />}
            sx={{ textTransform: "none" }}
          >
            All Projects
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
