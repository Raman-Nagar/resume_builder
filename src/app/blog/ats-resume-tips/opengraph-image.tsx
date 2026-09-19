import { generateOgImage, size, contentType } from "@/lib/og";
export { size, contentType };
export const runtime = "nodejs";
export const alt = "10 ATS Resume Tips to Get Past the Bots in 2025";
export default function OgImage() {
  return generateOgImage({ title: "10 ATS Resume Tips to Get Past the Bots", category: "ATS Tips", categoryColor: "#059669" });
}
