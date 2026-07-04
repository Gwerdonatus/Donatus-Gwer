import { ImageResponse } from "next/og";

export const runtime = "edge";

export const dynamic = "force-static";

export const alt = "Gwer Donatus — Backend Systems Engineer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#d2dec2",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: "24px",
            fontWeight: 500,
            color: "#626f56",
            marginBottom: "20px",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
          }}
        >
          Backend Systems Engineer
        </div>
        <div
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "#14230b",
            lineHeight: 1.1,
            marginBottom: "20px",
          }}
        >
          Gwer Donatus
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "#626f56",
            maxWidth: "700px",
            lineHeight: 1.4,
          }}
        >
          Building AI-powered software that scales
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
