import { projects } from "../../content/projects";
import { Project } from "../../content/types";
import ProjectContent from "./ProjectContent";

export function generateStaticParams() {
  return projects.map((project) => ({
    "project-name": project.slug,
  }));
}

interface ProjectPageProps {
  params: Promise<{
    "project-name": string;
  }>;
}

const NOT_FOUND_PROJECT: Project = {
  slug: "not-found",
  title: "Project Not Found",
  shortDescription: "Sorry, the project you're looking for doesn't exist.",
  description: "Sorry, the project you're looking for doesn't exist.",
  imageUrl: "/images/projects/placeholder.svg",
  technologies: [],
  period: "",
  role: "",
  context: "personal",
  status: "completed",
  featured: false,
  highlights: [],
};

export default async function ProjectPage({
  params,
}: Readonly<ProjectPageProps>) {
  const paramValues = await params;
  const projectName = paramValues["project-name"];

  const projectData =
    projects.find((p) => p.slug === projectName) || NOT_FOUND_PROJECT;

  return <ProjectContent project={projectData} />;
}
