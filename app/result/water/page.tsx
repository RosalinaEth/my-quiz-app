// app/result/water/page.tsx
"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function WaterResult() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
        <Image
          src="/images/water-farcaster-hyouka.jpg"
          alt="Water Element"
          width={400}
          height={300}
          className="rounded-lg mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">You’re the Empath 💧</h1>
        <p className="mb-4">
          Deeply intuitive, nurturing, and emotionally wise. <br />
          <em>Psychology insight:</em> Your mirror neurons are highly active,
          making you a natural healer (supported by theories of emotional
          intelligence).
        </p>

        <div className="flex flex-col gap-2">
          <a
            href="https://warpcast.com/~/compose?text=I+got+Water+in+the+Element+Quiz!+Try+it+here&embeds=https://my-quiz-app-wff4.vercel.app/api/frame"
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
