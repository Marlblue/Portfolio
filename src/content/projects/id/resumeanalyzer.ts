import type { ProjectContent } from "../../types";

export default {
  title: "Resume Analyzer",
  theme: "light",
  tags: ["next", "tailwind", "react"],
  live: "https://resume-analyzer-three-theta.vercel.app/",
  description: "AI-driven resume analysis tool providing ATS compatibility scores, section-by-section reviews, keyword analysis, and rewrite suggestions in seconds.",
} as const satisfies ProjectContent;
