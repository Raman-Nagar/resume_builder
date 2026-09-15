import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="rb-not-found">
      <div className="rb-not-found__inner">
        <div className="rb-not-found__code" aria-hidden="true">404</div>
        <h1 className="rb-not-found__title">Page not found</h1>
        <p className="rb-not-found__message">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="rb-not-found__actions">
          <Link href="/" className="btn btn-primary btn-md">
            Go home
          </Link>
          <Link href="/builder" className="btn btn-secondary btn-md">
            Open builder
          </Link>
        </div>
      </div>
    </div>
  );
}
