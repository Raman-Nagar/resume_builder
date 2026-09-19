import { generateOgImage, size, contentType } from "@/lib/og";
export { size, contentType };
export const runtime = "nodejs";
export const alt = "185 Resume Action Verbs to Make Your Bullet Points Stand Out (2025)";
export default function OgImage() {
  return generateOgImage({ title: "185 Resume Action Verbs for 2025", category: "Resume Tips", categoryColor: "#d97706" });
}
