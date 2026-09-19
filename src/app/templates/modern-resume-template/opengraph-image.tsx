import { generateOgImage, size, contentType } from "@/lib/og";
export { size, contentType };
export const runtime = "nodejs";
export const alt = "Modern Resume Template — Free, Two-Column Design";
export default function OgImage() {
  return generateOgImage({ title: "Modern Resume Template — Free Two-Column Design", category: "Template", categoryColor: "#7c3aed" });
}
