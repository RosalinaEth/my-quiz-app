// app/api/submit/route.ts
import { NextResponse } from "next/server"

export async function POST() {
  return NextResponse.json({
    version: "vNext",
    image: "https://my-quiz-app-wff4.vercel.app/images/water-farcaster-hyouka.jpg",
    post_url: "https://my-quiz-app-wff4.vercel.app/api/submit",
    buttons: [
      { label: "Water", action: "post" },
      { label: "Air", action: "post" },
      { label: "Earth", action: "post" },
      { label: "Fire", action: "post" }
    ]
  })
}
