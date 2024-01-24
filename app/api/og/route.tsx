import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title");
  const imageUrl = searchParams.get("image");

  // Construct absolute URL for the image
  const absoluteImageUrl = imageUrl
    ? `${req.nextUrl.origin}${imageUrl}`
    : null;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          fontWeight: 600,
          color: "white",
        }}
      >
        {absoluteImageUrl ? (
          <img
            src={absoluteImageUrl}
            alt=""
            width={1050}
            height={549}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        ) : (
          "no image"
        )}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: "66%",
            width: "100%",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)",
          }}
        />
        <h1
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            margin: 0,
            fontSize: 50,
            fontFamily: "NYT Cheltenham",
            maxWidth: 900,
            whiteSpace: "pre-wrap",
            letterSpacing: -1,
          }}
        >
          {title}
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
