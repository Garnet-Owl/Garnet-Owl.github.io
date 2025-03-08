import React from "react";
import AboutContent from "./AboutContent";

// Mock data for skills
const skillsData = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Material-UI",
    "Tailwind CSS",
  ],
  backend: [
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "Firebase",
    "RESTful APIs",
    "GraphQL",
    "Python",
  ],
  tools: ["Git", "GitHub", "Bitbucket", "Pycharm", "VS Code", "Docker", "Figma", "JIRA", "Confluence", "GCP", "AWS"],
};

// Mock data for experience
const experienceData = [
  {
    role: "Junior Software Engineer",
    company: "AAI Labs.",
    period: "2024 - Present",
    description:
      "Fullstack development of software applications for clients. Worked on projects using React-Next.js, Node.js, NLP projects, and use PostgreSql.",
  },
  {
    role: "Network Administrator",
    company: "Innovative Systems",
    period: "2023 - 2024",
    description:
      "Managed and maintained the company's network infrastructure. Provided technical support to employees and clients.",
  },
];

export default function AboutPage() {
  return <AboutContent skills={skillsData} experience={experienceData} />;
}
