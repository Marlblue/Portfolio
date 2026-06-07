import thumbnailPengaduanApp from "../../../assets/thumbnails/pengaduanapp.png";
import thumbnailCineHub from "../../../assets/thumbnails/cinehub.png";
import thumbnailQuranPWA from "../../../assets/thumbnails/quranapp.png";
import thumbnailResumeAnalyzer from "../../../assets/thumbnails/resume.png";
import thumbnailWargaCheck from "../../../assets/thumbnails/wargacheck.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "WargaCheck",
    slug: "wargacheck",
    thumbnail: thumbnailWargaCheck,
    description: "Asisten dokumen kependudukan berbasis AI",
  },
  {
    title: "PengaduanApp",
    slug: "pengaduanapp",
    thumbnail: thumbnailPengaduanApp,
    description: "Aplikasi manajemen pengaduan masyarakat",
  },
  {
    title: "CineHub",
    slug: "cinehub",
    thumbnail: thumbnailCineHub,
    description: "Aplikasi pencarian film lengkap",
  },
  {
    title: "Quran PWA",
    slug: "quranpwa",
    thumbnail: thumbnailQuranPWA,
    description: "Aplikasi Al-Quran PWA offline-first",
  },
  {
    title: "Resume Analyzer",
    slug: "resumeanalyzer",
    thumbnail: thumbnailResumeAnalyzer,
    description: "Alat analisis resume berbasis AI",
  },
] as const satisfies ProjectPreview[];
