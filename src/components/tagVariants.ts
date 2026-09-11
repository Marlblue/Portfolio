export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "reactnative"
  | "supabase"
  | "expo"
  | "workbox"
  | "tailwind"
  | "pwa"
  | "typescript"
  | "vite"
  | "gemini"
  | "framermotion"
  | "sanity"
  | "midtrans";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  reactnative: "React Native",
  supabase: "Supabase",
  expo: "Expo",
  workbox: "Workbox",
  tailwind: "Tailwind CSS",
  pwa: "PWA",
  typescript: "TypeScript",
  vite: "Vite",
  gemini: "Gemini",
  framermotion: "Framer Motion",
  sanity: "Sanity",
  midtrans: "Midtrans",
} as const satisfies Record<TagVariant, string>;
