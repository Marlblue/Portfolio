import type { ProjectContent } from "../../types";

export default {
  title: "CineHub",
  theme: "light",
  tags: ["react", "tailwind"],
  live: "https://marlblue-cinehub.netlify.app",
  description: "Aplikasi pencarian film lengkap dengan fitur pencarian debounced, infinite scroll, pemutaran trailer, dan watchlist — API key diamankan menggunakan proxy serverless Netlify.",
} as const satisfies ProjectContent;
