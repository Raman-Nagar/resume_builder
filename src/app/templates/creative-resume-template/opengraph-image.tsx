import { generateOgImage, size, contentType } from "@/lib/og";
export { size, contentType };
export const runtime = "nodejs";
export const alt = "Creative Resume Template — Free, Colorful Design";
export default function OgImage() {
  return generateOgImage({ title: "Creative Resume Template — Free & Colorful", category: "Template" });
}
