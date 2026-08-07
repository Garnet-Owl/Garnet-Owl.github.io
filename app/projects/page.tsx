import React from "react";
import ProjectsPageContent from "./components/ProjectsPageContent";

export const metadata = {
  title: "Projects",
  description:
    "Real, shipped projects from James Wanjiku: production voice AI, computer vision, open-source machine translation, and more.",
  openGraph: {
    title: "Projects | James Wanjiku",
    description:
      "Real, shipped projects from James Wanjiku: production voice AI, computer vision, open-source machine translation, and more.",
  },
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
