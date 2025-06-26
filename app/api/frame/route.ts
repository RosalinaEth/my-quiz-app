// app/api/frame/route.ts
import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    version: "vNext",
    name: "Personality Quiz",
    image: "https://my-quiz-app-wff4.vercel.app/images/which-element-are-you.v2.jpg",
    post_url: "https://my-quiz-app-wff4.vercel.app/api/submit",
    buttons: [
      { label: "Start quiz", action: "post" }
    ]
  })
}
