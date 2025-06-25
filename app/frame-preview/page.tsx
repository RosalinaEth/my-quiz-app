// app/frame-preview/page.tsx
export const metadata = {
  title: "Which Element Are You?",
  description: "Discover your element in this interactive personality quiz.",
  openGraph: {
    title: "Which Element Are You?",
    images: ["https://my-quiz-app-wff4.vercel.app/images/which-element-are-you.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Which Element Are You?",
    images: ["https://my-quiz-app-wff4.vercel.app/images/which-element-are-you.jpg"],
  },
};

export default function Page() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Redirecting to the quiz...</h1>
      <script dangerouslySetInnerHTML={{
        __html: `window.location.href = "/api/frame"`,
      }} />
    </div>
  );
}
