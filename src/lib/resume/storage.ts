/**
 * Resume persistence utility.
 *
 * All localStorage access is isolated here — no component or hook should
 * call localStorage directly. Safe for Next.js SSR: every function guards
 * against `typeof window === "undefined"`.
 *
 * Storage envelope:
 *   { version: number; data: Resume; savedAt: string }
 *
 * Bumping CURRENT_VERSION and adding a case to `migrate()` is all that is
 * needed to handle future schema changes.
 */

import type { Resume } from "./types";
import { createEmptyResume } from "./defaults";

// ─── Constants ────────────────────────────────────────────────────────────────

export const STORAGE_KEY = "resume-builder:resume";
export const CURRENT_VERSION = 1;

// ─── Storage availability ─────────────────────────────────────────────────────

/**
 * Returns true if localStorage is available and writable.
 * Catches SecurityError (private browsing quota=0) and other access errors.
 */
export function isStorageAvailable(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const probe = "__rb_probe__";
    localStorage.setItem(probe, "1");
    localStorage.removeItem(probe);
    return true;
  } catch {
    return false;
  }
}

// ─── Envelope ─────────────────────────────────────────────────────────────────

interface StorageEnvelope {
  version: number;
  data: Resume;
  savedAt: string; // ISO 8601
}

// ─── Migration ────────────────────────────────────────────────────────────────

/**
 * Migrate a parsed envelope from an older version to CURRENT_VERSION.
 * Add a new `case` here whenever CURRENT_VERSION is bumped.
 */
function migrate(envelope: StorageEnvelope): StorageEnvelope {
  const { version, data } = envelope;

  // Example future migration:
  // if (version === 1) {
  //   data = { ...data, newField: defaultValue };
  //   version = 2;
  // }

  return { ...envelope, version, data };
}

// ─── Validation ───────────────────────────────────────────────────────────────

/** Minimal structural check — prevents crashes from corrupted blobs. */
function isValidResume(value: unknown): value is Resume {
  if (!value || typeof value !== "object") return false;
  const r = value as Record<string, unknown>;
  return (
    typeof r.id === "string" &&
    typeof r.title === "string" &&
    typeof r.personalInfo === "object" &&
    Array.isArray(r.sections)
  );
}

// ─── Core operations ──────────────────────────────────────────────────────────

/**
 * Load the resume from localStorage.
 * Returns `null` when:
 *   - running on the server
 *   - no data is stored yet
 *   - stored data is corrupted / invalid
 */
export function loadResume(): Resume | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;

    const envelope = parsed as StorageEnvelope;

    // Migrate if needed
    const migrated =
      envelope.version < CURRENT_VERSION ? migrate(envelope) : envelope;

    if (!isValidResume(migrated.data)) return null;

    return migrated.data;
  } catch {
    // JSON.parse failure, quota errors, or anything else — safe recovery
    return null;
  }
}

/**
 * Persist the full resume.
 * Throws if localStorage is unavailable (caller decides how to surface this).
 */
export function saveResume(resume: Resume): void {
  if (typeof window === "undefined") return;

  const envelope: StorageEnvelope = {
    version: CURRENT_VERSION,
    data: resume,
    savedAt: new Date().toISOString(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(envelope));
}

/**
 * Merge a partial update into the stored resume.
 * No-op if nothing is stored yet.
 */
export function updateResume(partial: Partial<Resume>): void {
  if (typeof window === "undefined") return;

  const current = loadResume();
  if (!current) return;

  saveResume({ ...current, ...partial, updatedAt: new Date().toISOString() });
}

/**
 * Overwrite storage with a fresh empty resume and return it.
 */
export function resetResume(): Resume {
  const fresh = createEmptyResume();
  if (typeof window !== "undefined") {
    saveResume(fresh);
  }
  return fresh;
}

/**
 * Remove the resume entry from localStorage entirely.
 */
export function clearResume(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}

/**
 * Returns the ISO timestamp of the last successful save, or null.
 */
export function lastSavedAt(): string | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const envelope = JSON.parse(raw) as Partial<StorageEnvelope>;
    return envelope.savedAt ?? null;
  } catch {
    return null;
  }
}
