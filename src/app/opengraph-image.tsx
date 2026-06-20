import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const [fontBold, fontRegular, logoData] = await Promise.all([
    readFile(join(process.cwd(), "node_modules/@fontsource/inter/files/inter-latin-700-normal.woff")),
    readFile(join(process.cwd(), "node_modules/@fontsource/inter/files/inter-latin-400-normal.woff")),
    readFile(join(process.cwd(), "public/logo/logo.png")),
  ]);

  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0d1b4b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter",
          position: "relative",
        }}
      >
        {/* Green accent bar at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#74be43",
          }}
        />

        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoBase64}
          alt="Event Planners Tanzania"
          width={96}
          height={96}
          style={{ marginBottom: 28 }}
        />

        {/* Company name */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.5px",
            marginBottom: 12,
            display: "flex",
          }}
        >
          Event Planners Tanzania
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 24,
            fontWeight: 400,
            color: "#74be43",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          Turning Moments into Memories
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            fontSize: 16,
            fontWeight: 400,
            color: "rgba(255,255,255,0.35)",
            display: "flex",
          }}
        >
          www.eventplannerstanzania.co.tz
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: fontBold, weight: 700, style: "normal" },
        { name: "Inter", data: fontRegular, weight: 400, style: "normal" },
      ],
    }
  );
}
