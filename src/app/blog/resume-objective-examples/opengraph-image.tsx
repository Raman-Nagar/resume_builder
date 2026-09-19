import { generateOgImage, size, contentType } from "@/lib/og";
export { size, contentType };
export const runtime = "nodejs";
export const alt = "20 Resume Objective Examples for 2025";
export default function OgImage() {
  return generateOgImage({ title: "20 Resume Objective Examples for 2025", category: "Resume Tips", categoryColor: "#d97706" });
}
