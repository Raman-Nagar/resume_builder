"use client";

import { useCallback } from "react";

export function usePrint() {
  const triggerPrint = useCallback(() => {
    const scaler = document.getElementById("resume-print-root") as HTMLElement | null;
    if (!scaler) { window.print(); return; }

    const paper  = scaler.querySelector<HTMLElement>(".rp-paper");
    const spacer = scaler.nextElementSibling as HTMLElement | null;

    // Read the template's top/bottom padding so @page margin can match it.
    // This makes every page (including page 2+) have consistent top/bottom spacing.
    // For single-column templates the padding is on firstElementChild.
    // For two-column templates (data-print-two-col) padding is on the sidebar child.
    const templateRoot = paper?.firstElementChild as HTMLElement | null;
    const isTwoCol = templateRoot?.hasAttribute("data-print-two-col") ?? false;

    const getPadding = (side: "paddingTop" | "paddingBottom"): number => {
      if (!templateRoot) return 0;
      if (isTwoCol) {
        // sidebar is first child of the flex wrapper
        const sidebar = templateRoot.firstElementChild as HTMLElement | null;
        return parseFloat(getComputedStyle(sidebar ?? templateRoot)[side]) || 0;
      }
      return parseFloat(getComputedStyle(templateRoot)[side]) || 0;
    };

    const padTop    = getPadding("paddingTop");
    const padBottom = getPadding("paddingBottom");
    const pxToMm    = (px: number) => `${(px / 3.7795).toFixed(2)}mm`;

    // Inject @page rule:
    // - top/bottom = template padding → consistent spacing on every page
    // - left/right = 0 → template controls horizontal spacing via its own padding
    // - named margin boxes empty → suppress browser headers/footers
    // Also zero the template root's top/bottom padding on page 1 to avoid
    // double-spacing (the @page margin already provides that gap).
    const styleEl = document.createElement("style");
    styleEl.id = "rp-print-page-margins";
    styleEl.textContent = `
      @page {
        margin: ${pxToMm(padTop)} 0 ${pxToMm(padBottom)} 0;
        @top-left    { content: ""; }
        @top-center  { content: ""; }
        @top-right   { content: ""; }
        @bottom-left    { content: ""; }
        @bottom-center  { content: ""; }
        @bottom-right   { content: ""; }
      }
      @media print {
        /* Remove top/bottom padding from the template root on page 1 only —
           @page margin already provides that spacing on every page.
           Single-column: padding is on the root child div.
           Two-column: padding is on sidebar + main children — leave those alone
           since they don't cause double-spacing (flex children, not block flow). */
        .rp-paper > *:not([data-print-two-col]) {
          padding-top: 0 !important;
          padding-bottom: 0 !important;
        }
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

    // Reset scaler so the paper fills the full page width at 1:1 scale
    scaler.style.position  = "static";
    scaler.style.width     = "100%";
    scaler.style.transform = "none";
    scaler.style.left      = "";
    if (paper)  paper.style.width    = "100%";
    if (spacer) spacer.style.display = "none";

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
