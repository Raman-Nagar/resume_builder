"use client";

import { useCallback } from "react";

export function usePrint() {
  const triggerPrint = useCallback(() => {
    const scaler = document.getElementById("resume-print-root") as HTMLElement | null;
    if (!scaler) { window.print(); return; }

    const paper  = scaler.querySelector<HTMLElement>(".rp-paper");
    const spacer = scaler.nextElementSibling as HTMLElement | null;

    // Read the top/bottom padding the template applies to its root div.
    // For single-column templates (Classic, Minimal) this is on firstElementChild.
    // For Modern (flex sidebar+main), padding is on the sidebar/main children,
    // so we walk into the first deeply-padded descendant.
    const templateRoot = paper?.firstElementChild as HTMLElement | null;
    const getTopPadding = (el: HTMLElement | null): number => {
      if (!el) return 0;
      const v = parseFloat(getComputedStyle(el).paddingTop) || 0;
      if (v > 0) return v;
      // Try first child (Modern: sidebar is first child of flex wrapper)
      const child = el.firstElementChild as HTMLElement | null;
      return child ? parseFloat(getComputedStyle(child).paddingTop) || 0 : 0;
    };
    const getBottomPadding = (el: HTMLElement | null): number => {
      if (!el) return 0;
      const v = parseFloat(getComputedStyle(el).paddingBottom) || 0;
      if (v > 0) return v;
      const child = el.firstElementChild as HTMLElement | null;
      return child ? parseFloat(getComputedStyle(child).paddingBottom) || 0 : 0;
    };
    const computedPaddingTop    = getTopPadding(templateRoot);
    const computedPaddingBottom = getBottomPadding(templateRoot);

    // Convert px (96dpi screen) → mm for accurate @page margins at printer DPI
    const pxToMm = (px: number) => `${(px / 3.7795).toFixed(2)}mm`;

    // Inject print styles:
    // - @page margin-top/bottom = template's padding → consistent spacing on every page
    // - Named margin boxes with empty content → suppresses browser headers/footers
    // - .rp-paper > * padding zeroed → prevents double-spacing on page 1
    const styleEl = document.createElement("style");
    styleEl.id = "rp-print-page-margins";
    styleEl.textContent = `
      @page {
        margin-top: ${pxToMm(computedPaddingTop)};
        margin-bottom: ${pxToMm(computedPaddingBottom)};
        @top-left    { content: ""; }
        @top-center  { content: ""; }
        @top-right   { content: ""; }
        @bottom-left    { content: ""; }
        @bottom-center  { content: ""; }
        @bottom-right   { content: ""; }
      }
      @media print {
        /* Zero top/bottom padding on the template root to avoid double-spacing
           on page 1 (the @page margin already provides that spacing).
           Only applies when the root itself carries the padding (Classic/Minimal).
           Modern's padding lives on sidebar/main children, not the flex wrapper. */
        .rp-paper > *[style*="padding"] { padding-top: 0 !important; padding-bottom: 0 !important; }
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

    // Fallback for iOS/Safari where afterprint may not fire on cancel
    const fallbackTimer = setTimeout(restore, 3000);
    window.addEventListener("afterprint", () => { clearTimeout(fallbackTimer); restore(); }, { once: true });
    try {
      window.print();
    } catch {
      clearTimeout(fallbackTimer);
      restore();
    }
  }, []);

  return { triggerPrint };
}
