export const metadata = {
  title: "Which Element Are You?",
  description: "Discover your element in this interactive personality quiz.",
  openGraph: {
    title: "Which Element Are You?",
    images: [
      {
        url: "https://res.cloudinary.com/dzdas1gyp/image/upload/v1750974302/og-clean_h21k6u.jpg",
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
        url: "https://res.cloudinary.com/dzdas1gyp/image/upload/v1750974302/og-clean_h21k6u.jpg",
        width: 1200,
        height: 628,
      },
    ],
  },
}

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
  )
}
