"use client";

import { useState } from "react";

/* Placeholder before/after photos — swap public/before-placeholder.jpg
   and public/after-placeholder.jpg for real job photos once available.
   Plain <img> (not next/image) intentionally: this overlay technique
   needs both images absolutely positioned at the same natural size,
   which is simpler without next/image's wrapper/srcset behavior. */
export default function BeforeAfterSlider() {
  const [pos, setPos] = useState(50);

  return (
    <section className="section seedifference" id="results">
      <div className="wrap center reveal">
        <span className="eyebrow">See the Difference</span>
        <h2 style={{ marginTop: "12px" }}>A space you&rsquo;ll actually enjoy coming home to</h2>
        <p className="lead" style={{ margin: "14px auto 0" }}>
          Drag the slider to see the kind of difference a Verity clean makes.
        </p>
      </div>

      <div className="wrap">
        <div className="baslider">
          <div className="baslider-frame">
            <img src="/after-placeholder.jpg" alt="A bright, freshly cleaned home" className="ba-img" />
            <img
              src="/before-placeholder.jpg"
              alt=""
              aria-hidden="true"
              className="ba-img ba-before"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            />
            <div className="ba-handle" style={{ left: `${pos}%` }} aria-hidden="true">
              <span className="ba-handle-grip" />
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              className="ba-range"
              aria-label="Drag to compare before and after cleaning"
            />
            <span className="ba-label ba-label--before">Before</span>
            <span className="ba-label ba-label--after">After</span>
          </div>
        </div>
      </div>
    </section>
  );
}
