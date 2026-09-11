import type { ProjectContent } from "../../types";

export default {
  title: "Kalih Signature",
  theme: "dark",
  tags: ["next", "react", "typescript", "tailwind", "sanity"],
  live: "https://kalihcoffee.com",
  description: "Website Kalih Signature — cafe, working space, dan meeting room di Tegal. Dibangun dengan Next.js App Router: artikel dikelola lewat Sanity Studio yang menyatu di situs dan tayang lewat ISR tanpa perlu deploy ulang. Delapan form (kontak, event, kolaborasi, komunitas, legal clinic, vendor, newsletter) dikirim ke Google Sheets lewat Apps Script dari sisi server, dengan validasi ulang, honeypot, rate limit per IP, penolakan submit lintas-origin, dan sanitasi sel agar isian tidak tersimpan sebagai formula hidup. Di-host di cPanel DomaiNesia dengan deploy standalone tanpa downtime dan verifikasi kesehatan otomatis.",
} as const satisfies ProjectContent;
