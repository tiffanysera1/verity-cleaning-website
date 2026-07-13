import { Check, Phone } from "./Icons";
import QuoteForm from "./QuoteForm";

const TRUST = [
  "Fully licensed, bonded & insured",
  "100% satisfaction guarantee",
  "Background-checked cleaners",
  "Upfront pricing — no surprises",
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <h1>
            A Clean Home.
            <br />
            More Time Back.
          </h1>
          <p className="sub">
            Life is busy enough. We&rsquo;ll take care of the cleaning so you can spend more
            time with your family, your hobbies, your pets &mdash; or simply relax.
          </p>

          <div className="hero-cta">
            <a href="tel:+12058880199" className="btn btn--secondary btn--lg">
              <Phone />
              Call or text (205) 888-0199
            </a>
            <a href="#process" className="btn btn--ghost btn--lg">
              What to expect
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

        <div className="hero-quote-wrap">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
