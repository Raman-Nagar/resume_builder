import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateOgImage({
  title,
  category,
  categoryColor = "#2563eb",
}: {
  title: string;
  category: string;
  categoryColor?: string;
}) {
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
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                backgroundColor: "#2563eb",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <div style={{ display: "flex", width: "22px", height: "3px", backgroundColor: "white", borderRadius: "2px" }} />
                <div style={{ display: "flex", width: "16px", height: "3px", backgroundColor: "white", borderRadius: "2px" }} />
                <div style={{ display: "flex", width: "18px", height: "3px", backgroundColor: "white", borderRadius: "2px" }} />
              </div>
            </div>
            <div style={{ display: "flex", fontSize: "20px", fontWeight: 600, color: "#94a3b8" }}>
              resumebuilder.ramannagar.in
            </div>
          </div>

          {/* Category badge */}
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              backgroundColor: categoryColor,
              color: "white",
              fontSize: "16px",
              fontWeight: 600,
              padding: "8px 20px",
              borderRadius: "24px",
              marginBottom: "28px",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            {category}
          </div>

          {/* Title */}
          <div
            style={{
              display: "flex",
              fontSize: title.length > 50 ? "44px" : "52px",
              fontWeight: 700,
              color: "#f8fafc",
              lineHeight: 1.15,
              flex: 1,
            }}
          >
            {title}
          </div>

          {/* Footer */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "40px", paddingTop: "28px", borderTop: "1px solid #334155" }}>
            <div style={{ display: "flex", fontSize: "16px", color: "#64748b" }}>Free · No account required · Data stays in your browser</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
