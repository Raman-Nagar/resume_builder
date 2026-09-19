import { generateOgImage, size, contentType } from "@/lib/og";
export { size, contentType };
export const runtime = "nodejs";
export const alt = "How to Write a Resume in 2025 — Step-by-Step Guide";
export default function OgImage() {
  return generateOgImage({ title: "How to Write a Resume in 2025", category: "Resume Guide" });
}
