import type { ProjectContent } from "../../types";

export default {
  title: "Sekolah Digital Bisnis",
  theme: "dark",
  tags: ["next", "react", "typescript", "tailwind", "sanity", "supabase", "midtrans"],
  live: "https://sekolahdigitalbisnis.com",
  description: "Company profile, blog, penjualan e-course, dan seluruh operasional bootcamp Sekolah Digital Bisnis Indonesia dalam satu aplikasi Next.js. Pembayaran e-course lewat Midtrans Snap dengan webhook yang memverifikasi tanda tangan sebelum akses materi diberikan otomatis per-email lewat Google Drive API, plus cron harian yang mencabut akses kedaluwarsa. Alur bootcamp — pendaftaran, tiket QR, check-in, sertifikat, sampai klaim hadiah dua faktor — berjalan di atas Google Sheets panitia sebagai sumber kebenaran. Artikel dikelola di Sanity Studio yang menyatu di /studio. Di-host sendiri di cPanel (Passenger) dengan deploy otomatis lewat GitHub Actions.",
} as const satisfies ProjectContent;
