import Image from "next/image";
import { Check } from "./Icons";

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
            <a href="#quote" className="btn btn--primary btn--lg">
              Get my personalized quote
            </a>
            <a href="#process" className="btn btn--secondary btn--lg">
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

        <div className="hero-photo reveal">
          <Image
            src="/hero-home.jpg"
            alt="A bright, sunlit modern living room"
            fill
            priority
            sizes="(max-width: 960px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
