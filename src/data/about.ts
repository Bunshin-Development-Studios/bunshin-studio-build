export type Principal = {
  name: string;
  title: string;
  credentials: string[];
  bio: string[];
  highlights: { label: string; value: string }[];
};

export type CompanyFact = {
  label: string;
  value: string;
};

export const aboutIntro = {
  eyebrow: "About",
  title: "We make the imagined real.",
  description:
    "Bunshin is a veteran-owned studio. We spent our careers on hard problems in high-stakes places like the Navy and nuclear power, and now we use that discipline to build web and mobile apps for founders and businesses. We've shipped our own products to prove it.",
};

export const companyFacts: CompanyFact[] = [
  { label: "Founded", value: "2025" },
  { label: "Based", value: "St. Augustine, FL" },
  { label: "Reach", value: "Remote-native; we build for clients anywhere" },
  { label: "Veteran-owned", value: "UEI + CAGE registered" },
];

export const principals: Principal[] = [
  {
    name: "Rafael Bejaran",
    title: "Operations & Strategy",
    credentials: ["PMP®", "CSM®", "B.S. Business Administration"],
    bio: [
      "Rafael is personally accountable for your build, and he's the same person who scoped it. He learned that ownership in the Navy: safety-of-flight radar on aircraft carriers and fleet-wide operational readiness across the 2nd, 5th, and 7th Fleets, where failure was never just a ticket.",
      "Off the clock, his side projects have a habit of becoming his life. One Ethereum mining rig became many, until he'd filled a friend's entire house with GPU clusters, and that's what pulled him into Web3, where he ran token sales, smart contracts, and RWA tokenization and learned what we still use on every build: how a real community forms around a product. Years later, an AI app he was tinkering with turned into Bunshin.",
      "PMP- and CSM-certified, he keeps every build on track and knows what makes people want to use a product.",
    ],
    highlights: [
      { label: "Navy", value: "2nd · 5th · 7th Fleet radar" },
      { label: "Then", value: "Web3: token sales, smart contracts, RWA" },
      { label: "Certified", value: "PMP® · CSM®" },
      { label: "Now", value: "Operations & Strategy at Bunshin" },
    ],
  },
  {
    name: "Jose Diaz",
    title: "Technology & Architecture",
    credentials: ["B.S. Mathematical Sciences, Penn State", ".NET 8", "Azure", "AWS"],
    bio: [
      "Jose can't propose a solution without building it first. Hand him a set of requirements and he's already making it real, so the rest of us have learned to keep him at bay until we're sure we want the thing, because once the idea lands there's no stopping him.",
      "That compulsion runs on nearly fifteen years in software's least forgiving corners: AT&T, Assurant, Talen Energy's Susquehanna nuclear plant, and a 100% HIPAA-compliant health-records migration at Jefferson Health, places where a missed detail causes real-world problems. Building to compliance standards is his default.",
      "His ideas become our products, and every line of production code at Bunshin passes through his review.",
    ],
    highlights: [
      { label: "Built at", value: "AT&T · Assurant · Susquehanna Nuclear · Jefferson Health" },
      { label: "Track record", value: "100% HIPAA-compliant cloud migration" },
      { label: "Experience", value: "~15 years, regulated environments" },
      { label: "Stack", value: ".NET 8 · Azure · AWS · Docker" },
    ],
  },
];
