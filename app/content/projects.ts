import { Project } from "./types";

export function getProjectAffiliation(project: Project): string {
  if (project.context === "employer") return "AAI Labs";
  if (project.context === "research") return "Research";
  return project.githubUrl ? "Open source" : "Personal initiative";
}

export const projects: Project[] = [
  {
    slug: "autonomous-voice-calling-platform",
    title: "Autonomous B2B Voice Calling Platform",
    shortDescription:
      "An AI voice-calling system that runs outbound B2B calls at scale, with a human operator able to step in on live calls.",
    description:
      "A B2B voice-calling platform that places outbound calls autonomously across multiple languages, running thousands of calls concurrently. A semi-automatic mode lets a human operator listen in and take over a call in real time when the automated path needs support. The system reads caller sentiment during the conversation and uses reinforcement learning to improve call quality and conversion rate over time.",
    imageUrl: "/images/projects/autonomous-voice-calling-platform.svg",
    technologies: [
      "Python",
      "Docker",
      "CI/CD",
      "STT/TTS",
      "LLM Ops",
      "GCP",
      "Redis",
    ],
    period: "Jun 2025 - present",
    role: "Project manager and contributor",
    context: "employer",
    status: "ongoing",
    featured: true,
    highlights: [
      "Runs thousands of calls concurrently across languages, with a call-now / assisted mode for human hand-off.",
      "Reads caller sentiment in real time and uses reinforcement learning to improve conversion over time.",
      "Managed concurrency testing, system investigation, and delivery coordination as project lead.",
    ],
  },
  {
    slug: "5g-drone-detection-and-georeferencing",
    title: "5G Drone Detection and Georeferencing",
    shortDescription:
      "A real-time surveillance platform for 5G-connected drones that detects, tracks, and georeferences objects from live video.",
    description:
      "A drone surveillance platform that ingests live video and telemetry from a drone-mounted box, detects and tracks objects with computer vision, and georeferences every detection to GPS coordinates using the drone's live position and gimbal orientation. Detections in restricted zones trigger tiered alerts back to the drone platform, and the system supports offline UAV localization and navigation when a live GPS link isn't available.",
    imageUrl: "/images/projects/5g-drone-detection-and-georeferencing.svg",
    technologies: [
      "Python",
      "Reinforcement Learning",
      "YOLO",
      "DINOv2",
      "ORB-SLAM3",
      "Computer Vision",
    ],
    period: "Jul 2024 - 2026",
    role: "Deployment owner",
    context: "employer",
    status: "completed",
    featured: true,
    highlights: [
      "Georeferences every detection to GPS coordinates in real time via ray-casting.",
      "Posts tiered restricted-zone alerts back to the drone platform.",
      "Supports offline UAV localization and navigation without a live GPS link.",
    ],
  },
  {
    slug: "taura-2-0",
    title: "Taura 2.0",
    shortDescription:
      "An open-source Kikuyu-English machine translation engine, one of the first built for this low-resource language.",
    description:
      "A bidirectional machine translation engine for Kikuyu and English, a Bantu language spoken by roughly 9 to 10 million people that modern translation tools largely ignore. Built on a reproducible data pipeline over more than 19,300 curated sentence pairs, it aligns FastText embeddings across languages with Orthogonal Procrustes and combines BM25 keyword search with embedding retrieval at inference time, which improves recall on proper nouns and domain terms that pure embedding similarity misses. A FastAPI service exposes the translator, fronted by a lightweight web UI.",
    imageUrl: "/images/projects/taura-2-0.svg",
    technologies: ["Python", "FastAPI", "FastText", "Orthogonal Procrustes"],
    period: "Apr 2025 - present",
    role: "Creator",
    context: "personal",
    status: "ongoing",
    featured: true,
    highlights: [
      "Over 19,300 curated Kikuyu-English sentence pairs, sourced from scripture and agriculture-sector text.",
      "Aligns FastText embeddings across languages with Orthogonal Procrustes, refined with iterative mutual-nearest-neighbour and CSLS.",
      "Combines BM25 keyword search with embedding retrieval to improve recall on proper nouns and domain terms.",
    ],
    githubUrl: "https://github.com/Garnet-Owl/taura-2.0",
  },
  {
    slug: "nemo-voice-typing",
    title: "Nemo Voice Typing",
    shortDescription:
      "A Windows tray app for dictating into any text field, running entirely offline on-device.",
    description:
      "A small Windows tray app for dictating into any focused text field: press a hotkey, speak, and the words appear at the cursor. Speech recognition runs locally on CPU using NVIDIA's NeMo streaming model, with no cloud round-trips and no telemetry after the model's first download. Recognized speech is injected directly into the focused window, spoken punctuation and commands like \"new paragraph\" and \"scratch that\" are handled on a dedicated worker thread, and a personal dictionary corrects recurring misrecognitions without retraining the model.",
    imageUrl: "/images/projects/nemo-voice-typing.svg",
    technologies: ["C#", ".NET", "NVIDIA NeMo", "WPF"],
    period: "Jun 2026 - present",
    role: "Creator",
    context: "personal",
    status: "live",
    featured: true,
    highlights: [
      "Runs speech recognition locally on CPU, offline after the model's first download.",
      "Injects recognized text directly into the focused window, including emoji and non-Latin characters.",
      "Recognizes spoken punctuation and voice commands like \"new paragraph\" and \"scratch that.\"",
    ],
    githubUrl: "https://github.com/Garnet-Owl/nemo-voice-typing",
  },
  {
    slug: "llm-instruction-following-research",
    title: "Reliable Instruction-Following in LLM Multi-Turn Workflows",
    shortDescription:
      "Research into keeping AI voice agents on track through complex multi-turn workflows like sales calls.",
    description:
      'Research into how AI voice agents manage complex multi-turn workflows, such as sales calls, without losing their place. A pluggable background-agent architecture checks conversation state and stage changes against the intended workflow in real time, running alongside the main agent and injecting corrections when a response drifts from the stage rules. The work is written up as "Towards Reliable Instruction-Following in LLM Multi-Turn Workflows," accepted for ICIST 2026 in Kaunas.',
    imageUrl: "/images/projects/llm-instruction-following-research.svg",
    technologies: ["Python", "LLM Agents", "Multi-Agent Systems"],
    period: "2025 - 2026",
    role: "Lead author",
    context: "research",
    status: "completed",
    featured: false,
    highlights: [
      "Background-agent architecture checks conversation state against workflow rules in real time.",
      "Runs a main agent and validator in parallel, injecting corrections when a response drifts.",
      "Accepted for publication at ICIST 2026, Kaunas.",
    ],
  },
  {
    slug: "funding-application-similarity-detection",
    title: "Funding-Application Similarity Detection",
    shortDescription:
      "An NLP tool that compares public-funding applications to flag duplicate and plagiarized content.",
    description:
      "A tool that automates the analysis and comparison of large public-funding application datasets. It examines structure, wording, vocabulary, subject terms, sentence length, and stylistic features across applications to identify and group linked submissions, and detects identical or near-identical report sections across otherwise separate documents.",
    imageUrl: "/images/projects/funding-application-similarity-detection.svg",
    technologies: ["Python", "NLP", "Regex", "Vector Search", "Docker"],
    period: "Oct 2024 - Feb 2025",
    role: "Contributor",
    context: "employer",
    status: "completed",
    featured: false,
    highlights: [
      "Compares applications across structure, wording, and stylistic features to group linked submissions.",
      "Detects duplicate and near-duplicate report sections across separate documents.",
    ],
  },
  {
    slug: "double-financing-detection-prototype",
    title: "Double-Financing Detection Prototype",
    shortDescription:
      "A prototype that flags public-sector projects requesting funding twice for the same items.",
    description:
      "A financial-management platform prototype built to prevent double financing in the public sector. It identifies and flags projects that request funding for the same items more than once across separate, disconnected funding systems, automating a reconciliation process that previously depended on manual cross-checking.",
    imageUrl: "/images/projects/double-financing-detection-prototype.svg",
    technologies: ["Next.js", "Tailwind CSS", "Python", "Docker"],
    period: "Oct 2024 - Mar 2025",
    role: "Contributor",
    context: "employer",
    status: "completed",
    featured: false,
    highlights: [
      "Flags projects requesting funding twice for the same items across separate systems.",
      "Automates a reconciliation process that previously relied on manual cross-checking.",
    ],
  },
  {
    slug: "activity-recommendation-service",
    title: "Activity Recommendation Service",
    shortDescription:
      "A recommendation service that suggests activities to supervisors for specific supervisor-child pairs.",
    description:
      "A recommendation service that suggests activities to supervisors, parents or teachers, for a specific supervisor-child pair rather than a generic list. Suggestions are shaped by each pair's historical activity record, served through a FastAPI backend.",
    imageUrl: "/images/projects/activity-recommendation-service.svg",
    technologies: ["Python", "FastAPI", "LLM", "GCP", "Docker"],
    period: "Sep 2024 - Mar 2025",
    role: "Contributor",
    context: "employer",
    status: "completed",
    featured: false,
    highlights: [
      "Tailors suggestions to a specific supervisor-child pair instead of a generic activity list.",
      "Uses each pair's historical activity record to shape future recommendations.",
    ],
  },
];
