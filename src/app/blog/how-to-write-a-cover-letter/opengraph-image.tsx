import { generateOgImage, size, contentType } from "@/lib/og";
export { size, contentType };
export const runtime = "nodejs";
export const alt = "How to Write a Cover Letter in 2025 — With Examples";
export default function OgImage() {
  return generateOgImage({ title: "How to Write a Cover Letter in 2025", category: "Career Guide", categoryColor: "#7c3aed" });
}
