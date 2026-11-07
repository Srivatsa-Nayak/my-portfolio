import { ImageResponse } from "next/server";

// Social preview card (1200×630) shown when the site is shared on LinkedIn,
// WhatsApp, X, etc. Colours mirror tailwind.config.ts.
// Edge runtime: the Node build of @vercel/og in Next 13.4 fails to resolve its
// bundled font on Windows, so `next build` breaks locally without this.
export const runtime = "edge";
export const alt =
  "Srivatsa Nayak — I build Java backends that bring mainframe workloads into the cloud.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#EEF3F4";
const SHEET = "#FFFFFF";
const INK = "#13293D";
const INK_SOFT = "#4A5E70";
const RULE = "#C9D6DC";
const MAGENTA = "#B0186A";
const GO = "#2E7D4F";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: PAPER,
          padding: 48,
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            background: SHEET,
            border: `2px solid ${RULE}`,
            borderRadius: 16,
            overflow: "hidden",
          }}
        >
          {/* Coloured holder band, as on the site's "flight strip" cards. */}
          <div style={{ width: 20, background: MAGENTA }} />
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "56px 64px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 10,
                  background: INK,
                  color: "#FFFFFF",
                  fontSize: 28,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                SN
              </div>
              <div style={{ fontSize: 34, fontWeight: 700, color: INK }}>
                Srivatsa Nayak
              </div>
            </div>

            <div
              style={{
                fontSize: 60,
                fontWeight: 700,
                color: INK,
                lineHeight: 1.15,
                letterSpacing: -1,
              }}
            >
              I build Java backends that bring mainframe workloads into the
              cloud.
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: 26,
                color: INK_SOFT,
              }}
            >
              <div style={{ display: "flex" }}>
                Software Engineer · Java · Spring Boot · Kubernetes
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  color: GO,
                  fontWeight: 700,
                }}
              >
                <div
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: 7,
                    background: GO,
                  }}
                />
                Open to backend roles
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
