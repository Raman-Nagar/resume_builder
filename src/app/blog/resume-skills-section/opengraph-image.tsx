import { generateOgImage, size, contentType } from "@/lib/og";
export { size, contentType };
export const runtime = "nodejs";
export const alt = "How to Write a Resume Skills Section in 2025";
export default function OgImage() {
  return generateOgImage({ title: "How to Write a Resume Skills Section in 2025", category: "Resume Tips", categoryColor: "#d97706" });
}
