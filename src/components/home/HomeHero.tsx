import Link from "next/link";
import CloneFan from "./CloneFan";
import HomeMenu from "./HomeMenu";

export const homeLinks = [
  { label: "What we build", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

/**
 * Hero: the logo is the page title, with the nav across from it, the pitch beneath
 * it, led by the idea box, and the live clone fan on top of everything, hanging over the red stripe below.
 */
export default function HomeHero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__open">
        <div className="hero__lede">
          <h1 id="hero-title" className="hero__brand">
            <span className="sr-only">Bunshin Development Studios</span>
            <img src="/brand/bunshin-light.svg" alt="" width={1900} height={1700} className="hero__logo" />
          </h1>

          <div className="hero__copy" data-reveal>
            <p className="hero__line">We build web and mobile apps.</p>
            <p className="hero__sentence">
              Make the imagined real. We&apos;re a veteran-owned studio in St. Augustine, FL, building for founders and
              businesses, and we&apos;ve shipped our own products to prove it.
            </p>
            <form className="hero__form" action="/contact/" method="get">
              <label htmlFor="hero-idea">What are you building?</label>
              <div className="hero__field">
                <input id="hero-idea" name="idea" type="text" maxLength={60} autoComplete="off" placeholder="A booking app" />
                <button type="submit" className="button">
                  Start a build
                </button>
              </div>
              <p className="hero__fact">You&apos;ll talk directly to the people who&apos;d build it.</p>
            </form>
            <Link href="/portfolio" className="link link--strong hero__work">
              See what we&apos;ve built
            </Link>
          </div>

          <nav className="hero__nav" aria-label="Main">
            <ul>
              {homeLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <HomeMenu links={homeLinks} />
        </div>

        <div className="hero__stage">
          <CloneFan
            className="fan--hero"
            left={{ src: "/home/screen-fwf-home.jpg", alt: "Fishing with Friends home screen: catch stats and a friend's catch" }}
            right={{ src: "/home/screen-acp-intake.jpg", alt: "Animal control field intake: photo step of a five-step wizard" }}
            front={
              <div className="fan__feed">
                <img
                  src="/home/sh-hero.jpg"
                  alt="StreamHalla homepage: your stream analyst, level up every stream"
                  width={900}
                  height={900}
                  fetchPriority="high"
                />
                <img
                  src="/home/sh-sentiment.jpg"
                  alt="StreamHalla sentiment timeline across a stream"
                  width={900}
                  height={900}
                />
                <img
                  src="/home/sh-card-square.jpg"
                  alt="StreamHalla: level up, every stream"
                  width={900}
                  height={900}
                />
              </div>
            }
          />
        </div>
      </div>

      <div className="hero__standard" id="our-standard">
        <div className="standard">
          <h2 className="sr-only">Our standard</h2>
          <blockquote className="standard__quote" data-reveal>
            <p>
              &ldquo;Failure never shows up on the spot. It shows up later, in operation, at inconvenient moments, at
              high cost.&rdquo;
            </p>
          </blockquote>
          <p className="standard__sign" data-reveal>
            Veteran-owned and operated, St. Augustine, FL
          </p>
        </div>
      </div>
    </section>
  );
}
