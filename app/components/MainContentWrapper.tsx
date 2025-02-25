"use client";

import React from "react";
import { Box } from "@mui/material";
import { useResponsive } from "../context/ResponsiveContext";

interface MainContentWrapperProps {
  children: React.ReactNode;
}

const MainContentWrapper: React.FC<MainContentWrapperProps> = ({
  children,
}) => {
  const { backgroundStyles } = useResponsive();

  return (
    <Box
      component="main"
      sx={{
        ...backgroundStyles.mainBackground,
        "&::before": backgroundStyles.backgroundPattern,
      }}
    >
      {children}
    </Box>
  );
};

export default MainContentWrapper;
