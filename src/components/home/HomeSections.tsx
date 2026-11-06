import Link from "next/link";

/** Two doors: a statement cell on paper, the two ways in as dark rows. */
export function HomeDoors() {
  const doors = [
    {
      title: "Got an idea for an app?",
      body: "You don't need a technical co-founder or a finished plan. We take it from a rough idea to a launched web or mobile app.",
      terms: ["Web apps", "iOS and Android", "Launch"],
      href: "/services/greenfield",
      cta: "Build from an idea",
    },
    {
      title: "Need an app for your business?",
      body: "A booking app, an online store, a customer portal. We build around how your business actually runs.",
      terms: ["Booking", "Online stores", "Customer portals"],
      href: "/services/for-your-business",
      cta: "Build for your business",
    },
  ];

  return (
    <section className="doors" aria-labelledby="doors-title">
      <div className="doors__cell">
        <h2 id="doors-title" className="doors__title" data-reveal>
          <span>It&apos;s your idea.</span>
          <span className="doors__title-right">We build it.</span>
        </h2>
        <div className="doors__foot" data-reveal>
          <p>Starting from an idea or already running a business, there are two ways in.</p>
          <Link href="/services" className="link link--strong">
            See what we build
          </Link>
        </div>
      </div>
      <div className="doors__rows">
        {doors.map((d) => (
          <article key={d.href} className="doors__row" data-reveal>
            <h3>{d.title}</h3>
            <div className="doors__body">
              <p>{d.body}</p>
              <Link href={d.href} className="link link--strong">
                {d.cta}
              </Link>
            </div>
            <ul className="doors__terms" aria-label="Includes">
              {d.terms.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

/** Founders: who you'd actually talk to, with the way to reach them right beside it. */
export function HomeAbout() {
  const people = [
    {
      name: "Rafael Bejaran",
      role: "Operations and strategy",
      line: "U.S. Navy veteran who worked on safety-of-flight radar on aircraft carriers, then ran token sales and smart contracts in Web3. Scopes every build and stays accountable for it.",
    },
    {
      name: "Jose Diaz",
      role: "Technology and architecture",
      line: "Nearly fifteen years in software at AT&T, Assurant, Talen Energy and Jefferson Health. Reviews every line of production code.",
    },
  ];

  return (
    <section className="about" id="team" aria-labelledby="about-title">
      <div className="about__head" data-reveal>
        <h2 id="about-title">Meet the founders.</h2>
      </div>
      <div className="about__people">
        {people.map((p) => (
          <article key={p.name} className="about__person" data-reveal>
            <h3>{p.name}</h3>
            <p className="about__role">{p.role}</p>
            <p>{p.line}</p>
          </article>
        ))}
      </div>
      <div className="about__next">
        <Link href="/contact" className="button">
          Start a build
        </Link>
        <Link href="/about" className="link link--strong">
          Read our story
        </Link>
      </div>
    </section>
  );
}

/** Testimonial: one real speaker, a name block and a quote block. */
export function HomeTestimonial() {
  return (
    <section className="voice" aria-labelledby="voice-title">
      <div className="voice__name">
        <h2 id="voice-title" className="sr-only">
          What a client said
        </h2>
        <p className="voice__who">Holly McNally</p>
        <p className="voice__role">Core Property Ventures</p>
      </div>
      <figure className="voice__quote">
        <blockquote data-reveal>
          <p>
            &ldquo;The entire process was smooth and easy, with clear communication every step of the way and real,
            professional results.&rdquo;
          </p>
        </blockquote>
        <figcaption>
          <a href="https://share.google/2JKiabv9neB4VqipN" className="link link--strong" target="_blank" rel="noopener noreferrer">
            Read Holly&apos;s full review
          </a>
        </figcaption>
      </figure>
    </section>
  );
}

/** How a build works: four stages side by side on one screen, one colour field each. */
export function HomeSteps() {
  const steps = [
    { verb: "Tell", title: "Tell us what you're building", body: "Send us the idea, however rough it is. A few sentences is plenty." },
    { verb: "Define", title: "We define the first version together", body: "We work out the smallest version that does the job. That ships first." },
    { verb: "Launch", title: "We build it and launch it", body: "Real, working software in front of real people, fast." },
    { verb: "Grow", title: "Then the bells and whistles", body: "Once the first version is working, we add everything else." },
  ];

  return (
    <section className="steps" id="how-we-work" aria-labelledby="steps-title">
      <h2 id="steps-title" className="steps__title">
        How a build works
      </h2>
      <ol>
        {steps.map((s, i) => (
          <li key={s.verb} className={`steps__panel steps__panel--${i + 1}`}>
            <p className="steps__verb" aria-hidden="true">
              {s.verb}
            </p>
            <div className="steps__note" data-reveal>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

/** Footer: a single quiet line. */
export function HomeFooter() {
  return (
    <footer className="foot">
      <div className="foot__what">
        <img src="/brand/bunshin-light.svg" alt="Bunshin" width={190} height={170} className="foot__logo" />
        <p>Bunshin Development Studios. Engineering magic.</p>
      </div>
      <ul className="foot__links">
        <li><Link href="/services" className="link">What we build</Link></li>
        <li><Link href="/portfolio" className="link">Portfolio</Link></li>
        <li><Link href="/about" className="link">About</Link></li>
        <li><Link href="/faq" className="link">FAQ</Link></li>
        <li><Link href="/contact" className="link">Start a build</Link></li>
      </ul>
      <p className="foot__legal">
        © 2026, veteran-owned · <Link href="/privacy" className="link">Privacy</Link>
      </p>
    </footer>
  );
}
