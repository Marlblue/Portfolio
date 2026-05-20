import thumbnailPengaduanApp from "../../../assets/thumbnails/pengaduanapp.png";
import thumbnailCineHub from "../../../assets/thumbnails/cinehub.png";
import thumbnailQuranPWA from "../../../assets/thumbnails/quranpwa.png";
import thumbnailResumeAnalyzer from "../../../assets/thumbnails/resumeanalyzer.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "PengaduanApp",
    slug: "pengaduanapp",
    thumbnail: thumbnailPengaduanApp,
    description: "Public complaint management app",
  },
  {
    title: "CineHub",
    slug: "cinehub",
    thumbnail: thumbnailCineHub,
    description: "Full-featured movie discovery app",
  },
  {
    title: "Quran PWA",
    slug: "quranpwa",
    thumbnail: thumbnailQuranPWA,
    description: "Offline-first Quran PWA",
  },
  {
    title: "Resume Analyzer",
    slug: "resumeanalyzer",
    thumbnail: thumbnailResumeAnalyzer,
    description: "AI-driven resume analysis tool",
  },
] as const satisfies ProjectPreview[];
