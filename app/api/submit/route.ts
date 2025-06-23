// app/api/submit/route.ts
import { NextResponse } from "next/server";
import { questions } from "@/lib/questions";

export async function POST(req: Request) {
  const step = 0;
  const question = questions[step];
  const options = question.options.slice(0, 4);

  return NextResponse.json({
    version: "vNext",
    image: "https://my-quiz-app-wff4.vercel.app/images/og-placeholder.png",
    post_url: "https://my-quiz-app-wff4.vercel.app/api/submit",
    buttons: options.map((option) => ({
      label: option.label,
      action: "post",
      post_data: `answer=${option.type}&step=${step + 1}`,
    })),
  });
}
