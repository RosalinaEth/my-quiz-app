// app/result/page.tsx
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const results = {
  Water: {
    title: "You’re the Empath",
    summary: "sympathetic and inspiring",
    description:
      "Deeply intuitive, nurturing, and emotionally wise. *Psychology insight:* Your mirror neurons are highly active, making you a natural healer (supported by theories of emotional intelligence).",
    image: "/images/water-farcaster-hyouka.jpg",
  },
  Air: {
    title: "You’re the Visionary",
    summary: "creative and curious",
    description:
      "Innovative, free-spirited, and intellectually restless. *Psychology insight:* Your openness to experience (Big Five trait) fuels creativity but may challenge routine.",
    image: "/images/air-farcaster-hyouka.jpg",
  },
  Earth: {
    title: "You’re the Anchor",
    summary: "reliable and grounded",
    description:
      "Practical, reliable, and rooted in what’s real. *Psychology insight:* Your high conscientiousness provides stability but may resist spontaneity.",
    image: "/images/earth-farcaster-hyouka.jpg",
  },
  Fire: {
    title: "You’re the Catalyst",
    summary: "bold and unstoppable",
    description:
      "Bold, energetic, and unstoppable. *Psychology insight:* Your high extraversion and dopamine-driven motivation thrive on achievement (linked to Type A traits).",
    image: "/images/fire-farcaster-hyouka.jpg",
  },
};

export default function ResultPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const type = searchParams.get("type");
  const result = type && results[type as keyof typeof results];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-6 text-center">
          {result ? (
            <>
              {result.image && (
                <Image
                  src={result.image}
                  alt={type!}
                  width={400}
                  height={300}
                  className="rounded-lg mx-auto mb-4"
                />
              )}
              <h2 className="text-2xl font-bold mb-2">{result.title}</h2>
              <p className="mb-4 whitespace-pre-line">{result.description}</p>
              <Button className="w-full" onClick={() => router.push("/")}>
                See yours
              </Button>
            </>
          ) : (
            <div>
              <h2 className="text-xl font-semibold mb-2">Oops!</h2>
              <p className="mb-4">We couldn't find your result.</p>
              <Button className="w-full" onClick={() => router.push("/")}>
                Try the quiz
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
