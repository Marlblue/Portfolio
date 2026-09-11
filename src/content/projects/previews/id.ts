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
    description: "Platform e-course & operasional bootcamp",
  },
  {
    title: "Kalih Signature",
    slug: "kalihsignature",
    thumbnail: thumbnailKalihSignature,
    description: "Website cafe, working space & meeting room",
  },
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
  {
    title: "Wedding Invitation",
    slug: "weddinginvitation",
    thumbnail: thumbnailWeddingInvitation,
    description: "Undangan pernikahan digital animatif",
  },
  {
    title: "NathanMerch.id",
    slug: "nathanmerch",
    thumbnail: thumbnailNathanMerch,
    description: "Website e-catalog merchandise custom",
  },
] as const satisfies ProjectPreview[];
