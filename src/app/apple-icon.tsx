import { ImageResponse } from "next/server";

// 180×180 home-screen icon: the SN monogram, matching icon.svg.
// Edge runtime for the same reason as opengraph-image.tsx.
export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#13293D",
          color: "#FFFFFF",
          fontSize: 80,
          fontWeight: 700,
          letterSpacing: -2,
        }}
      >
        SN
      </div>
    ),
    size
  );
}
