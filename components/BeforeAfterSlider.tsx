"use client";

import { useState } from "react";
import { Star } from "./Icons";

/* Placeholder before/after photos — swap public/before-placeholder.jpg
   and public/after-placeholder.jpg for real job photos once available.
   Plain <img> (not next/image) intentionally: this overlay technique
   needs both images absolutely positioned at the same natural size,
   which is simpler without next/image's wrapper/srcset behavior. */

/* PLACEHOLDER TESTIMONIAL — replace with a real customer quote/name
   before launch. Approved as a temporary placeholder while Verity is
   still building its review base. */
const TESTIMONIAL = {
  quote:
    "Verity is hands down the best cleaning service we've ever used. The communication is amazing, the team is so kind, and our home has never felt this clean.",
  author: "Sarah M.",
};

export default function BeforeAfterSlider() {
  const [pos, setPos] = useState(50);

  return (
    <section className="section reviews-section" id="reviews">
      <div className="wrap">
        <div className="reviews-grid">
          <div className="reveal">
            <span className="eyebrow">See the Difference</span>
            <h2 style={{ marginTop: "12px" }}>Real Homes. Real Results.</h2>
            <p className="lead" style={{ margin: "14px 0 0" }}>
              Drag the slider to see the kind of difference a Verity clean makes.
            </p>

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
            <p className="reviews-service-area">
              Proudly serving Pelham, Alabaster, Helena, Hoover, and surrounding Shelby County, AL.
            </p>
          </div>

          <div className="testimonial-card reveal">
            <span className="testimonial-quote-mark" aria-hidden="true">&ldquo;</span>
            <p className="testimonial-text">{TESTIMONIAL.quote}</p>
            <div className="testimonial-stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} />
              ))}
            </div>
            <p className="testimonial-author">&mdash; {TESTIMONIAL.author}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
