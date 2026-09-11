import type { ProjectContent } from "../../types";

export default {
  title: "Sekolah Digital Bisnis",
  theme: "dark",
  tags: ["next", "react", "typescript", "tailwind", "sanity", "supabase", "midtrans"],
  live: "https://sekolahdigitalbisnis.com",
  description: "Company profile, blog, e-course store, and the full bootcamp operation of Sekolah Digital Bisnis Indonesia in a single Next.js app. E-course payments run through Midtrans Snap, with a signature-verifying webhook that grants per-email course access via the Google Drive API and a daily cron that revokes expired access. The bootcamp flow — registration, QR tickets, check-in, certificates, and two-factor prize claiming — is built on the organizers' Google Sheet as the source of truth. Articles are managed in an embedded Sanity Studio at /studio. Self-hosted on cPanel (Passenger) with automated GitHub Actions deploys.",
} as const satisfies ProjectContent;
