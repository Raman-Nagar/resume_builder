import { generateOgImage, size, contentType } from "@/lib/og";
export { size, contentType };
export const runtime = "nodejs";
export const alt = "Executive Resume Template — Free, Professional Design";
export default function OgImage() {
  return generateOgImage({ title: "Executive Resume Template — Free & Professional", category: "Template" });
}
