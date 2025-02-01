"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { Theme } from "@mui/material/styles";

type ResponsiveContextType = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

const ResponsiveContext = createContext<ResponsiveContextType | undefined>(
  undefined
);

export const ResponsiveProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const isTablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.between("sm", "md")
  );
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const value = React.useMemo(
    () => ({ isMobile, isTablet, isDesktop }),
    [isMobile, isTablet, isDesktop]
  );

  // Avoid SSR mismatch by only rendering after mount
  if (!mounted) {
    return null;
  }

  return (
    <ResponsiveContext.Provider value={value}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export const useResponsive = () => {
  const context = useContext(ResponsiveContext);
  if (context === undefined) {
    throw new Error("useResponsive must be used within a ResponsiveProvider");
  }
  return context;
};
