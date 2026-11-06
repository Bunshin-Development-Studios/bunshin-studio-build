"use client";

import { useId, useState } from "react";
import Link from "next/link";
import type { FaqItem } from "@/data/faq";

/**
 * FAQ: questions on the left, one answer large on the right; the answer follows
 * hover, click and focus. On a phone each answer opens under its question.
 */
export default function HomeFaq({ items }: { items: FaqItem[] }) {
  const [current, setCurrent] = useState(0);
  const base = useId();

  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <div className="faq__list">
        <h2 id="faq-title" className="faq__title">
          Questions people ask
        </h2>
        <ul>
          {items.map((item, i) => {
            const selected = i === current;
            return (
              <li key={item.id} className={selected ? "is-current" : ""}>
                <button
                  type="button"
                  className="faq__q"
                  aria-expanded={selected}
                  aria-controls={`${base}-a-${i}`}
                  onClick={() => setCurrent(i)}
                  onMouseEnter={() => setCurrent(i)}
                  onFocus={() => setCurrent(i)}
                >
                  <span className="faq__dot" aria-hidden="true" />
                  {item.question}
                </button>
                <div id={`${base}-a-${i}`} className="faq__a-inline" hidden={!selected}>
                  <p>{item.answer}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <Link href="/faq" className="link link--strong faq__more">
          See every question
        </Link>
      </div>
      <div className="faq__pane" aria-hidden="true">
        {items.map((item, i) => (
          <p key={item.id} className={`faq__answer ${i === current ? "is-current" : ""}`}>
            {item.answer}
          </p>
        ))}
      </div>
    </section>
  );
}
