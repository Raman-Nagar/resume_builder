import { generateOgImage, size, contentType } from "@/lib/og";
export { size, contentType };
export const runtime = "nodejs";
export const alt = "Minimal Resume Template — Free, Clean Typography";
export default function OgImage() {
  return generateOgImage({ title: "Minimal Resume Template — Clean Typography Design", category: "Template", categoryColor: "#0f172a" });
}
