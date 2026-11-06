export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    id: "what-is-bunshin",
    question: "What does “Bunshin” mean?",
    answer:
      "It's Japanese for shadow clone: the trick of multiplying yourself to be in more than one place at once. That's how we work: a small team that ships like a much bigger one, and you always get the actual builders, never an account manager in between.",
  },
  {
    id: "idea-no-cofounder",
    question: "Can you build an app from just an idea? I don't have a technical co-founder.",
    answer:
      "Absolutely, that's our favorite way to start. You don't need a co-founder, a finished plan, or a single line of code. You just need the idea. Our own products started the same way, and we'll take yours all the way to a launched web or mobile app.",
  },
  {
    id: "existing-business",
    question: "Can you build a custom app for my existing business?",
    answer:
      "Yes, and you won't have to bend your business to fit a template that almost works. A booking app, an online store, a customer portal, a mobile app for your team, we build around how your business actually runs. ",
  },
  {
    id: "cost",
    question: "How much does it cost to build a custom app?",
    answer:
      "It depends on what you're building, so we don't post a one-size number that would be wrong for you. The honest version: after a short conversation about what you want, we come back with a clear, fixed price for the actual thing you want, and it costs nothing to find out. No hourly billing and no surprise charges.",
  },
  {
    id: "timeline",
    question: "How long does it take to build an app?",
    answer:
      "Usually weeks, not years, because senior builders work on it directly with no hand-offs. A first version is faster than a full platform, and we'll give you a real timeline along with your fixed price before anything starts.",
  },
  {
    id: "ownership",
    question: "Do I own the app and the code you build?",
    answer:
      "Yes, completely. The app and the code are yours from start to finish, and nothing locks you to us.",
  },
  {
    id: "who-builds",
    question: "Who actually builds my product?",
    answer:
      "Senior builders, directly. The people who scope your build are the people who ship it, with no juniors learning on your dime and no account managers in between. We also use our own AI tools, so a small team can ship like a much bigger one.",
  },
  {
    id: "ai",
    question: "Do you build with AI, and will my product depend on it?",
    answer:
      "We use AI constantly to build faster, but your product doesn't run on it. You own ordinary, dependable software, with no ongoing AI costs and no AI making things up inside your app.",
  },
  {
    id: "location",
    question: "Where are you located, and do you work remotely?",
    answer:
      "We're in the Jacksonville and St. Augustine area of Florida, and we're remote-native, so we build for people anywhere. Local or across the country, you get the same thing: direct access to the builders making your product.",
  },
];
