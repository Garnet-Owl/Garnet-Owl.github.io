"use client";

import dynamic from "next/dynamic";
import { Container } from "@mui/material";

const Hero = dynamic(() => import("./dashboard/Hero"), {
  ssr: true,
});

const FeaturedProjects = dynamic(
  () => import("./projects/components/FeaturedProjects"),
  { ssr: true }
);

export default function Home() {
  return (
    <main>
      <Hero />
      <Container maxWidth="lg">
        <FeaturedProjects />
      </Container>
    </main>
  );
}
