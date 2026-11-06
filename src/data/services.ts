export type ServiceLine = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  body: string[];
  examples?: string[];
  proof: string;
  cta: string;
};

export const servicesIntro = {
  eyebrow: "What we build",
  title: "Two ways we build with you.",
  description:
    "Whether you're starting from an idea or you already run a business, we'll build the app you need.",
};

export const serviceLines: ServiceLine[] = [
  {
    id: "greenfield",
    eyebrow: "From an idea",
    title: "Turn your idea into a real app.",
    intro:
      "We build web and mobile apps for people with an idea and no technical co-founder, from the first sketch to a product people actually use. You own it the whole way.",
    body: [
      "You don't need a technical co-founder or a finished plan to start. You just need the idea. Our own products started the same way, and we know how to take one all the way to launch.",
      "What we build: new web apps, iOS and Android apps, everything behind them, and the launch itself. You end up owning dependable software, not a fragile prototype.",
      "It's your call from the first sketch to launch day. We do the building; you decide where it goes.",
    ],
    proof:
      "StreamHalla started as an idea about streamer communities. It's live today.",
    cta: "Tell us what you're building. We'll figure out the rest together.",
  },
  {
    id: "for-your-business",
    eyebrow: "For your business",
    title: "Your business deserves a custom app.",
    intro:
      "We build the custom web or mobile app your business needs: a booking app, an online store, a customer portal, or whatever fits. You stay in charge; we do the building.",
    body: [
      "You don't need to bend your business to fit an off-the-shelf platform that almost works. We build around how your business actually runs, and because we come from healthcare, finance, and nuclear power, we take your customers' data seriously.",
    ],
    examples: [
      "a barber or salon that wants a custom booking app",
      "a storefront that wants a real ecommerce store, not a rented template",
      "a restaurant that wants its own online ordering and a loyalty app",
      "a gym or studio that wants class scheduling and memberships in one place",
      "a contractor or home-services crew that wants quoting and job scheduling on their phones",
      "a dental or medical practice that wants a HIPAA-compliant patient portal",
      "a property manager that wants a tenant portal that actually works",
      "a field or logistics team that wants an offline-first app for where the signal drops",
    ],
    proof:
      "Core Property Ventures, a Jacksonville real estate investor, needed more than its Squarespace site. We built a new one around the QR code on its postcards, with a contact form that turns a scan into a conversation.",
    cta: "Tell us about your business and what you want to build. We'll figure out the rest together.",
  },
];
