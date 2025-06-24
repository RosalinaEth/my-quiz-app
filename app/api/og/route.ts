// app/api/og/route.ts
import { NextResponse } from "next/server"

export async function GET() {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="og:title" content="Which Element Are You?" />
        <meta property="og:image" content="https://my-quiz-app-wff4.vercel.app/images/which-element-are-you.png" />
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
