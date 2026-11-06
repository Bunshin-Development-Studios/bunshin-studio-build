"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Work = {
  id: string;
  name: string;
  kind: string;
  status: string;
  image: string;
  alt: string;
  fit?: "cover" | "logo";
};

const work: Work[] = [
  {
    id: "streamhalla",
    name: "StreamHalla",
    kind: "Your stream analyst for Twitch, YouTube and Kick",
    status: "Live",
    image: "/home/sh-hero.jpg",
    alt: "StreamHalla homepage: your stream analyst, level up every stream",
  },
  {
    id: "animal-control-platform",
    name: "Animal Control",
    kind: "Software for animal control agencies and shelters",
    status: "Available",
    image: "/home/acp-dispatch.jpg",
    alt: "Animal control dispatch console: live case queue sorted by SLA risk beside a map of officers",
  },
  {
    id: "fishing-with-friends",
    name: "Fishing with Friends",
    kind: "A fishing app for iOS and Android that works with no signal",
    status: "Private beta",
    image: "/home/fwf-catch-square.jpg",
    alt: "Fishing with Friends activity feed: an angler on a dock holding a largemouth bass",
  },
  {
    id: "core-property-ventures",
    name: "Core Property Ventures",
    kind: "Website for a Jacksonville real estate investor",
    status: "Delivered",
    image: "/portfolio/core-property-ventures/logo.png",
    alt: "Core Property Ventures logo",
    fit: "logo",
  },
];

/**
 * Work: the names of everything we've shipped scroll down the left while one large
 * frame holds on the right, showing whichever name is at the centre of the screen.
 */
export default function HomeWork() {
  const [current, setCurrent] = useState(0);
  const items = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setCurrent(Number((e.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-49% 0px -49% 0px", threshold: 0 },
    );
    items.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const item = work[current];

  return (
    <section className="work" aria-labelledby="work-title">
      <div className="work__run">
      <div className="work__hold">
        <div className="work__frame">
          {work.map((w, i) => (
            <img
              key={w.id}
              src={w.image}
              alt={w.alt}
              width={900}
              height={900}
              loading="eager"
              decoding="async"
              className={`work__pic ${w.fit === "logo" ? "work__pic--logo" : ""} ${i === current ? "is-current" : ""}`}
            />
          ))}
        </div>
        <p className="work__fact work__fact--kind" aria-hidden="true">{item.kind}</p>
        <p className="work__fact work__fact--status" aria-hidden="true">{item.status}</p>
      </div>

      <h2 id="work-title" className="work__title">
        Products we&apos;ve built
      </h2>
      <ol className="work__list">
        {work.map((w, i) => (
          <li
            key={w.id}
            data-index={i}
            ref={(el) => {
              items.current[i] = el;
            }}
            className={i === current ? "is-current" : ""}
          >
            <img
              src={w.image}
              alt={w.alt}
              width={900}
              height={900}
              loading="lazy"
              decoding="async"
              className={`work__pic-inline ${w.fit === "logo" ? "work__pic--logo" : ""}`}
            />
            <Link href={`/portfolio/${w.id}`} className="work__name" onFocus={() => setCurrent(i)}>
              {w.name}
            </Link>
            <p className="work__facts-mobile">
              <span>{w.kind}</span>
              <span>{w.status}</span>
            </p>
          </li>
        ))}
      </ol>
      </div>
      <p className="work__more">
        <Link href="/portfolio" className="link link--strong">
          See all the work
        </Link>
      </p>
    </section>
  );
}
