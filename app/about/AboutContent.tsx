"use client";

import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Chip,
  Avatar,
  Divider,
  useTheme,
  Stack,
  Grid,
} from "@mui/material";
import { alpha } from "@mui/material/styles";

interface SkillsData {
  frontend: string[];
  backend: string[];
  tools: string[];
}

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

interface AboutContentProps {
  readonly skills: SkillsData;
  readonly experience: ExperienceItem[];
}

export default function AboutContent({
  skills,
  experience,
}: AboutContentProps) {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper
        elevation={1}
        sx={{
          bgcolor: alpha(
            theme.palette.background.paper,
            theme.palette.mode === "dark" ? 0.4 : 0.6
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
          About Me
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                src="/images/profile/linkedinprf.jpg"
                alt="James Wanjiku"
                sx={{
                  width: { xs: 150, sm: 200 },
                  height: { xs: 150, sm: 200 },
                  mb: 2,
                  boxShadow: theme.shadows[3],
                }}
              />
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                James Wanjiku
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{ mb: 2 }}
              >
                Junior Software Engineer
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              I&apos;m a passionate software engineer specializing in modern web
              technologies. With a strong foundation in both frontend and
              backend development, I create scalable, user-friendly applications
              that solve real-world problems.
            </Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>
              My journey in software development began with a curiosity about
              how digital products work behind the scenes. This curiosity
              evolved into a passion for creating elegant solutions that enhance
              user experiences and drive business value.
            </Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>
              I&apos;m constantly learning and expanding my skills to stay
              current with emerging technologies and best practices in the
              rapidly evolving tech landscape.
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Skills Section */}
      <Paper
        elevation={1}
        sx={{
          bgcolor: alpha(
            theme.palette.background.paper,
            theme.palette.mode === "dark" ? 0.4 : 0.6
          ),
          borderRadius: 2,
          p: { xs: 2, sm: 3, md: 4 },
          mb: 4,
        }}
      >
        <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 3 }}>
          Skills & Technologies
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Frontend
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
              {skills.frontend.map((skill) => (
                <Chip key={skill} label={skill} variant="outlined" />
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Backend
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
              {skills.backend.map((skill) => (
                <Chip key={skill} label={skill} variant="outlined" />
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Tools & Platforms
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
              {skills.tools.map((skill) => (
                <Chip key={skill} label={skill} variant="outlined" />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Paper>

      {/* Experience Section */}
      <Paper
        elevation={1}
        sx={{
          bgcolor: alpha(
            theme.palette.background.paper,
            theme.palette.mode === "dark" ? 0.4 : 0.6
          ),
          borderRadius: 2,
          p: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 3 }}>
          Professional Experience
        </Typography>

        <Box>
          {experience.map((item) => (
            <Box
              key={`${item.company}-${item.role}`}
              sx={{ mb: item !== experience[experience.length - 1] ? 4 : 0 }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {item.role}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 0.5,
                  mb: 1,
                }}
              >
                <Typography variant="subtitle1" color="primary">
                  {item.company}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {item.period}
                </Typography>
              </Box>

              <Typography variant="body2">{item.description}</Typography>

              {item !== experience[experience.length - 1] && (
                <Divider sx={{ mt: 3 }} />
              )}
            </Box>
          ))}
        </Box>
      </Paper>
    </Container>
  );
}
