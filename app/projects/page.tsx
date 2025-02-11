import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { GitHub } from "@mui/icons-material";
import { prisma } from "./db";

// Define Project type
type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string | null;
  liveUrl?: string | null;
  imageUrl?: string | null;
  completedAt: Date;
};

async function getProjects(): Promise<Project[]> {
  const projects = await prisma.project.findMany({
    orderBy: { completedAt: "desc" },
  });
  return projects;
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project: Project) => (
          <Card
            key={project.id}
            className="flex flex-col hover:shadow-lg transition-shadow duration-300"
          >
            {project.imageUrl && (
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}

            <CardHeader>
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <time className="text-sm text-gray-500">
                Completed: {project.completedAt.toLocaleDateString()}
              </time>
            </CardHeader>

            <CardContent className="flex-grow">
              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>

            <CardFooter className="flex gap-4">
              {project.githubUrl && (
                <Button
                  variant="outline"
                  onClick={() => window.open(project.githubUrl!, "_blank")}
                  className="flex items-center gap-2"
                >
                  <GitHub sx={{ fontSize: 16 }} />
                  GitHub
                </Button>
              )}

              {project.liveUrl && (
                <Button
                  onClick={() => window.open(project.liveUrl!, "_blank")}
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
