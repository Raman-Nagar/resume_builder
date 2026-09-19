"use client";

import { useCallback } from "react";

export function usePrint() {
  const triggerPrint = useCallback(() => {
    const scaler = document.getElementById("resume-print-root") as HTMLElement | null;
    if (!scaler) { window.print(); return; }

    const paper  = scaler.querySelector<HTMLElement>(".rp-paper");
    const spacer = scaler.nextElementSibling as HTMLElement | null;

    // Read the top/bottom padding the template applies to its root div.
    // We use @page margin-top/bottom (not padding on a content element)
    // because @page margins are the only mechanism the print engine applies
    // independently to every page. The named margin boxes (@top-*, @bottom-*)
    // are set to empty content so Chrome does not render its native
    // headers/footers (date, title, URL, page numbers) in that space.
    const templateRoot = paper?.firstElementChild as HTMLElement | null;
    const computedPaddingTop = templateRoot
      ? parseFloat(getComputedStyle(templateRoot).paddingTop) || 0
      : 0;
    const computedPaddingBottom = templateRoot
      ? parseFloat(getComputedStyle(templateRoot).paddingBottom) || 0
      : 0;

    // Inject print styles:
    // - @page margin-top/bottom = template's padding → consistent spacing on every page
    // - Named margin boxes with empty content → suppresses browser headers/footers
    // - .rp-paper > * padding zeroed → prevents double-spacing on page 1
    const styleEl = document.createElement("style");
    styleEl.id = "rp-print-page-margins";
    styleEl.textContent = `
      @page {
        margin-top: ${computedPaddingTop}px;
        margin-bottom: ${computedPaddingBottom}px;
        @top-left    { content: ""; }
        @top-center  { content: ""; }
        @top-right   { content: ""; }
        @bottom-left    { content: ""; }
        @bottom-center  { content: ""; }
        @bottom-right   { content: ""; }
      }
      @media print {
        .rp-paper > * { padding-top: 0 !important; padding-bottom: 0 !important; }
      }
    `;
    document.head.appendChild(styleEl);

    // Save current inline styles
    const savedPosition      = scaler.style.position;
    const savedWidth         = scaler.style.width;
    const savedTransform     = scaler.style.transform;
    const savedLeft          = scaler.style.left;
    const savedPaperWidth    = paper?.style.width ?? "";
    const savedSpacerDisplay = spacer?.style.display ?? "";

    const restore = () => {
      scaler.style.position  = savedPosition;
      scaler.style.width     = savedWidth;
      scaler.style.transform = savedTransform;
      scaler.style.left      = savedLeft;
      if (paper)  paper.style.width    = savedPaperWidth;
      if (spacer) spacer.style.display = savedSpacerDisplay;
      document.getElementById("rp-print-page-margins")?.remove();
      window.removeEventListener("afterprint", restore);
    };

    // Mutate before browser snapshots the page
    scaler.style.position  = "static";
    scaler.style.width     = "100%";
    scaler.style.transform = "none";
    scaler.style.left      = "";
    if (paper)  paper.style.width    = "100%";
    if (spacer) spacer.style.display = "none";   // hides the height-spacer div → no blank 3rd page

    window.addEventListener("afterprint", restore);
    window.print();
  }, []);

  return { triggerPrint };
}
