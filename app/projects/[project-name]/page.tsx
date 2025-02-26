import { projectsData } from "../data/projects";
import ProjectContent from "./ProjectContent";

// This function is required for static site generation with dynamic routes
export function generateStaticParams() {
  return projectsData.map((project) => ({
    "project-name": project.slug,
  }));
}

// Define the types for the params
interface ProjectPageProps {
  params: Promise<{
    "project-name": string;
  }>;
}

// Server Component
export default async function ProjectPage({
  params,
}: Readonly<ProjectPageProps>) {
  // In Next.js 15+, params need to be awaited before accessing properties
  const paramValues = await params;
  const projectName = paramValues["project-name"];

  // Get project data
  const projectData = projectsData.find((p) => p.slug === projectName) || {
    title: "Project Not Found",
    description: "Sorry, the project you're looking for doesn't exist.",
    technologies: [],
    imageUrl: "/images/projects/placeholder.jpg",
    githubUrl: "",
    liveUrl: "",
    slug: "not-found",
  };

  return <ProjectContent project={projectData} />;
}
