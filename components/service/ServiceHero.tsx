"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight, ArrowRight, Sparkle, X } from "../Icons";
import { MINI_TRUST, type Tip } from "./serviceDetailData";
import { QUOTE_FORM_URL } from "../quoteLink";

function VerityTip({ tips }: { tips: Tip[] }) {
  const [i, setI] = useState(0);
  const [dismissed, setDismissed] = useState(false);
  const tip = tips[i];

  if (dismissed) return null;

  return (
    <aside className="verity-tip reveal" aria-label="Verity Tip">
      <div className="verity-tip-head">
        <span className="verity-tip-label">
          <Sparkle aria-hidden="true" />
          Verity Tip
        </span>
        <button type="button" className="verity-tip-close" aria-label="Dismiss tip" onClick={() => setDismissed(true)}>
          <X />
        </button>
      </div>
      <div className="verity-tip-photo">
        <Image src={tip.image} alt="" fill sizes="280px" style={{ objectFit: "cover" }} />
      </div>
      <b>{tip.title}</b>
      <p>{tip.body}</p>
      <a href="/#services" className="verity-tip-more">Read the full guide <ArrowRight /></a>
      <div className="verity-tip-dots">
        {tips.map((t, idx) => (
          <button
            key={t.title}
            type="button"
            className={idx === i ? "verity-tip-dot is-active" : "verity-tip-dot"}
            aria-label={`Show tip ${idx + 1}`}
            onClick={() => setI(idx)}
          />
        ))}
      </div>
    </aside>
  );
}

export default function ServiceHero({
  title,
  photo,
  tagline,
  description,
  tips,
}: {
  title: string;
  photo: string;
  tagline: string;
  description: string;
  tips: Tip[];
}) {
  return (
    <section className="service-hero">
      <div className="wrap">
        <nav className="breadcrumb reveal" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <ChevronRight aria-hidden="true" />
          <a href="/services/">Services</a>
          <ChevronRight aria-hidden="true" />
          <span aria-current="page">{title}</span>
        </nav>

        <div className="service-hero-grid">
          <div className="service-hero-main reveal">
            <span className="service-badge">{title.toUpperCase()}</span>
            <h1>{title}</h1>
            <p className="service-tagline">{tagline}</p>
            <p className="service-desc">{description}</p>

            <a href={QUOTE_FORM_URL} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg">
              Get My Personalized Quote
              <ArrowRight />
            </a>

            <div className="service-mini-trust">
              {MINI_TRUST.map(({ icon: Icon, title: itemTitle, sub }) => (
                <div className="service-mini-trust-item" key={itemTitle}>
                  <Icon aria-hidden="true" />
                  <div>
                    <b>{itemTitle}</b>
                    {sub && <span>{sub}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="service-hero-photo reveal">
            <Image
              src={photo}
              alt={`A bright, freshly cleaned space representing ${title}`}
              fill
              priority
              sizes="(max-width: 1080px) 100vw, 42vw"
              style={{ objectFit: "cover" }}
            />
          </div>

          <VerityTip tips={tips} />
        </div>
      </div>
    </section>
  );
}
