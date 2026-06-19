import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Event Planners Tanzania — Turning Moments into Memories";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [logoBase64, fontBold, fontRegular] = await Promise.all([
    readFile(join(process.cwd(), "public/logo/logo.png"), "base64"),
    readFile(join(process.cwd(), "node_modules/@fontsource/inter/files/inter-latin-700-normal.woff")),
    readFile(join(process.cwd(), "node_modules/@fontsource/inter/files/inter-latin-400-normal.woff")),
  ]);

  const logoSrc = `data:image/png;base64,${logoBase64}`;

  const bold: React.CSSProperties = {
    fontFamily: "Inter",
    fontWeight: 700,
    lineHeight: 1.0,
    letterSpacing: "-0.02em",
  };

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(140deg, #05091a 0%, #0f1850 45%, #283593 100%)",
        }}
      >
        {/* Top-right glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: 160,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(116,190,67,0.07) 0%, transparent 65%)",
            display: "flex",
          }}
        />

        {/* Bottom-right glow behind logo */}
        <div
          style={{
            position: "absolute",
            right: 40,
            bottom: 40,
            width: 340,
            height: 340,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(40,53,147,0.55) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Green left bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 6,
            background: "linear-gradient(180deg, #74be43 0%, #62a337 100%)",
            display: "flex",
          }}
        />

        {/* Horizontal rule above footer */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 72,
            right: 72,
            height: 1,
            background: "rgba(255,255,255,1)",
            display: "flex",
          }}
        />

        {/* Main layout */}
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            padding: "48px 72px 72px 72px",
            alignItems: "center",
          }}
        >
          {/* Left: text content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              paddingRight: 48,
            }}
          >
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
              <div style={{ width: 24, height: 2, background: "#74be43", display: "flex" }} />
              <span
                style={{
                  color: "#74be43",
                  fontSize: 13,
                  letterSpacing: "0.26em",
                  fontFamily: "Inter",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                EVENT MANAGEMENT · DAR ES SALAAM
              </span>
            </div>

            {/* Company name */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ ...bold, color: "white", fontSize: 78 }}>Event Planners</span>
              <span style={{ ...bold, color: "#74be43", fontSize: 78, marginTop: -4 }}>Tanzania</span>
            </div>

            {/* Divider */}
            <div
              style={{
                width: 52,
                height: 2,
                background: "rgba(255,255,255,1)",
                margin: "24px 0",
                display: "flex",
              }}
            />

            {/* Tagline */}
            <span
              style={{
                color: "rgba(255,255,255,1)",
                fontSize: 26,
                fontFamily: "Inter",
                fontWeight: 400,
                letterSpacing: "0.01em",
              }}
            >
              &quot;Turning Moments into Memories&quot;
            </span>

            {/* Stats */}
            <div style={{ display: "flex", gap: 0, marginTop: 32 }}>
              {(
                [
                  ["13+", "Services"],
                  ["15+", "Clients"],
                  ["100%", "Commitment"],
                ] as [string, string][]
              ).map(([val, label], i) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingRight: 32,
                    marginRight: 32,
                    borderRight: i < 2 ? "1px solid rgba(255,255,255,1)" : "none",
                  }}
                >
                  <span style={{ ...bold, color: "#74be43", fontSize: 34, lineHeight: 1 }}>
                    {val}
                  </span>
                  <span
                    style={{
                      color: "rgba(255,255,255,1)",
                      fontSize: 15,
                      fontFamily: "Inter",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      marginTop: 6,
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: logo mark with drop-shadow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 240,
              flexShrink: 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoSrc}
              width={190}
              height={190}
              alt=""
              style={{ filter: "drop-shadow(0 0 18px rgba(0,0,0,0.7))" }}
            />
          </div>
        </div>

        {/* Footer strip */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 6,
            right: 0,
            height: 52,
            background: "rgba(0,0,0,0.35)",
            display: "flex",
            alignItems: "center",
            paddingLeft: 66,
            paddingRight: 72,
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              color: "rgba(255,255,255,1)",
              fontSize: 16,
              fontFamily: "Inter",
              letterSpacing: "0.04em",
            }}
          >
            www.eventplannerstanzania.co.tz
          </span>
          <span
            style={{
              color: "rgba(255,255,255,1)",
              fontSize: 14,
              fontFamily: "Inter",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Tanzania · East Africa
          </span>
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
