"use client";

import { useCallback } from "react";

export function usePrint() {
  const triggerPrint = useCallback(() => {
    const scaler = document.getElementById("resume-print-root") as HTMLElement | null;
    if (!scaler) { window.print(); return; }

    const paper  = scaler.querySelector<HTMLElement>(".rp-paper");
    const spacer = scaler.nextElementSibling as HTMLElement | null;

    // Save current inline styles
    const savedPosition     = scaler.style.position;
    const savedWidth        = scaler.style.width;
    const savedTransform    = scaler.style.transform;
    const savedLeft         = scaler.style.left;
    const savedPaperWidth   = paper?.style.width  ?? "";
    const savedSpacerDisplay = spacer?.style.display ?? "";

    const restore = () => {
      scaler.style.position  = savedPosition;
      scaler.style.width     = savedWidth;
      scaler.style.transform = savedTransform;
      scaler.style.left      = savedLeft;
      if (paper)  paper.style.width    = savedPaperWidth;
      if (spacer) spacer.style.display = savedSpacerDisplay;
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
