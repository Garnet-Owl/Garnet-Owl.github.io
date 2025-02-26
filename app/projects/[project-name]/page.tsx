import { projectsData } from "../data/projects";
import ProjectContent from "./ProjectContent";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    "project-name": project.slug,
  }));
}

interface ProjectPageProps {
  params: Promise<{
    "project-name": string;
  }>;
}

export default async function ProjectPage({
  params,
}: Readonly<ProjectPageProps>) {
  const paramValues = await params;
  const projectName = paramValues["project-name"];

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
