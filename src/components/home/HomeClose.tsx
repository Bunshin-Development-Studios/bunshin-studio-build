"use client";

import { useId, useState } from "react";
import CloneFan from "./CloneFan";

const PLACEHOLDER = "A booking app";

/**
 * The close: the clone-phone fan returns, and its front phone becomes the visitor's
 * idea as they type it. Start a build carries the idea into the contact form.
 */
export default function HomeClose() {
  const [idea, setIdea] = useState("");
  const inputId = useId();
  const shown = idea.trim() || PLACEHOLDER;

  return (
    <section className="close" aria-labelledby="close-title">
      <div className="close__object" aria-hidden="true">
        <CloneFan
          className="fan--close"
          left={{ src: "/home/screen-fwf-tournament.jpg", alt: "" }}
          right={{ src: "/home/screen-acp-intake.jpg", alt: "" }}
          front={
            <div className="clone-screen">
              <span className="clone-screen__by">Built by Bunshin</span>
              <span className="clone-screen__idea">{shown}</span>
              <span className="clone-screen__status">Launching soon</span>
            </div>
          }
        />
      </div>

      <div className="close__text">
        <h2 id="close-title">
          Let&apos;s talk about what you&apos;re building.
        </h2>
        <p>Send us the idea and we&apos;ll take it from there.</p>
        <form
          className="close__form"
          action="/contact"
          method="get"
        >
          <label htmlFor={inputId}>What are you building?</label>
          <input
            id={inputId}
            name="idea"
            type="text"
            maxLength={60}
            autoComplete="off"
            placeholder={PLACEHOLDER}
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
          />
          <p className="close__fact">A conversation, not paperwork. No sales call, no pressure.</p>
          <button type="submit" className="button">
            Start a build
          </button>
        </form>
      </div>
    </section>
  );
}
