"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { Container } from "@mui/material";

const Hero = dynamic(() => import("./dashboard/Hero"), {
  ssr: true,
});

const HomeProjectCarousel = dynamic(
  () => import("./projects/components/HomeProjectCarousel"),
  { ssr: true }
);

export default function Home() {
  const [typewriterDone, setTypewriterDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypewriterDone(true);
    }, 6000);

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
