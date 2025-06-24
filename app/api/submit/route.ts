// app/api/submit/route.ts
import { NextResponse } from "next/server"
import { questions } from "@/lib/questions"

interface FrameRequestBody {
  untrustedData: {
    inputText?: string
    buttonIndex?: number
    castId?: { fid: number; hash: string }
    url?: string
    state?: string
    postBody?: string
  }
  trustedData?: any
}

export async function POST(req: Request) {
  const body = (await req.json()) as FrameRequestBody
  const postData = body.untrustedData?.postBody || ""

  const params = new URLSearchParams(postData)
  const step = parseInt(params.get("step") || "0")
  const answer = params.get("answer") as string | null
  const score: Record<string, number> = JSON.parse(
    params.get("score") || JSON.stringify({ Water: 0, Air: 0, Earth: 0, Fire: 0 })
  )

  // لو فيه إجابة، نعدّل السكور
  if (answer) {
    score[answer] = (score[answer] || 0) + 1
  }

  // لو وصلنا لنهاية الأسئلة، نعرض النتيجة
  if (step >= questions.length) {
    const top = Object.entries(score).sort((a, b) => b[1] - a[1])[0][0]
    const imageUrl = `https://my-quiz-app-wff4.vercel.app/images/${top.toLowerCase()}-farcaster-hyouka.jpg`

    return NextResponse.json({
      version: "vNext",
      image: imageUrl,
      post_url: "https://my-quiz-app-wff4.vercel.app/api/submit",
      buttons: [
        {
          label: "See yours",
          action: "link",
          target: "https://my-quiz-app-wff4.vercel.app",
        },
      ],
    })
  }

  const question = questions[step]
  const options = question.options.slice(0, 4)

  return NextResponse.json({
    version: "vNext",
    image: "https://my-quiz-app-wff4.vercel.app/images/which-element-are-you.png",
    post_url: "https://my-quiz-app-wff4.vercel.app/api/submit",
    buttons: options.map((option) => ({
      label: option.label,
      action: "post",
      post_data: `answer=${option.type}&step=${step + 1}&score=${encodeURIComponent(JSON.stringify(score))}`,
    })),
  })
} 
