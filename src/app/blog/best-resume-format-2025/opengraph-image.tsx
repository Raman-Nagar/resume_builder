import { generateOgImage, size, contentType } from "@/lib/og";
export { size, contentType };
export const runtime = "nodejs";
export const alt = "Best Resume Format in 2025 — Which One Should You Use?";
export default function OgImage() {
  return generateOgImage({ title: "Best Resume Format in 2025", category: "Resume Guide" });
}
