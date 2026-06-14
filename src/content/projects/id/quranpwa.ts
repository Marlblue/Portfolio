import type { ProjectContent } from "../../types";

export default {
  title: "Quran PWA",
  theme: "dark",
  tags: ["pwa", "workbox", "react"],
  live: "https://quranapp.marlblue.workers.dev",
  description: "Aplikasi Al-Quran PWA offline-first dengan audio per-ayat, jadwal sholat, tasbih, kalkulator zakat, dan penanda bacaan. Menggunakan Workbox CacheFirst dengan caching API 30 hari dan audio 7 hari.",
} as const satisfies ProjectContent;
