"use client";

import { useState } from "react";
import { isStorageAvailable, loadResume, STORAGE_KEY } from "@/lib/resume/storage";

type BannerState = "unavailable" | "corrupted" | null;

function detectBannerState(): BannerState {
  if (typeof window === "undefined") return null;
  if (!isStorageAvailable()) return "unavailable";

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    // If raw data exists but loadResume() returns null, the data is corrupted
    const resume = loadResume();
    if (resume === null) return "corrupted";
    return null;
  } catch {
    return "corrupted";
  }
}

export function StorageBanner() {
  const [state, setState] = useState<BannerState>(() => detectBannerState());

  if (!state) return null;

  function handleClearCorrupted() {
    try { localStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
    setState(null);
    window.location.reload();
  }

  return (
    <div role="alert" className="rb-storage-banner">
      <svg
        className="rb-storage-banner__icon"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>

      {state === "unavailable" ? (
        <p className="rb-storage-banner__text">
          <strong>Storage unavailable.</strong> Your browser is blocking localStorage
          (private browsing or strict settings). Changes won&apos;t be saved between sessions.
        </p>
      ) : (
        <>
          <p className="rb-storage-banner__text">
            <strong>Saved data is corrupted.</strong> Your previous resume could not be loaded.
          </p>
          <button
            type="button"
            className="btn btn-secondary btn-sm rb-storage-banner__action"
            onClick={handleClearCorrupted}
          >
            Start fresh
          </button>
        </>
      )}
    </div>
  );
}
