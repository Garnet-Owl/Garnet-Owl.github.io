import { Profile } from "./types";

export const profile: Profile = {
  name: "James Wanjiku",
  headline: "AI/ML Engineer and Team Lead at AAI Labs",
  summary:
    "I build and ship AI systems that run in production, spanning voice agents, computer vision, and LLM pipelines.",
  bio: [
    "I build and ship AI systems that run in production, spanning voice agents, computer vision, and LLM pipelines.",
    "Right now I lead engineering on an autonomous B2B voice calling platform. It places outbound calls, handles the conversation itself with speech recognition, text to speech, and an LLM, and can hand a live call to a human operator mid-conversation. It runs thousands of calls at once and switches language to match whoever picks up.",
    "Before that I built the georeferencing and object-tracking pipeline for a 5G-connected drone system: live video and telemetry in, detection and tracking, then every detection resolved to real GPS coordinates from the drone's position and camera orientation. The work was presented to and accepted by an EU committee.",
    "I also lead the technical concept and writing on AAI Labs' EU research grant proposals, and coordinate consortium partners across Europe.",
    "On the research side I led a three-person team studying how reliably LLMs follow instructions across multi-turn workflows. The paper was accepted at ICIST 2026 in Kaunas.",
    "Outside work I maintain Taura, an open-source Kikuyu-English translation engine. Kikuyu has nine to ten million speakers and almost no machine translation support, which seemed worth fixing.",
  ],
  contact: {
    github: "https://github.com/Garnet-Owl",
    linkedin: "https://linkedin.com/in/james-wanjiku",
    // confirmed
    email: "james544wanjiku@gmail.com",
  },
};
