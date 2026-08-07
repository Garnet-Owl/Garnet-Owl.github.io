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
  Link as MuiLink,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { profile } from "@/app/content/profile";
import { experience } from "@/app/content/experience";
import { skillGroups } from "@/app/content/skills";
import { education } from "@/app/content/education";
import { publications } from "@/app/content/publications";

export default function AboutContent() {
  const theme = useTheme();

  const sectionPaperSx = {
    bgcolor: alpha(
      theme.palette.background.paper,
      theme.palette.mode === "dark" ? 0.9 : 0.6
    ),
    borderRadius: 2,
    p: { xs: 2, sm: 3, md: 4 },
    mb: 4,
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={1} sx={sectionPaperSx}>
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
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                src="/images/profile/linkedinprf.jpg"
                alt={profile.name}
                sx={{
                  width: { xs: 150, sm: 200 },
                  height: { xs: 150, sm: 200 },
                  mb: 2,
                  boxShadow: theme.shadows[3],
                }}
              />
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                {profile.name}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{ mb: 2, textAlign: "center" }}
              >
                {profile.headline}
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            {profile.bio.map((paragraph) => (
              <Typography key={paragraph.slice(0, 40)} variant="body1" sx={{ mb: 2 }}>
                {paragraph}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Paper>

      {/* Skills Section */}
      <Paper elevation={1} sx={sectionPaperSx}>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 3 }}>
          Skills & Technologies
        </Typography>

        <Grid container spacing={3}>
          {skillGroups.map((group) => (
            <Grid key={group.category} size={{ xs: 12, md: 4 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                {group.category}
              </Typography>
              <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
                {group.skills.map((skill) => (
                  <Chip key={skill} label={skill} variant="outlined" />
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Experience Section */}
      <Paper elevation={1} sx={sectionPaperSx}>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 3 }}>
          Professional Experience
        </Typography>

        <Box>
          {experience.map((item, index) => (
            <Box
              key={`${item.company}-${item.role}`}
              sx={{ mb: index !== experience.length - 1 ? 4 : 0 }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {item.role}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 1.5,
                  mt: 0.5,
                  mb: 1,
                }}
              >
                <Typography
                  variant="subtitle1"
                  color="primary"
                  sx={{ whiteSpace: "nowrap" }}
                >
                  {item.company}
                </Typography>

                <Box
                  sx={{
                    flex: 1,
                    borderBottom: `1px dotted ${alpha(
                      theme.palette.text.secondary,
                      0.4
                    )}`,
                    mb: "0.3em",
                  }}
                />

                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{ whiteSpace: "nowrap" }}
                >
                  {item.period}
                </Typography>
              </Box>

              <Typography variant="body2">{item.description}</Typography>

              {index !== experience.length - 1 && <Divider sx={{ mt: 3 }} />}
            </Box>
          ))}
        </Box>
      </Paper>

      {/* Education Section */}
      <Paper elevation={1} sx={sectionPaperSx}>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 3 }}>
          Education
        </Typography>

        <Box>
          {education.map((item, index) => (
            <Box
              key={`${item.institution}-${item.credential}`}
              sx={{ mb: index !== education.length - 1 ? 3 : 0 }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {item.url ? (
                  <MuiLink
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                    underline="hover"
                  >
                    {item.institution}
                  </MuiLink>
                ) : (
                  item.institution
                )}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 1.5,
                  mt: 0.5,
                }}
              >
                <Typography
                  variant="subtitle1"
                  color="primary"
                  sx={{ whiteSpace: "nowrap" }}
                >
                  {item.credential}
                </Typography>

                <Box
                  sx={{
                    flex: 1,
                    borderBottom: `1px dotted ${alpha(
                      theme.palette.text.secondary,
                      0.4
                    )}`,
                    mb: "0.3em",
                  }}
                />

                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{ whiteSpace: "nowrap" }}
                >
                  {item.period}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Paper>

      {/* Publications Section */}
      {publications.length > 0 && (
        <Paper elevation={1} sx={{ ...sectionPaperSx, mb: 0 }}>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 3 }}>
            Publications
          </Typography>

          <Box>
            {publications.map((item, index) => (
              <Box
                key={item.title}
                sx={{ mb: index !== publications.length - 1 ? 3 : 0 }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {item.url ? (
                    <MuiLink
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="inherit"
                      underline="hover"
                    >
                      {item.title}
                    </MuiLink>
                  ) : (
                    item.title
                  )}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 1.5,
                    mt: 0.5,
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    {item.venue}
                  </Typography>

                  <Box
                    sx={{
                      flex: 1,
                      borderBottom: `1px dotted ${alpha(
                        theme.palette.text.secondary,
                        0.4
                      )}`,
                      mb: "0.3em",
                    }}
                  />

                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    {item.date}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Paper>
      )}
    </Container>
  );
}
