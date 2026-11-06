import type { Metadata } from "next";
import "./home.css";
import HomeHero from "@/components/home/HomeHero";
import HomeBar from "@/components/home/HomeBar";
import HomeWork from "@/components/home/HomeWork";
import { HomeAbout, HomeDoors, HomeFooter, HomeSteps, HomeTestimonial } from "@/components/home/HomeSections";
import HomeFaq from "@/components/home/HomeFaq";
import HomeClose from "@/components/home/HomeClose";
import Reveal from "@/components/home/Reveal";
import { routeMetadata } from "@/data/seo";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = routeMetadata["/"];

const HOMEPAGE_FAQ = ["idea-no-cofounder", "cost", "ownership", "who-builds"];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function HomePage() {
  const homeFaq = HOMEPAGE_FAQ.map((id) => faqItems.find((i) => i.id === id)!).filter(Boolean);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <a href="#main" className="skip">
        Skip to content
      </a>
      <main id="main" className="home">
        <HomeHero />
        <HomeBar />
        <HomeWork />
        <HomeDoors />
        <HomeAbout />
        <HomeTestimonial />
        <HomeSteps />
        <HomeFaq items={homeFaq} />
        <HomeClose />
      </main>
      <HomeFooter />
      <Reveal />
    </>
  );
}
