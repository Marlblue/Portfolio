import type { ProjectContent } from "../../types";

export default {
  title: "CineHub",
  theme: "light",
  tags: ["react", "tailwind"],
  live: "https://marlblue-cinehub.netlify.app",
  description: "Full-featured movie discovery app with debounced search, infinite scroll, trailer playback, and watchlist functionality — API key secured via Netlify serverless proxy.",
} as const satisfies ProjectContent;
