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
  ],
  tools: ["Git", "GitHub", "VS Code", "Docker", "Figma", "JIRA", "AWS"],
};

// Mock data for experience
const experienceData = [
  {
    role: "Junior Software Engineer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description:
      "Developing and maintaining web applications using React and Node.js. Collaborating with cross-functional teams to implement features and fix bugs.",
  },
  {
    role: "Software Developer Intern",
    company: "Innovative Systems",
    period: "2021 - 2022",
    description:
      "Assisted in the development of a customer portal using React and Firebase. Implemented responsive UI components and integrated with backend APIs.",
  },
];

export default function AboutPage() {
  return <AboutContent skills={skillsData} experience={experienceData} />;
}
