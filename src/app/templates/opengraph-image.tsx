import { generateOgImage, size, contentType } from "@/lib/og";
export { size, contentType };
export const runtime = "nodejs";
export const alt = "Free Resume Templates — ATS-Friendly Designs for 2025";
export default function OgImage() {
  return generateOgImage({ title: "Free Resume Templates for 2025", category: "Templates" });
}
