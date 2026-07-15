"use client";

import { useState } from "react";

export default function TransformSlider({
  before,
  after,
}: {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
}) {
  const [pos, setPos] = useState(50);

  return (
    <div className="transform-slider">
      <img src={after.src} alt={after.alt} className="transform-img" />
      <img
        src={before.src}
        alt=""
        aria-hidden="true"
        className="transform-img transform-img--before"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      <div className="transform-handle" style={{ left: `${pos}%` }} aria-hidden="true">
        <span className="transform-handle-grip" />
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="transform-range"
        aria-label="Drag to compare before and after cleaning"
      />
      <span className="transform-tag transform-tag--before">Before</span>
      <span className="transform-tag transform-tag--after">After</span>
    </div>
  );
}
