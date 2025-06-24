// app/head.tsx (أو app/page.tsx لو بتكتبي الهيدر هنا)
export default function Head() {
  return (
    <>
      <title>Which Element Are You?</title>
      <meta name="description" content="Take the elemental personality quiz!" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Which Element Are You?" />
      <meta name="twitter:image" content="https://my-quiz-app-wff4.vercel.app/images/which-element-are-you.jpg" />
      <meta property="og:title" content="Which Element Are You?" />
      <meta property="og:image" content="https://my-quiz-app-wff4.vercel.app/images/which-element-are-you.jpg" />
    </>
  )
}
