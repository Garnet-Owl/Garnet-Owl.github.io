"use client";

import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";

interface ProfileImageProps {
  imageUrl?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  imageUrl = "/images/profile/linkedinprf.jpg", // Placeholder until you add your photo
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: "200px", sm: "250px", md: "300px" },
        height: { xs: "200px", sm: "250px", md: "300px" },
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        bgcolor: "background.paper",
        mx: { xs: "auto", md: 0 },
        mb: { xs: 4, md: 0 },
      }}
    >
      <Image
        src={imageUrl}
        alt="Profile"
        fill
        style={{
          objectFit: "cover",
        }}
        priority
      />
    </Box>
  );
};

export default ProfileImage;
