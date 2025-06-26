// app/api/frame/route.ts
import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    version: "vNext",
    name: "Personality Quiz",
    image: "https://i.imgur.com/7uT6g4z.jpeg",
    post_url: "https://my-quiz-app-wff4.vercel.app/api/submit",
    buttons: [
      { label: "Start quiz", action: "post" }
    ]
  })
}
