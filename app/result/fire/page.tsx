// app/result/fire/page.tsx
"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function FireResult() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
        <Image
          src="/images/fire-farcaster-hyouka.jpg"
          alt="Fire Element"
          width={400}
          height={300}
          className="rounded-lg mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">You’re the Passionate One 🔥</h1>
        <p className="mb-4">
          Energetic, courageous, and fiercely driven. <br />
          <em>Psychology insight:</em> You likely score high on *extraversion* and *openness*, making you expressive, adventurous, and full of life.
        </p>

        <div className="flex flex-col gap-2">
          <a
            href="https://warpcast.com/~/compose?text=I+got+Fire+in+the+Element+Quiz!+Try+it+here&embeds=https://my-quiz-app-wff4.vercel.app/api/frame"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full">Share Result</Button>
          </a>

          <Button className="w-full" onClick={() => router.push("/")}>
            Take the Quiz Again
          </Button>
        </div>
      </div>
    </div>
  )
}
