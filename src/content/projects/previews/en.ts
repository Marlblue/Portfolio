import thumbnailSdbi from "../../../assets/thumbnails/sdbi.png";
import thumbnailKalihSignature from "../../../assets/thumbnails/kalihsignature.png";
import thumbnailPengaduanApp from "../../../assets/thumbnails/pengaduanapp.png";
import thumbnailCineHub from "../../../assets/thumbnails/cinehub.png";
import thumbnailQuranPWA from "../../../assets/thumbnails/quranapp.png";
import thumbnailResumeAnalyzer from "../../../assets/thumbnails/resume.png";
import thumbnailWargaCheck from "../../../assets/thumbnails/wargacheck.png";
import thumbnailWeddingInvitation from "../../../assets/thumbnails/weddinginvitation.png";
import thumbnailNathanMerch from "../../../assets/thumbnails/nathanmerch.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Sekolah Digital Bisnis",
    slug: "sdbi",
    thumbnail: thumbnailSdbi,
    description: "E-course platform & bootcamp operations",
  },
  {
    title: "Kalih Signature",
    slug: "kalihsignature",
    thumbnail: thumbnailKalihSignature,
    description: "Cafe, working space & meeting room website",
  },
  {
    title: "WargaCheck",
    slug: "wargacheck",
    thumbnail: thumbnailWargaCheck,
    description: "AI-powered civil document assistant",
  },
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
  {
    title: "Wedding Invitation",
    slug: "weddinginvitation",
    thumbnail: thumbnailWeddingInvitation,
    description: "Animated digital wedding invitation",
  },
  {
    title: "NathanMerch.id",
    slug: "nathanmerch",
    thumbnail: thumbnailNathanMerch,
    description: "Custom merchandise e-catalog website",
  },
] as const satisfies ProjectPreview[];
