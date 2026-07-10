import { Phone, Check, Sparkles } from "./Icons";
import QuoteForm from "./QuoteForm";
import Watermark from "./Watermark";

const TRUST = [
  "Veteran-Owned & Operated",
  "Fully Licensed, Bonded & Insured",
  "100% Satisfaction Guarantee",
  "Eco-Friendly Products Available",
  "Trained, Background-Checked Staff",
  "Upfront Pricing — No Surprises",
];

export default function Hero() {
  return (
    <section className="hero">
      <Watermark />
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

          <div className="hero-rating">
            <span className="hero-stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <span className="hero-rating-text">4.9 &bull; 120+ Five-Star Reviews</span>
          </div>

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
