import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#102d16",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            color: "#d1e6d4",
            fontSize: "20px",
            fontWeight: 700,
          }}
        >
          G
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
