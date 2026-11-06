import Link from "next/link";
import { homeLinks } from "./HomeHero";

/** Sticks to the top once the hero has passed, so the way in is never out of reach. */
export default function HomeBar() {
  return (
    <nav className="bar" aria-label="Page">
      <Link href="/" className="bar__mark" aria-label="Bunshin Development Studios, home">
        <img src="/brand/bunshin-mark-light.svg" alt="" width={46} height={36} />
      </Link>
      <ul className="bar__links">
        {homeLinks.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="link">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/contact" className="button bar__action">
        Start a build
      </Link>
    </nav>
  );
}
