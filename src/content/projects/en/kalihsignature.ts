import type { ProjectContent } from "../../types";

export default {
  title: "Kalih Signature",
  theme: "dark",
  tags: ["next", "react", "typescript", "tailwind", "sanity"],
  live: "https://kalihcoffee.com",
  description: "Website for Kalih Signature — a cafe, working space, and meeting room in Tegal. Built on the Next.js App Router: articles are managed in an embedded Sanity Studio and go live through ISR without a redeploy. Eight forms (contact, event, collaboration, community, legal clinic, vendor, newsletter) reach Google Sheets through Apps Script from the server side, guarded by server-side validation, a honeypot, per-IP rate limiting, cross-origin submit rejection, and cell sanitising so entries can never be stored as live formulas. Hosted on DomaiNesia cPanel with zero-downtime standalone deploys and an automated health check.",
} as const satisfies ProjectContent;
