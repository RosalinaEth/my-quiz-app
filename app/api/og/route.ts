// app/api/og/route.ts
import { NextResponse } from "next/server"

export async function GET() {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="og:title" content="Which Element Are You?" />
        <meta property="og:image" content="https://res.cloudinary.com/dzdas1gyp/image/upload/v1750974302/og-clean_h21k6u.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body>
        <p>OG image loaded</p>
      </body>
    </html>
  `
  return new NextResponse(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html",
    },
  })
}
