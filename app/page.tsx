"use client";

import dynamic from "next/dynamic";
import Analytics from "./components/Analytics";

// Dynamically import the Hero component
const Hero = dynamic(() => import("./dashboard/components/Hero"), {
  ssr: true,
});

export default function Home() {
  return (
    <main>
      <Analytics />
      <Hero />
    </main>
  );
}
