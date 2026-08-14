import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#161914",
          color: "#f3f1e8",
          fontSize: 24,
          fontWeight: 700,
          letterSpacing: "-2px",
        }}
      >
        JA<span style={{ color: "#c8ff3d" }}>.</span>
      </div>
    ),
    size,
  );
}
