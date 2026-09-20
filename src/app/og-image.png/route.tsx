import { ImageResponse } from "next/og";

export const runtime = "edge";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0f172a",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: 80,
        }}
      >
        <div
          style={{
            background: "#1e293b",
            borderRadius: 16,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 60,
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                background: "#2563eb",
                borderRadius: 8,
                width: 48,
                height: 48,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "0 12px",
                gap: 4,
              }}
            >
              <div style={{ background: "white", height: 4, borderRadius: 2, width: 24 }} />
              <div style={{ background: "white", height: 4, borderRadius: 2, width: 18 }} />
              <div style={{ background: "white", height: 4, borderRadius: 2, width: 20 }} />
            </div>
            <span style={{ color: "#f1f5f9", fontSize: 22, fontWeight: 600 }}>
              Resume Builder
            </span>
          </div>

          {/* Headline */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ color: "#f8fafc", fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
              Free Resume Builder
            </div>
            <div style={{ color: "#f8fafc", fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
              for Professionals
            </div>
            <div style={{ color: "#94a3b8", fontSize: 28, marginTop: 16 }}>
              ATS-friendly templates · No account required · Download as PDF
            </div>
          </div>

          {/* Badge */}
          <div
            style={{
              background: "#2563eb",
              borderRadius: 22,
              padding: "10px 28px",
              color: "white",
              fontSize: 18,
              fontWeight: 600,
              alignSelf: "flex-start",
            }}
          >
            Free to use
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
