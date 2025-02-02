"use client";

import dynamic from "next/dynamic";
import AnalyticsDebug from "./components/AnalyticsDebug";

// Dynamically import the Hero component
const Hero = dynamic(() => import("./dashboard/Hero"), {
  ssr: true,
});

export default function Home() {
  return (
    <main>
      <Hero />
      <AnalyticsDebug />
    </main>
  );
}
