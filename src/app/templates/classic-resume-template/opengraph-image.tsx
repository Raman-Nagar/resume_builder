import { generateOgImage, size, contentType } from "@/lib/og";
export { size, contentType };
export const runtime = "nodejs";
export const alt = "Classic Resume Template — Free, ATS-Friendly";
export default function OgImage() {
  return generateOgImage({ title: "Classic Resume Template — Free & ATS-Friendly", category: "Template" });
}
