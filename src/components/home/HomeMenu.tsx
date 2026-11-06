"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";

type MenuLink = { label: string; href: string };

/** Phone navigation: one word in the top-right corner that opens the links. */
export default function HomeMenu({ links }: { links: MenuLink[] }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="menu">
      <button
        ref={button}
        type="button"
        className="menu__toggle"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <div id={id} className="menu__sheet" hidden={!open}>
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Start a build
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
