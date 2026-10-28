import { Profile } from "./types";

export const profile: Profile = {
  name: "James Wanjiku",
  headline: "Machine Learning Engineer and Team Lead at AAI Labs",
  summary:
    "I build machine learning systems and take them to production, from computer vision on drones to LLM pipelines and voice agents.",
  currentFocus:
    "Currently leading onboard computer vision for aid-delivery drones on an international R&D project with industry and university partners.",
  bio: [
    "I build machine learning systems and take them to production, from computer vision on drones to LLM pipelines and voice agents.",
    "Right now I lead the engineering team building onboard computer vision for aid-delivery drones, on an international R&D project with industry and university partners. The drone checks the ground for hazards to find a safe drop area and predicts where a payload will land from tracked test drops, all on an NVIDIA Jetson.",
    "Before that I worked on an autonomous B2B voice calling platform, first as an engineer and then as team lead. It places outbound calls, handles the conversation itself with speech recognition, text to speech and an LLM, and can hand a live call to a person mid-conversation.",
    "I also built the georeferencing and object-tracking pipeline for a 5G-connected drone system. It takes live video and telemetry, detects and tracks objects, and places every detection on GPS coordinates from the drone's position and camera orientation. The work was presented to and accepted by an EU committee.",
    "On the research side I led a study of how reliably LLMs follow instructions across multi-turn workflows, and presented the paper at ICIST 2026 in Kaunas.",
    "Outside work I maintain Taura, an open-source Kikuyu-English translation engine. Kikuyu has nine to ten million speakers and almost no machine translation support, which seemed worth fixing.",
  ],
  contact: {
    github: "https://github.com/Garnet-Owl",
    linkedin: "https://linkedin.com/in/james-wanjiku",
    // confirmed
    email: "james544wanjiku@gmail.com",
  },
};
