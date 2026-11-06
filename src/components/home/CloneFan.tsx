import type { ReactNode } from "react";

type Screen = { src: string; alt: string };

type CloneFanProps = {
  /** What the front phone shows. */
  front: ReactNode;
  left: Screen;
  right: Screen;
  className?: string;
};

/**
 * The Bunshin mark as a page device: one phone in front, two clones fanned behind it.
 * Frames are drawn in CSS; every screen is a real product interface.
 */
export default function CloneFan({ front, left, right, className = "" }: CloneFanProps) {
  return (
    <div className={`fan ${className}`}>
      <div className="fan__phone fan__phone--left">
        <div className="fan__screen">
          <img src={left.src} alt={left.alt} width={600} height={1300} loading="lazy" decoding="async" />
        </div>
      </div>
      <div className="fan__phone fan__phone--right">
        <div className="fan__screen">
          <img src={right.src} alt={right.alt} width={600} height={1300} loading="lazy" decoding="async" />
        </div>
      </div>
      <div className="fan__phone fan__phone--front">
        <div className="fan__screen">{front}</div>
      </div>
    </div>
  );
}
