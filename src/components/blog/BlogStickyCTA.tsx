"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function BlogStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed",
      bottom: 24,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 50,
      display: "flex",
      alignItems: "center",
      gap: 12,
      backgroundColor: "#0f172a",
      color: "white",
      padding: "12px 20px",
      borderRadius: 40,
      boxShadow: "0 4px 24px rgb(0 0 0 / 0.18)",
      fontSize: 14,
      fontWeight: 500,
      whiteSpace: "nowrap",
      animation: "sticky-cta-in 0.2s ease-out",
    }}>
      <span style={{ color: "#94a3b8" }}>Ready to build yours?</span>
      <Link
        href="/builder"
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          padding: "7px 16px",
          borderRadius: 20,
          fontWeight: 600,
          textDecoration: "none",
          fontSize: 13,
        }}
      >
        Build Resume — Free →
      </Link>
    </div>
  );
}
