import Image from "next/image";
import { ArrowRight, Sparkle } from "./Icons";
import { QUOTE_URL } from "./quoteLink";
import { TRUST_ITEMS } from "./OperationalStrip";
import { STEPS } from "./ProcessSection";
import { SERVICE_DETAILS } from "./service/serviceDetailData";
import { TRANSFORMATIONS } from "./transformationsData";

/* The trust, pricing and booking sections on each city page — the ground a
   franchise city page (MaidPro Hoover was the benchmark) covers and ours did
   not. Every line restates something already published elsewhere on the
   site: the trust strip, the condition scale, the standard-clean frequency
   discounts, the quote FAQ and the "How Verity Works" steps. Nothing here
   claims local job volume, a price, or a response time. */

type SectionProps = { city: string; sky: boolean };

const sectionClass = (sky: boolean) => `section${sky ? " tone-sky" : ""}`;

export function AreaWhyVerity({ city, sky }: SectionProps) {
  return (
    <section className={sectionClass(sky)}>
      <div className="wrap">
        <div className="center section-head">
          <h2 className="section-title">
            Why {city} homeowners choose Verity
            <Sparkle aria-hidden="true" />
          </h2>
          <p className="lead">
            A locally owned and operated house cleaning company serving the Birmingham metro.
          </p>
        </div>
        <div className="area-why-grid">
          {TRUST_ITEMS.map(({ icon: Icon, title, sub }) => (
            <div className="area-why-card" key={title}>
              <span className="ic" aria-hidden="true"><Icon /></span>
              <b>{title}</b>
              <p>{sub}</p>
            </div>
          ))}
        </div>
        <p className="area-why-note">
          Something missed? Tell us within 24 hours and we come back to make it right.
        </p>
      </div>
    </section>
  );
}

export function AreaPricing({ city, sky }: SectionProps) {
  const tiers = SERVICE_DETAILS["standard-cleaning"]?.frequencyTiers ?? [];
  return (
    <section className={sectionClass(sky)}>
      <div className="wrap">
        <div className="center section-head">
          <h2 className="section-title">
            How pricing works in {city}
            <Sparkle aria-hidden="true" />
          </h2>
          <p className="lead">Every quote is personalized, and the rules behind it are simple.</p>
        </div>
        <div className="area-price-grid">
          <div className="area-price-card">
            <b>No trip charge</b>
            <p>
              {`There is no trip charge and no zone pricing anywhere we clean, ${city} included. Your quote reflects your home and the service you book — nothing else.`}
            </p>
          </div>
          <div className="area-price-card">
            <b>Priced on your home</b>
            <p>
              Square footage, bedrooms and bathrooms, the service you pick, and the condition
              of the home on our 1&ndash;10 scale: light (1&ndash;3), moderate (4&ndash;6) or
              heavy (7&ndash;9). Extraordinary clutter (10) is custom priced.{" "}
              <a href="/faq/#quotes">How the scale works</a>
            </p>
          </div>
          <div className="area-price-card">
            <b>Save with a schedule</b>
            <ul>
              {tiers.map((t) => (
                <li key={t.label}><strong>{t.discount}</strong> {t.label.toLowerCase()} recurring cleans</li>
              ))}
            </ul>
          </div>
          <div className="area-price-card">
            <b>Pay after the clean</b>
            <p>
              No card needed for a quote and no payment when you book. You pay after your
              service is complete.
            </p>
          </div>
        </div>
        <p className="homes-more">
          <a href={QUOTE_URL}>Get your free {city} quote <ArrowRight /></a>
        </p>
      </div>
    </section>
  );
}

export function AreaHowItWorks({ city, sky }: SectionProps) {
  return (
    <section className={sectionClass(sky)}>
      <div className="wrap">
        <div className="center section-head">
          <h2 className="section-title">
            How booking a clean in {city} works
            <Sparkle aria-hidden="true" />
          </h2>
        </div>
        <div className="how-flow">
          {STEPS.map(({ Icon, title, body }, i) => (
            <div className="how-step" key={title}>
              <div className="how-step-node">
                <span className="ic" aria-hidden="true"><Icon /></span>
                <b>{title}</b>
                <p>{body}</p>
              </div>
              {i < STEPS.length - 1 && (
                <span className="how-arrow" aria-hidden="true"><ArrowRight /></span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Gallery photos for a focus section, by the tags that match its service.
   They are labelled as the service's photos, never as the city's: none of
   the current gallery is tagged by town. `seed` staggers the pick so two
   cities with the same focus service do not show the same pair. */
const FOCUS_TAGS: Record<string, string[]> = {
  "move-in-move-out": ["Move-out clean"],
  "deep-cleaning": ["Deep clean", "Every clean"],
  "standard-cleaning": ["Every clean"],
};

export function FocusPhotos({ serviceSlug, label, seed }: { serviceSlug: string; label: string; seed: number }) {
  const tags = FOCUS_TAGS[serviceSlug] ?? [];
  const pool = TRANSFORMATIONS.filter((t) => tags.includes(t.tag) && !t.wide);
  if (pool.length === 0) return null;
  const picks = [0, 1].map((i) => pool[(seed * 2 + i) % pool.length]).filter((t, i, a) => a.indexOf(t) === i);
  return (
    <div className="wrap area-focus-photos">
      <p className="area-focus-photos-label">{label}</p>
      <div className="ba-grid">
        {picks.map((t) => (
          <figure className="ba-card" key={t.image}>
            <Image src={t.image} alt={t.alt} width={1000} height={1000} sizes="(max-width: 760px) 100vw, 560px" />
            <figcaption>
              <b>{t.title}</b>
              <p>{t.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
