import { NextResponse } from "next/server";
import { prisma } from "./db";
import { z } from "zod";

const ProjectSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  technologies: z
    .string()
    .transform((str) => str.split(",").map((s) => s.trim())), // Convert comma-separated string to array
  githubUrl: z.string().url().optional(),
  liveUrl: z.string().url().optional(),
  imageUrl: z.string().optional(),
  completedAt: z.string().transform((str) => new Date(str)),
});

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { completedAt: "desc" },
    });
    // Convert technologies string to array when sending to client
    const formattedProjects = projects.map(
      (project: { technologies: string }) => ({
        ...project,
        technologies: project.technologies.split(",").map((t) => t.trim()),
      })
    );
    return NextResponse.json(formattedProjects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const validatedData = ProjectSchema.parse(data);

    const project = await prisma.project.create({
      data: {
        ...validatedData,
        technologies: Array.isArray(validatedData.technologies)
          ? validatedData.technologies.join(",")
          : validatedData.technologies,
      },
    });

    return NextResponse.json(project);
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const { id, ...data } = await request.json();
    const validatedData = ProjectSchema.parse(data);

    const project = await prisma.project.update({
      where: { id },
      data: {
        ...validatedData,
        technologies: Array.isArray(validatedData.technologies)
          ? validatedData.technologies.join(",")
          : validatedData.technologies,
      },
    });

    return NextResponse.json(project);
  } catch (error) {
    console.error("Error updating project:", error);
    return NextResponse.json(
      { error: "Failed to update project" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    await prisma.project.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json(
      { error: "Failed to delete project" },
      { status: 500 }
    );
  }
}
