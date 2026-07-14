import Image from "next/image";
import { Check, ArrowRight, Shield, Heart, Sparkle } from "./Icons";

const CHECKLIST = [
  "Requested times, not random arrival",
  "Clear communication from start to finish",
  "Pay only after your clean is complete",
  "Trusted, detail-focused professionals",
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-photo" aria-hidden="true">
        <Image
          src="/hero-home.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="wrap">
        <div className="hero-text-col">
          <h1>
            Get your
            <br />
            <span className="accent">
              weekends back.
              <Sparkle className="h1-sparkle" aria-hidden="true" />
            </span>
          </h1>
          <p className="sub">
            We clean with care so you can focus on what matters most.
          </p>

          <ul className="checks hero-checks">
            {CHECKLIST.map((item) => (
              <li key={item}>
                <span className="ck" aria-hidden="true"><Check /></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="hero-cta">
            <a href="#quote" className="btn btn--primary btn--lg">
              Get My Personalized Quote
              <ArrowRight />
            </a>
          </div>
          <p className="hero-payment-note">
            <Shield aria-hidden="true" />
            No payment today. Pay after your service is complete.
          </p>
        </div>

        <div className="hero-photo-card reveal">
          <span className="hero-photo-card-icon" aria-hidden="true"><Heart /></span>
          <div>
            <b>A clean home feels good.</b>
            <p>Having your time back feels even better.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
