"use client";

import React from "react";
import { Box, useTheme } from "@mui/material";
import Image from "next/image";
import { useResponsive } from "@/app/context/ResponsiveContext";
import { alpha } from "@mui/material/styles";

interface ProfileImageProps {
  imageUrl?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  imageUrl = "/images/profile/linkedinprf.jpg",
}) => {
  const { isMobile } = useResponsive();
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: 180, sm: 200, md: 220 },
        height: { xs: 180, sm: 200, md: 220 },
        borderRadius: "50%",
        border: `4px solid ${alpha(theme.palette.background.paper, 0.9)}`,
        overflow: "hidden",
        boxShadow:
          theme.palette.mode === "dark"
            ? `0 16px 40px -12px ${alpha(theme.palette.common.black, 0.5)}, 
             0 0 0 1px ${alpha(theme.palette.primary.main, 0.1)},
             0 0 0 4px ${alpha(theme.palette.background.paper, 0.3)}`
            : `0 16px 40px -12px ${alpha(theme.palette.common.black, 0.15)},
             0 0 0 1px ${alpha(theme.palette.divider, 0.1)},
             0 0 0 4px ${alpha(theme.palette.background.paper, 0.3)}`,
        mx: isMobile ? "auto" : 0,
        mb: isMobile ? 2 : 0,
        transform: "translateY(-5px)",
        transition: "all 0.5s ease",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow:
            theme.palette.mode === "dark"
              ? `0 24px 50px -12px ${alpha(theme.palette.common.black, 0.6)},
               0 0 0 1px ${alpha(theme.palette.primary.main, 0.2)},
               0 0 0 4px ${alpha(theme.palette.background.paper, 0.4)}`
              : `0 24px 50px -12px ${alpha(theme.palette.common.black, 0.2)},
               0 0 0 1px ${alpha(theme.palette.divider, 0.2)},
               0 0 0 4px ${alpha(theme.palette.background.paper, 0.4)}`,
        },
      }}
    >
      {/* Light effect overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          background:
            theme.palette.mode === "dark"
              ? `linear-gradient(135deg, ${alpha(
                  theme.palette.primary.main,
                  0.2
                )} 0%, transparent 40%, transparent 80%, ${alpha(
                  theme.palette.primary.main,
                  0.15
                )} 100%)`
              : `linear-gradient(135deg, ${alpha(
                  theme.palette.primary.main,
                  0.1
                )} 0%, transparent 40%, transparent 80%, ${alpha(
                  theme.palette.primary.main,
                  0.08
                )} 100%)`,
          pointerEvents: "none",
          borderRadius: "inherit",
        }}
      />

      <Image
        src={imageUrl}
        alt="James Wanjiku"
        fill
        sizes="(max-width: 600px) 220px, (max-width: 900px) 240px, 280px"
        style={{
          objectFit: "cover",
          objectPosition: "center top",
        }}
        priority
      />
    </Box>
  );
};

export default ProfileImage;
