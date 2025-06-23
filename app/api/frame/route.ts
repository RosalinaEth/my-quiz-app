// app/api/frame/route.ts
import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    version: "vNext",
    name: "Personality Quiz",
    image: "https://yourdomain.vercel.app/og-placeholder.png",
    post_url: "https://yourdomain.vercel.app/api/submit",
    buttons: [
      { label: "Start quiz", action: "post" }
    ]
  })
}
