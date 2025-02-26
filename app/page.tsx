"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { Container } from "@mui/material";

// Dynamically import the Hero component
const Hero = dynamic(() => import("./dashboard/Hero"), {
  ssr: true,
});

// Dynamically import the HomeProjectCarousel component
const HomeProjectCarousel = dynamic(
  () => import("./projects/components/HomeProjectCarousel"),
  { ssr: true }
);

export default function Home() {
  const [typewriterDone, setTypewriterDone] = useState(false);

  // Simulate the typewriter effect finishing
  useEffect(() => {
    const timer = setTimeout(() => {
      setTypewriterDone(true);
    }, 6000); // Adjusted time for typewriter to finish (approximately when all text is displayed)

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <Hero />
      <Container maxWidth="lg">
        <HomeProjectCarousel onTypewriterDone={typewriterDone} />
      </Container>
    </main>
  );
}
