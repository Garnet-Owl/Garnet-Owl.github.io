import { Experience } from "./types";

export const experience: Experience[] = [
  {
    role: "AI/ML Engineer, Team Lead",
    company: "AAI Labs",
    period: "Jul 2026 - present",
    description:
      "Lead engineering on an autonomous B2B voice calling platform for a European client. The system places outbound calls, holds the conversation with speech recognition, text-to-speech, and an LLM, and hands off to a human operator mid-call when needed. Took the platform from calls placed one at a time to thousands running concurrently across multiple languages, validated concurrency against the telephony provider, and built automatic language detection into the call pipeline.",
  },
  {
    role: "AI/ML Engineer",
    company: "AAI Labs",
    period: "Jul 2024 - present",
    description:
      "Delivery and research across voice AI, computer vision, EU research proposals, and LLM evaluation. Built the georeferencing and object-tracking pipeline for a 5G-connected drone system, detecting and tracking objects from live video and resolving each detection to GPS coordinates from the drone's position and camera orientation; the work was presented to and accepted by an EU committee. Leads the technical concept and proposal writing for AAI Labs' EU research grant applications and coordinates consortium partners across Europe. Led a three-person team on a study of instruction-following in multi-turn LLM workflows, accepted at ICIST 2026 in Kaunas.",
  },
  {
    role: "Network Administrator",
    company: "JayBee Internet",
    period: "Aug 2023 - May 2024",
    description:
      "Maintained network infrastructure and provided technical support before moving into AI engineering.",
  },
];
