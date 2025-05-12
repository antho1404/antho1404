import { ImageResponse } from "next/og";

type Props = {
  title: string;
  description: string;
  size: {
    width: number;
    height: number;
  };
};

export default function buildOgImage({ title, size, description }: Props) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#020618", // Slate gradient
          padding: "60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: "#fff",
          fontFamily: "Geist, sans-serif",
          position: "relative",
        }}
      >
        <div style={{ fontSize: 28, fontWeight: 600 }}>Anthony Estebe</div>

        <div
          style={{
            fontSize: 40,
            lineHeight: 1.2,
            whiteSpace: "pre-wrap",
            fontWeight: 700,
          }}
        >
          {title}
        </div>

        {description && (
          <div
            style={{
              fontSize: 24,
              lineHeight: 1.4,
              opacity: 0.5,
              fontWeight: 600,
            }}
          >
            {description}
          </div>
        )}

        <div
          style={{
            display: "flex",
            gap: "1em",
            alignItems: "center",
            opacity: 0.25,
            fontSize: 24,
          }}
        >
          antho1404.com
        </div>
      </div>
    ),
    {
      width: size.width,
      height: size.height,
      // fonts: [
      //   {
      //     name: "Inter",
      //     data: interSemiBold,
      //     style: "normal",
      //     weight: 400,
      //   },
      // ],
    }
  );
}
