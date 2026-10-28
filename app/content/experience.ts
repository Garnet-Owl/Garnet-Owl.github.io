import { Experience } from "./types";

export const experience: Experience[] = [
  {
    role: "Team Lead, Machine Learning",
    company: "AAI Labs",
    period: "Jul 2026 - present",
    description:
      "Lead the engineering team building onboard computer vision for aid-delivery drones on an international R&D project with industry and university partners. I set the model accuracy targets, plan the work and review results, and still write code. Retrained the ground hazard segmentation model on new open aerial data, with a large gain on water, its weakest class, while the other classes held steady, and validated the 3D trajectory and wind estimates against simulation ground truth. From July to September 2026 I also led the autonomous B2B voice calling platform, and the team that delivered parallel calling, a simulation engine for testing calls and the handover of its GPU services to the client's own cloud.",
  },
  {
    role: "AI/ML Engineer",
    company: "AAI Labs",
    period: "Jul 2024 - Jun 2026",
    description:
      "Delivery and research across voice AI, computer vision, NLP and LLM evaluation. On the voice calling platform, from June 2025, built much of the real-time conversation layer and a LangGraph state engine that blocks invalid conversation steps, and added automatic language detection and an assisted mode where a person can join a live call. Built the georeferencing and object-tracking pipeline for a 5G-connected drone system, presented to and accepted by an EU committee. Built an NLP system that flags likely duplicate public funding applications for human review, and a recommendation service on FastAPI and GCP. Led a study of instruction-following in multi-turn LLM workflows and built its LLM-as-judge evaluation harness; lead author of the paper presented at ICIST 2026.",
  },
  {
    role: "Network Administrator",
    company: "JayBee Internet",
    period: "Aug 2023 - May 2024",
    description:
      "Maintained network infrastructure and provided technical support before moving into AI engineering.",
  },
];
