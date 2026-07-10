'use client';
import { useState, useEffect, useRef, useCallback } from 'react';

const REVIEWS = [
  {
    author: "Lisa M.",
    initials: "LM",
    text: "Verity Cleaning has been doing our bi-weekly cleaning for six months now. They are incredibly thorough, always on time, and my house has never felt cleaner. I love their attention to detail and green products.",
    time: "2 weeks ago",
  },
  {
    author: "Robert C.",
    initials: "RC",
    text: "Had them do a deep clean before listing our house for sale. They scrubbed places I didn't even know could get dirty. The baseboards and kitchen look brand new. The buyer remarked on how pristine the space felt!",
    time: "1 month ago",
  },
  {
    author: "Tammy B.",
    initials: "TB",
    text: "As a busy working mom, having a trustworthy team is everything. The staff at Verity are professional, friendly, and background-checked, which gives me complete peace of mind. Truly spectacular service.",
    time: "1 month ago",
  },
  {
    author: "Greg S.",
    initials: "GS",
    text: "We hired Verity to clean our local retail office space weekly. They are reliable, thorough, and their pricing is extremely transparent. Great communication, honest work, and consistent results.",
    time: "2 months ago",
  },
  {
    author: "Karen A.",
    initials: "KA",
    text: "Highly recommend Verity! They show up on time, respect our space, and use eco-friendly products that are safe for our golden retriever. Honest, hard-working people who take pride in what they do.",
    time: "3 months ago",
  },
];

export default function ReviewSlider() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = REVIEWS.length;

  const go = useCallback((dir: number) => {
    setIdx(i => (i + dir + total) % total);
  }, [total]);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => go(1), 6000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [paused, go]);

  const r = REVIEWS[idx];

  return (
    <div
      className="rslider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="rslide" key={idx}>
        <div className="rstars" aria-label="5 out of 5 stars">
          &#9733;&#9733;&#9733;&#9733;&#9733;
        </div>
        <blockquote className="rtext">&ldquo;{r.text}&rdquo;</blockquote>
        <div className="rwho">
          <div className="rav">{r.initials}</div>
          <div>
            <b>{r.author}</b>
            <span className="rtime">{r.time} &bull; Google Review</span>
          </div>
        </div>
        <span 
          className="case-stamp" 
          aria-hidden="true" 
          style={{ 
            color: "var(--teal)", 
            borderColor: "var(--teal)",
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "0.6rem",
            transform: "rotate(8deg)",
            opacity: 0.65
          }}
        >
          VERIFIED<br />CLEAN
        </span>
      </div>

      <div className="rcontrols">
        <button className="rarrow" onClick={() => { go(-1); setPaused(true); }} aria-label="Previous review">&#8249;</button>
        <div className="rdots">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              className={`rdot${i === idx ? ' active' : ''}`}
              onClick={() => { setIdx(i); setPaused(true); }}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
        <button className="rarrow" onClick={() => { go(1); setPaused(true); }} aria-label="Next review">&#8250;</button>
      </div>
    </div>
  );
}
