import { ImageResponse } from "next/server";

// Social preview card (1200×630) for a case study: title, tagline and author
// on the left, a screenshot on the right, in the same style as the home page
// card (src/app/opengraph-image.tsx). Each case study route has its own
// opengraph-image.tsx that loads its screenshot and calls this.
//
// The screenshot must be PNG or JPEG: the image renderer can't decode WebP,
// so each route keeps a JPEG copy (og-screenshot.jpg) next to it.

export const OG_SIZE = { width: 1200, height: 630 };

const PAPER = "#EEF3F4";
const SHEET = "#FFFFFF";
const INK = "#13293D";
const INK_SOFT = "#4A5E70";
const RULE = "#C9D6DC";
const MAGENTA = "#B0186A";
const CHART = "#1F5F99";

export const renderCaseStudyOgImage = ({
  title,
  tagline,
  screenshot,
}: {
  title: string;
  tagline: string;
  screenshot: ArrayBuffer;
}) =>
  new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: PAPER, padding: 40 }}>
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
          <div style={{ width: 20, background: MAGENTA }} />
          <div
            style={{
              width: 470,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "48px 32px 44px 44px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 22, color: INK_SOFT, letterSpacing: 2 }}>CASE STUDY</div>
              <div style={{ marginTop: 12, fontSize: 54, color: INK, lineHeight: 1.1, letterSpacing: -1 }}>
                {title}
              </div>
              <div style={{ marginTop: 18, fontSize: 24, color: CHART, lineHeight: 1.35 }}>{tagline}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 9,
                  background: INK,
                  color: "#FFFFFF",
                  fontSize: 22,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                SN
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 24, color: INK }}>Srivatsa Nayak</div>
                <div style={{ fontSize: 19, color: INK_SOFT }}>Java Backend Engineer</div>
              </div>
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", alignItems: "center", paddingRight: 36 }}>
            {/* Rendered by ImageResponse, not the browser: next/image doesn't apply here. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              // ImageResponse accepts raw image bytes as the src.
              src={screenshot as unknown as string}
              width={560}
              height={350}
              alt=""
              style={{ borderRadius: 10, border: `2px solid ${RULE}`, objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    ),
    OG_SIZE
  );
