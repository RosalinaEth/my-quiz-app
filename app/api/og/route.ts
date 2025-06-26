import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    version: "vNext",
    name: "Personality Quiz",
    image: "https://res.cloudinary.com/dzdas1gyp/image/upload/v1750974302/og-clean_h21k6u.jpg",
    post_url: "https://my-quiz-app-wff4.vercel.app/api/submit",
    buttons: [
      { label: "Start quiz", action: "post" }
    ]
  })
}
