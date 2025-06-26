// app/frame-preview/page.tsx

export const metadata = {
  metadataBase: new URL("https://my-quiz-app-wff4.vercel.app"),
  title: "Which Element Are You?",
  description: "Discover your element in this interactive personality quiz.",
  openGraph: {
    title: "Which Element Are You?",
    images: [
      {
        url: "/images/which-element-are-you.final.jpg",
        width: 1200,
        height: 628,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Which Element Are You?",
    images: [
      {
        url: "/images/which-element-are-you.final.jpg",
        width: 1200,
        height: 628,
      },
    ],
  },
};

export default function Page() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Redirecting to the quiz...</h1>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.href = "/api/frame"`,
        }}
      />
    </div>
  );
}
