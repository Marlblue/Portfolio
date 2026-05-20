export const social = [
  { url: "mailto:hilmyhafizh938@gmail.com", name: "mail" },
  { url: "https://github.com/Marlblue", name: "github" },
  { url: "https://linkedin.com/in/hilmy-hafizh-04a0493a2", name: "linkedin" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
