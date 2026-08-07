import React from "react";
import AboutContent from "./AboutContent";
import { profile } from "@/app/content/profile";

export const metadata = {
  title: "About Me",
  description: profile.summary,
  openGraph: {
    title: `About Me | ${profile.name}`,
    description: profile.summary,
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
