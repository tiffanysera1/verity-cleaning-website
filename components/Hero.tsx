import { Phone, Check, Sparkles } from "./Icons";
import QuoteForm from "./QuoteForm";

const TRUST = [
  "Fully Licensed, Bonded & Insured",
  "100% Satisfaction Guarantee",
  "Background-Checked Cleaners",
  "Upfront Pricing — No Surprises",
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="tagstrip">
            <Sparkles />
            Sparkling Clean &bull; Meticulous Care
          </div>
          <h1>
            SPARKLING CLEAN.<br />
            ABSOLUTELY<br />
            <span className="g">HONEST.</span>
          </h1>

          <div className="hero-cta">
            <a href="tel:+12058880199" className="btn btn--teal btn--lg">
              <Phone />
              (205) 888-0199
            </a>
            <a href="#quote" className="btn btn--ghost btn--lg">
              Get an Estimate
            </a>
          </div>

          <ul className="trust-list">
            {TRUST.map((t) => (
              <li key={t}>
                <span className="trust-ck" aria-hidden="true"><Check /></span>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}
