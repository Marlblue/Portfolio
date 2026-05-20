import type { ProjectContent } from "../../types";

export default {
  title: "Quran PWA",
  theme: "dark",
  tags: ["pwa", "workbox", "react"],
  live: "https://quranapp.marlblue.workers.dev",
  description: "Offline-first Quran PWA with per-ayah audio, prayer times, tasbih, zakat calculator, and bookmarks. Uses Workbox CacheFirst with 30-day API and 7-day audio caching.",
} as const satisfies ProjectContent;
