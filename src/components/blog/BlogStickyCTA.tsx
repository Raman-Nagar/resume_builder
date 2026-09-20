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
    <div className="blog-sticky-cta">
      <span className="blog-sticky-cta__label">Ready to build yours?</span>
      <Link href="/choose-template" className="blog-sticky-cta__btn">
        Build Resume — Free →
      </Link>
    </div>
  );
}
