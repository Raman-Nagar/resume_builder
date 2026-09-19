import { generateOgImage, size, contentType } from "@/lib/og";
export { size, contentType };
export const runtime = "nodejs";
export const alt = "How to List Education on a Resume in 2025 (With Examples)";
export default function OgImage() {
  return generateOgImage({ title: "How to List Education on a Resume in 2025", category: "Resume Guide", categoryColor: "#2563eb" });
}
