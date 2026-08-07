"use client";

import React from "react";
import TypewriterEffect from "@/app/components/TypewriterEffect";
import ProfileImage from "@/app/dashboard/components/ProfileImage";
import {
  Box,
  Typography,
  Container,
  Stack,
  Divider,
  Button,
  useTheme,
  Paper,
} from "@mui/material";
import { Email as EmailIcon, Description as ResumeIcon } from "@mui/icons-material";
import { useResponsive } from "@/app/context/ResponsiveContext";
import { alpha } from "@mui/material/styles";
import { profile } from "@/app/content/profile";

const Hero = () => {
  const { isMobile } = useResponsive();
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: "40vh",
        display: "flex",
        alignItems: "center",
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={3}
          className="hero-card"
          sx={{
            bgcolor: "background.paper",
            borderRadius: 2,
            p: { xs: 2, sm: 3, md: 4 },
            mt: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "center" : "flex-start",
              gap: { xs: 5, md: 8 },
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: { xs: 1, sm: 2, md: 3 },
              }}
            >
              <ProfileImage />
            </Box>

            <Stack
              spacing={3}
              sx={{
                width: "100%",
                maxWidth: isMobile ? "unset" : "md",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              <Box>
                <Typography
                  component="h1"
                  variant="h1"
                  className="hero-title"
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "1.875rem", md: "2.25rem" },
                  }}
                >
                  <TypewriterEffect
                    text={`Hi there, my name is ${profile.name}.`}
                    speed={70}
                  />
                </Typography>

                <Typography
                  variant="h2"
                  className="hero-subtitle"
                  sx={{
                    fontSize: { xs: "1.125rem", sm: "1.25rem", md: "1.5rem" },
                    mt: 1,
                    mb: 1,
                  }}
                >
                  <TypewriterEffect
                    text={profile.headline}
                    speed={70}
                    delay={3300}
                  />
                </Typography>
              </Box>

              <Divider
                sx={{
                  width: isMobile ? "80%" : "70%",
                  alignSelf: isMobile ? "center" : "flex-start",
                  borderColor: alpha(theme.palette.divider, 0.6),
                  my: 1,
                }}
              />

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
                  color: "text.secondary",
                  maxWidth: "650px",
                }}
              >
                <TypewriterEffect
                  text={profile.summary}
                  speed={40}
                  delay={5600}
                />
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ justifyContent: isMobile ? "center" : "flex-start" }}
              >
                {profile.contact.email && (
                  <Button
                    variant="contained"
                    startIcon={<EmailIcon />}
                    href={`mailto:${profile.contact.email}`}
                  >
                    Get in Touch
                  </Button>
                )}
                <Button
                  variant="outlined"
                  startIcon={<ResumeIcon />}
                  href="/resume.pdf"
                  download="James-Wanjiku-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Hero;
