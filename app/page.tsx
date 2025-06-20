// app/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/lib/questions";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { ElementType } from "@/lib/questions";
import Image from "next/image";

const results = {
  Water: {
    title: "You’re the Empath",
    summary: "sympathetic and inspiring",
    description:
      "Deeply intuitive, nurturing, and emotionally wise. *Psychology insight:* Your mirror neurons are highly active, making you a natural healer (supported by theories of emotional intelligence).",
    image: "/farcaster_hyouka_1.webp",
  },
  Air: {
    title: "You’re the Visionary",
    summary: "creative and curious",
    description:
      "Innovative, free-spirited, and intellectually restless. *Psychology insight:* Your openness to experience (Big Five trait) fuels creativity but may challenge routine.",
    image: "/farcaster_hyouka_2.webp",
  },
  Earth: {
    title: "You’re the Anchor",
    summary: "reliable and grounded",
    description:
      "Practical, reliable, and rooted in what’s real. *Psychology insight:* Your high conscientiousness provides stability but may resist spontaneity.",
    image: "/farcaster_hyouka_3.webp",
  },
  Fire: {
    title: "You’re the Catalyst",
    summary: "bold and unstoppable",
    description:
      "Bold, energetic, and unstoppable. *Psychology insight:* Your high extraversion and dopamine-driven motivation thrive on achievement (linked to Type A traits).",
    image: "/farcaster_hyouka_4.webp",
  },
};

function getFinalResult(score: Record<string, number>) {
  const sorted = Object.entries(score).sort((a, b) => b[1] - a[1]);
  if (sorted[0][1] === sorted[1][1]) {
    return `You’re a dynamic blend: ${sorted[0][0]} + ${sorted[1][0]}`;
  }
  return sorted[0][0];
}

export default function Page() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState({ Water: 0, Air: 0, Earth: 0, Fire: 0 });
  const [finished, setFinished] = useState(false);
  const router = useRouter();

  const initialScore = {
  Water: 0,
  Air: 0,
  Earth: 0,
  Fire: 0,
};

  const handleAnswer = (type: string) => {
    setScore((prev) => ({ ...prev, [type]: prev[type] + 1 }));
    if (step + 1 >= questions.length) {
      setFinished(true);
    } else {
      setStep(step + 1);
    }
  };

  const resultKey = getFinalResult(score);

  const handlePublish = () => {
    if (typeof resultKey === "string" && results[resultKey as keyof typeof results]) {
      const summary = results[resultKey as keyof typeof results].summary;
      const query = `?type=${encodeURIComponent(resultKey)}&summary=${encodeURIComponent(summary)}`;
      router.push(`/result${query}`);
    }
  };

  const result = results[resultKey as keyof typeof results];
const handleAnswer = (type: any) => {
  setScore((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  if (step + 1 >= questions.length) {
    setFinished(true);
  } else {
    setStep(step + 1);
  }
};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-6">
          {!finished ? (
            <div>
              <h2 className="text-xl font-bold mb-4">{questions[step].text}</h2>
              
                <div className="mt-4 grid grid-cols-1 gap-2">
                  {questions[step].options.map((option, index) => (
                <Button
                key={index}
              onClick={() => handleAnswer(option.type)}
  variant="outline"
>
  {option.label}
</Button>
        ))}
          </div>

            </div>
          ) : (
            <div className="text-center">
              {result?.image && (
                <Image
                  src={result.image}
                  alt={resultKey}
                  width={400}
                  height={300}
                  className="rounded-lg mx-auto mb-4"
                />
              )}
              <h2 className="text-2xl font-bold mb-2">
                {result?.title || resultKey}
              </h2>
              <p className="mb-4 whitespace-pre-line">
                {result?.description || "You're a unique blend of elements!"}
              </p>
              <div className="space-y-2">
                <Button className="w-full" onClick={() => window.location.reload()}>
                  See mine
                </Button>
                <Button className="w-full" onClick={handlePublish} variant="secondary">
                  Publish to Warpcast
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
