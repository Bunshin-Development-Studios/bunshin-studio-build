import type { Metadata } from "next"
import { siteConfig } from "@/data/seo"
import CaseStudyLayout from "@/components/CaseStudyLayout"
import StreamHallaCaseStudy from "@/content/case-studies/streamhalla.mdx"

const canonicalUrl = `${siteConfig.url}/portfolio/streamhalla/`

export const metadata: Metadata = {
  title: "StreamHalla: Your Stream Analyst for Twitch, YouTube & Kick | Case Study",
  description:
    "How Bunshin built StreamHalla, your stream analyst: a VOD analytics tool that reviews a Twitch, YouTube, or Kick stream with a sentiment timeline and five evidence-backed recommendations for your next stream.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "StreamHalla: Your Stream Analyst for Twitch, YouTube & Kick | Case Study",
    description:
      "How Bunshin built StreamHalla, your stream analyst: a VOD analytics tool that reviews a Twitch, YouTube, or Kick stream with a sentiment timeline and five evidence-backed recommendations for your next stream.",
    type: "article",
    url: canonicalUrl,
    images: [
      {
        url: `${siteConfig.url}/og/streamhalla.jpg`,
        width: 1200,
        height: 630,
        alt: "StreamHalla: your stream analyst for Twitch, YouTube, and Kick",
      },
    ],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${canonicalUrl}#article`,
      headline:
        "StreamHalla: Your Stream Analyst for Twitch, YouTube and Kick",
      description:
        "How Bunshin Development Studios built StreamHalla, a stream analyst for Twitch, YouTube, and Kick streamers: a sentiment timeline, a coaching plan in every review, and Streamer Trends that finds what draws your audience to you.",
      author: {
        "@type": "Organization",
        name: "Bunshin Development Studios",
        url: siteConfig.url,
      },
      publisher: {
        "@type": "Organization",
        name: "Bunshin Development Studios",
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/ghost.svg`,
        },
      },
      datePublished: "2026-06-25",
      dateModified: "2026-11-05",
      mainEntityOfPage: canonicalUrl,
      image: `${siteConfig.url}/og/streamhalla.jpg`,
      about: { "@id": `${canonicalUrl}#platform` },
      keywords:
        "stream analyst, VOD analytics, VOD review, sentiment timeline, coaching plan, streamer trends, Twitch, YouTube, Kick, content creator analytics, stream growth",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${canonicalUrl}#platform`,
      name: "StreamHalla",
      url: "https://streamhalla.com",
      sameAs: "https://streamhalla.com",
      operatingSystem: "Web",
      applicationCategory: "MultimediaApplication",
      description:
        "Your stream analyst: a VOD analytics tool for Twitch, YouTube, and Kick streamers. Paste your VOD link and get your stream reviewed, with five evidence-backed recommendations for your next stream.",
      creator: {
        "@type": "Organization",
        name: "Bunshin Development Studios",
        url: siteConfig.url,
      },
      datePublished: "2026-06",
      programmingLanguage: ["JavaScript", "TypeScript", "SQL"],
    },
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}#org`,
      name: "Bunshin Development Studios",
      url: siteConfig.url,
      logo: `${siteConfig.url}/ghost.svg`,
    },
  ],
}

export default function StreamHallaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseStudyLayout
        title="StreamHalla"
        category="Streaming Analytics"
        tags={[
          "React",
          "Node.js",
          "PostgreSQL",
          "Fly.io",
          "Docker",
          "LLM Pipeline",
        ]}
        publishDate="June 2026"
      >
        <StreamHallaCaseStudy />
      </CaseStudyLayout>
    </>
  )
}
