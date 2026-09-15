"use client";

import { useEffect, useRef, useState } from "react";
import type { Resume } from "@/lib/resume/types";
import { ResumeRenderer } from "./ResumeRenderer";

interface Props {
  resume: Resume;
  isPrinting?: boolean;
}

// A4 at 96 dpi: 210mm × 297mm → 794px × 1123px
const A4_W = 794;
const A4_H_INITIAL = Math.round(A4_W * (297 / 210)); // 1123

export function ResumeCanvas({ resume }: Props) {
  const wrapRef    = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale]   = useState(1);
  const [height, setHeight] = useState(A4_H_INITIAL);
  const [wrapW, setWrapW]   = useState(A4_W);

  useEffect(() => {
    const wrap    = wrapRef.current;
    const content = contentRef.current;
    if (!wrap || !content) return;

    const wrapRO = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width;
      setWrapW(w);
      setScale(w > 0 ? Math.min(1, w / A4_W) : 1);
    });
    const contentRO = new ResizeObserver(([entry]) => {
      setHeight(entry.contentRect.height);
    });

    wrapRO.observe(wrap);
    contentRO.observe(content);
    return () => { wrapRO.disconnect(); contentRO.disconnect(); };
  }, []);

  const scaledW    = A4_W * scale;
  const leftOffset = scale < 1 ? Math.max(0, (wrapW - scaledW) / 2) : 0;

  return (
    // rp-canvas-wrap is the scroll container reference point
    <div ref={wrapRef} className="rp-canvas-wrap">
      <div
        id="resume-print-root"
        className="rp-canvas-scaler"
        style={{
          width: A4_W,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          position: "absolute",
          left: leftOffset,
        }}
      >
        <div className="rp-paper" ref={contentRef}>
          <ResumeRenderer resume={resume} />
        </div>
      </div>
      {/* Spacer: reserves the vertical space the scaled paper actually occupies */}
      <div style={{ height: height * scale }} aria-hidden />
    </div>
  );
}

