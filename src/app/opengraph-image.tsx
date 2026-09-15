import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Resume Builder — Create a professional resume online for free";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#0f172a",
          padding: "60px",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#1e293b",
            borderRadius: "16px",
            padding: "60px",
          }}
        >
          {/* Logo row */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "48px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                backgroundColor: "#2563eb",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <div style={{ display: "flex", width: "24px", height: "3px", backgroundColor: "white", borderRadius: "2px" }} />
                <div style={{ display: "flex", width: "18px", height: "3px", backgroundColor: "white", borderRadius: "2px" }} />
                <div style={{ display: "flex", width: "20px", height: "3px", backgroundColor: "white", borderRadius: "2px" }} />
              </div>
            </div>
            <div style={{ display: "flex", fontSize: "22px", fontWeight: 600, color: "#f1f5f9" }}>
              Resume Builder
            </div>
          </div>

          {/* Headline */}
          <div style={{ display: "flex", fontSize: "60px", fontWeight: 700, color: "#f8fafc", lineHeight: 1.1, marginBottom: "24px" }}>
            Free Resume Builder for Professionals
          </div>

          {/* Subtext */}
          <div style={{ display: "flex", fontSize: "24px", color: "#94a3b8", marginBottom: "40px" }}>
            ATS-friendly templates · No account required · Download as PDF
          </div>

          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              backgroundColor: "#2563eb",
              color: "white",
              fontSize: "18px",
              fontWeight: 600,
              padding: "12px 28px",
              borderRadius: "24px",
            }}
          >
            Free to use
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
